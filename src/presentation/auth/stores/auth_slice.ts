import { StateStatus, type StateStatusType } from "../../../common/types/enums";
import type { LoginRequestModel } from "../../../data/auth/model/request/login_request_model";
import type { UserEntity } from "../../../domain/auth/entities/user";
import { container } from "../../../common/di/container";
import { TOKENS } from "../../../common/di/tokens";
import type { StateCreator } from "zustand";

export interface AuthSlice {
  // State
  user: UserEntity | null;
  isAuthenticated: boolean;
  stateStatus: StateStatusType;
  // Actions
  login: (loginRequest: LoginRequestModel) => Promise<void>;
  //   logout: () => boolean;
  // updateUser: (user: Partial<User>) => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set,
  get
) => ({
  user: null,
  isAuthenticated: false,
  stateStatus: StateStatus.INITIAL,
  login: async (loginRequest: LoginRequestModel) => {
    set({
      user: null,
      isAuthenticated: false,
      stateStatus: StateStatus.ISLOADING,
    });
    try {
      const response = await container
        .get(TOKENS.authUsecase)
        .login(loginRequest);
      if (response !== null) {
        set({
          ///TODO: set actual user data here
          user: null, // Assuming response contains user data
          isAuthenticated: true,
          stateStatus: StateStatus.SUCCESS,
        });
      } else {
        set({ stateStatus: StateStatus.ERROR });
      }
    } catch (error) {
      set({ stateStatus: StateStatus.ERROR });
      console.error("Login error:", error);
    }
  },
});

// Then when creating your store, apply middleware:
/*
import { create } from 'zustand';
import { createAuthSlice } from './authSlice';

export const useStore = create<AuthSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
      }),
      {
        name: "auth-storage",
      }
    )
  )
);
*/
