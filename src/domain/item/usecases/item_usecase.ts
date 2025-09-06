import { toItemRequestModel, type ItemEntity } from "../entities/ItemEntity";
import { itemRepository } from "../repositories/item_repository";

export class ItemUseCase {
  private static instance: ItemUseCase;

  public static getInstance(): ItemUseCase {
    if (!ItemUseCase.instance) {
      ItemUseCase.instance = new ItemUseCase();
    }
    return ItemUseCase.instance;
  }

  async fetchItems(): Promise<ItemEntity[]> {
    return await itemRepository.getAllItems();
  }

  async fetchItemById(id: string): Promise<ItemEntity | null> {
    return await itemRepository.getItemById(id);
  }

  async addItem(item: ItemEntity): Promise<ItemEntity | null> {
    return await itemRepository.createItem(toItemRequestModel(item));
  }

  async updateItem(id: string, item: ItemEntity): Promise<ItemEntity | null> {
    return await itemRepository.updateItem(id, toItemRequestModel(item));
  }

  async removeItem(id: string): Promise<boolean> {
    return await itemRepository.deleteItem(id);
  }
}

export const itemUseCase = ItemUseCase.getInstance();
