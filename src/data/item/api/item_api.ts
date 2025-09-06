import { apiClient } from "../../../common/services/api";
import type { ApiResponse } from "../../common/ApiResponse";
import type { ItemRequestModel } from "../model/item_request_model";
import type { ItemResponseModel } from "../model/item_response_model";

class ItemApi {
  private static instance: ItemApi;

  public static getInstance(): ItemApi {
    if (!ItemApi.instance) {
      ItemApi.instance = new ItemApi();
    }
    return ItemApi.instance;
  }

  async getAllItems(): Promise<ItemResponseModel[]> {
    try {
      const response = (await apiClient.get("/item/all")).data as ApiResponse<
        ItemResponseModel[]
      >;
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getItemById(id: string): Promise<ItemResponseModel | null> {
    // Implementation to get an item by ID
    try {
      const response = (await apiClient.get(`/item/${id}`))
        .data as ApiResponse<ItemResponseModel>;
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createItem(item: ItemRequestModel): Promise<ItemResponseModel | null> {
    // Implementation to create a new item
    console.log("Creating item:", item);
    try {
      const response = (await apiClient.post("/item/add", item))
        .data as ApiResponse<ItemResponseModel>;
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateItem(id: string, item: Partial<ItemRequestModel>) {
    try {
      const response = (await apiClient.put(`/item/${id}`, item))
        .data as ApiResponse<ItemResponseModel>;
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteItem(id: string) {
    // Implementation to delete an item
    try {
      const response = (await apiClient.delete(`/item/${id}`))
        .data as ApiResponse<boolean>;
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

// Create singleton instance
export const itemApi = ItemApi.getInstance();
