import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createAuthSlice, type AuthSlice } from "./auth_slice";

export const useAuthStore = create<AuthSlice>()(
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
