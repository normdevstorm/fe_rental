import type { UserRole } from "../../../../common/types/enums";

export interface SignUpRequestModel {
  username: string;
  password: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
