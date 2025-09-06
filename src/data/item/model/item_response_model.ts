import type {
  AvailabilityStatusEnum,
  ItemCategoryEnum,
} from "../../../common/types/enums";
import type { ItemEntity } from "../../../domain/item/entities/ItemEntity";

export interface ItemResponseModel {
  id: string;
  ownerId: string;
  category: ItemCategoryEnum;
  name: string;
  description: string;
  price: number;
  latePrice: number;
  depositAmount: number;
  amount: number;
  address: string;
  conditionRating: number;
  status: AvailabilityStatusEnum;
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
