const ItemCategory = {
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

const AvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  RENTED: "RENTED",
  MAINTENANCE: "MAINTENANCE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

const UserRole = {
  OWNER: "OWNER",
  RENTER: "RENTER",
  ADMIN: "ADMIN",
} as const;

// export { ItemCategory, AvailabilityStatus, UserRoleEnum };

export type ItemCategory = keyof typeof ItemCategory;
export type AvailabilityStatus = keyof typeof AvailabilityStatus;
export type UserRole = keyof typeof UserRole;
