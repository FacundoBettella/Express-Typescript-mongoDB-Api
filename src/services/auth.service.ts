// import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import { USER_MODEL } from '../models/user.model';
import { encrypHandler } from '../utils/bcrypt.hash';

const registerNewUser = async (user: User) => {
  const check = await USER_MODEL.findOne({ email: user.email });
  if (check) {
    return 'ALREADY_USER';
  }
  
  const hash = await encrypHandler(user.password);

  let newUser = {
    ...user,
    password: hash,
  };

  return await USER_MODEL.create(newUser);
};

const loginUser = () => {};

export { registerNewUser, loginUser };
