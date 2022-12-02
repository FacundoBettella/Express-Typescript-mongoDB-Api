import { Schema, model } from 'mongoose';
import { Car } from '../interfaces/car.interface';

const ITEM_SCHEMA = new Schema<Car>(
  {
    color: {
      type: String,
    },
    gas: {
      type: String,
      enum: ['gasoline', 'diesel', 'electric'],
    },
    year: {
      type: Number,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ITEM_MODEL = model("items", ITEM_SCHEMA); /*table name, table schema */
