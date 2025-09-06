import type {
  AvailabilityStatusEnum,
  ItemCategoryEnum,
} from "../../../common/types/enums";

export interface ItemRequestModel {
  name: string;
  description: string;
  // Request might not include this field
  //   isActive: boolean;
  createdAt: string; // ISO string for LocalDateTime
  category: ItemCategoryEnum;
  price: number;
  latePrice: number;
  depositAmount: number;
  amount: number;
  address?: string;
  conditionRating?: number;
  status?: AvailabilityStatusEnum; // Adjust type if you have an AvailabilityStatus enum/type
}
