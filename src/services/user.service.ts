import { User, IUpdateUser } from '../interfaces/user.interface';
import { USER_MODEL } from '../models/user.model';

export class UserService {
  constructor() {}

  static async get(): Promise<User[] | null> {
    const users = await USER_MODEL.find({});
    return users;
  }

  static async getById(id: IUpdateUser['_id']): Promise<User | null> {
    const user = await USER_MODEL.findOne({ _id: id });
    return user;
  }

  static async update(id: IUpdateUser['_id'], changes: IUpdateUser) {
    await USER_MODEL.findByIdAndUpdate({ _id: id }, changes);
    const response = await this.getById(id);
    return response;
  }

  static async delete(id: IUpdateUser['_id']) {
    const deletedUser = await USER_MODEL.findOneAndDelete({
      _id: id,
    });
    return deletedUser;
  }
}
