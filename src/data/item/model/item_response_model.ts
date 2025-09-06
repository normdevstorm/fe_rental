import type {
  AvailabilityStatusEnum,
  ItemCategoryEnum,
} from "../../../common/types/enums";

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
