import { Car } from '../interfaces/car.interface';
import { ITEM_MODEL } from '../models/item.model';

export class ItemService {
  constructor() {}

  static async insertItemService(item: Car): Promise<Car> {
    const responseInsert = await ITEM_MODEL.create(item);
    return responseInsert;
  }

  static async findItemsService(): Promise<Car[]> {
    const responseItems = await ITEM_MODEL.find({});
    return responseItems;
  }

  static async findItemService(id: Car['id']) {
    const responseItem = await ITEM_MODEL.findOne({ _id: id });
    return responseItem;
  }

  static async updateItemService(id: string, changes: Car) {
    await ITEM_MODEL.findOneAndUpdate({ _id: id }, changes);
    const response = await this.findItemService(id);
    return response;
  }

  static async deleteItemService(id: Car['id']) {
    const deletedItem = await ITEM_MODEL.findOneAndDelete({ _id: id });
    return deletedItem;
  }
}
