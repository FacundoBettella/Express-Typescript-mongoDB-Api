import Jwt from 'jsonwebtoken';
import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import { USER_MODEL } from '../models/user.model';
import { encryptHandler, verifyHandler } from '../utils/bcrypt.hash';

const JWT = process.env['JWT_SECRET'] || '';

const registerNewUser = async (user: User) => {
  const check = await USER_MODEL.findOne({ email: user.email });
  if (check) {
    return 'ALREADY_USER';
  }

  const hash = await encryptHandler(user.password);

  let newUser = {
    ...user,
    password: hash,
  };

  return await USER_MODEL.create(newUser);
};

const loginUser = async (credentials: Auth) => {
  const checkUser = await USER_MODEL.findOne({ email: credentials.email });
  if (!checkUser) {
    return 'USER_NOT_EXIST';
  }

  const checkPass = await verifyHandler(
    credentials.password,
    checkUser.password
  );
  console.log(checkPass);

  if (!checkPass) {
    return 'WRONG_PASSWORD';
  }

  const payload = {
    sub: checkUser._id,
    role: checkUser.role,
  };

  const token = Jwt.sign(payload, JWT);

  return {
    user: {
      username: checkUser.name,
      lastname: checkUser.lastname,
      role: checkUser.role,
    },
    access_token: token,
  };
};

export { registerNewUser, loginUser };
