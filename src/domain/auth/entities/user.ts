import type { UserRole } from "../../../common/types/enums";

export interface UserEntity {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phoneNumber: string;
}
