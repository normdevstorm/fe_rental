export interface LoginResponseModel {
  accessToken: string;
  refreshToken: string;
}

export function toLoginEntity(response: LoginResponseModel) {
  return {
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
  };
}
