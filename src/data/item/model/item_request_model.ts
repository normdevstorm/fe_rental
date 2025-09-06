import type { ItemCategoryEnum } from "../../../common/types/enums";

export interface ItemRequestModel {
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string; // ISO string for LocalDateTime
  category: ItemCategoryEnum;
  price: number;
  latePrice: number;
  depositAmount: number;
  amount: number;
  address: string;
  conditionRating: number;
  status: string; // Adjust type if you have an AvailabilityStatus enum/type
}
