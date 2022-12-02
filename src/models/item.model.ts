import { Schema, model } from 'mongoose';
import { Car } from '../interfaces/car.interface';

const ITEM_SCHEMA = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ['gasoline', 'diesel', 'electric'],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ITEM_MODEL = model(
  'items',
  ITEM_SCHEMA
); /*table name, table schema */
