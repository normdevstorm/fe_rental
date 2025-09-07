import type {
  AvailabilityStatus,
  ItemCategory,
} from "../../../common/types/enums";
import type { ItemEntity } from "../../../domain/item/entities/ItemEntity";

export interface ItemResponseModel {
  id: string;
  ownerId: string;
  category: ItemCategory;
  name: string;
  description: string;
  price: number;
  latePrice: number;
  depositAmount: number;
  amount: number;
  address: string;
  conditionRating: number;
  status: AvailabilityStatus;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Converts ItemResponseModel to ItemEntity, here they are identical, we can manipulate if needed
export function toItemEntity(response: ItemResponseModel): ItemEntity {
  return {
    ...response,
    createdAt: new Date(response.createdAt),
  };
}
