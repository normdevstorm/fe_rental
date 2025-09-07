import type {
  AvailabilityStatus,
  ItemCategory,
} from "../../../common/types/enums";
import type { ItemRequestModel } from "../../../data/item/model/item_request_model";

export interface ItemEntity {
  id?: string;
  ownerId?: string;
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
  isActive?: boolean;
  createdAt: Date;
  updatedAt?: string;
}

export function toItemRequestModel(entity: ItemEntity): ItemRequestModel {
  return {
    name: entity.name,
    description: entity.description,
    createdAt: entity.createdAt.toISOString(),
    category: entity.category,
    price: entity.price,
    latePrice: entity.latePrice,
    depositAmount: entity.depositAmount,
    amount: entity.amount,
    address: entity.address,
    conditionRating: entity.conditionRating,
    status: entity.status,
  };
}
