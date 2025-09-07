export const ItemCategory = {
  ELECTRONICS: "ELECTRONICS",
  FURNITURE: "FURNITURE",
  VEHICLES: "VEHICLES",
  TOOLS: "TOOLS",
  SPORTS_EQUIPMENT: "SPORTS_EQUIPMENT",
  BOOKS: "BOOKS",
  CLOTHING: "CLOTHING",
  APPLIANCES: "APPLIANCES",
  GARDEN_EQUIPMENT: "GARDEN_EQUIPMENT",
  MUSICAL_INSTRUMENTS: "MUSICAL_INSTRUMENTS",
} as const;

export const AvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  RENTED: "RENTED",
  MAINTENANCE: "MAINTENANCE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

export const UserRole = {
  OWNER: "OWNER",
  RENTER: "RENTER",
  ADMIN: "ADMIN",
} as const;

export const StateStatus = {
  INITIAL: "INITIAL",
  ISLOADING: "ISLOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

// Type utilities - use these when you need just the type
export type ItemCategoryType = (typeof ItemCategory)[keyof typeof ItemCategory];
export type AvailabilityStatusType =
  (typeof AvailabilityStatus)[keyof typeof AvailabilityStatus];
export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];
export type StateStatusType = (typeof StateStatus)[keyof typeof StateStatus];
