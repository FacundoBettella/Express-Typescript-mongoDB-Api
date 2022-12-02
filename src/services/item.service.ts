import { Car } from '../interfaces/car.interface';
import { ITEM_MODEL } from '../models/item.model';

const insertItemService = async (item: Car): Promise<Car> => {
  const responseInsert = await ITEM_MODEL.create(item);
  return responseInsert;
};

const findItemsService = async (): Promise<Car[]> => {
  const responseItems = await ITEM_MODEL.find({});
  return responseItems;
};

const findItemService = async (id: Car['id']) => {
  const responseItem = await ITEM_MODEL.findOne({ _id: id });
  return responseItem;
};

const updateItemService = async (id: Car['id'], changes: Car) => {
  await ITEM_MODEL.findOneAndUpdate({ id: id }, changes);
  const response = await findItemService(id);
  return response;
};

const deleteItemService = async (id: Car['id']) => {
  const deletedItem = await ITEM_MODEL.findOneAndDelete({ _id: id });
  return deletedItem;
};

export {
  findItemService,
  findItemsService,
  insertItemService,
  updateItemService,
  deleteItemService,
};
