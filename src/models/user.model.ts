import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const USER_SCHEMA = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const USER_MODEL = model('users', USER_SCHEMA);
