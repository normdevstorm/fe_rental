import type {
  AvailabilityStatus,
  ItemCategory,
} from "../../../common/types/enums";

export interface ItemRequestModel {
  name: string;
  description: string;
  // Request might not include this field
  //   isActive: boolean;
  createdAt: string; // ISO string for LocalDateTime
  category: ItemCategory;
  price: number;
  latePrice: number;
  depositAmount: number;
  amount: number;
  address?: string;
  conditionRating?: number;
  status?: AvailabilityStatus; // Adjust type if you have an AvailabilityStatus enum/type
}
