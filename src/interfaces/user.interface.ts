import { Auth } from './auth.interface';
import { Car } from './car.interface';

export interface User extends Auth {
  name: string;
  lastname: string;
  role: string;
  items: Car[];
}

export interface ICreateUser extends Omit<User, 'createdAt' | 'updatedAt'> {}

export interface IUpdateUser extends Partial<User> {
  _id: string;
}
