import { itemApi } from "../../../data/item/api/item_api";
import type { ItemRequestModel } from "../../../data/item/model/item_request_model";
import {
  toItemEntity,
  type ItemResponseModel,
} from "../../../data/item/model/item_response_model";
import type { ItemEntity } from "../entities/ItemEntity";

export class ItemRepository {
  private static instance: ItemRepository;

  public static getInstance(): ItemRepository {
    if (!ItemRepository.instance) {
      ItemRepository.instance = new ItemRepository();
    }
    return ItemRepository.instance;
  }

  async getAllItems(): Promise<ItemEntity[]> {
    // Implementation to get all items
    return (await itemApi.getAllItems()).map((item: ItemResponseModel) =>
      toItemEntity(item)
    );
  }

  async getItemById(id: string): Promise<ItemEntity | null> {
    // Implementation to get an item by ID
    const item = await itemApi.getItemById(id);
    return item ? toItemEntity(item) : null;
  }

  async createItem(itemRequest: ItemRequestModel): Promise<ItemEntity | null> {
    // Implementation to create a new item
    const newItem = await itemApi.createItem(itemRequest);
    return newItem ? toItemEntity(newItem) : null;
  }

  async updateItem(
    id: string,
    item: Partial<ItemRequestModel>
  ): Promise<ItemEntity | null> {
    // Implementation to update an existing item
    const updatedItem = await itemApi.updateItem(id, item);
    return updatedItem ? toItemEntity(updatedItem) : null;
  }

  async deleteItem(id: string): Promise<boolean> {
    // Implementation to delete an item
    return await itemApi.deleteItem(id);
  }
}

export const itemRepository = ItemRepository.getInstance();
