import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../common/types/types";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  status: "loading" | "success" | "error";
  //   login: (user: User) => void;
  //   logout: () => void;
  //   updateUser: (user: Partial<User>) => void;
  //   setLoading: (loading: boolean) => void;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    status: "loading",
  } as AuthState,
  reducers: {
    login: (state, action) => {
      state.status = "loading";
      // use desctruring here
      const { email, password } = action.payload as {
        email: string;
        password: string;
      };
      const validateLogin: () => boolean = () => {
        // validate email and password here
        console.log("Validating login information");
        return true;
      };
      const mockUser: User = {
        id: "1",
        username: "demo_user",
        email: email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      state.user = mockUser;
      state.isAuthenticated = true;
      state.status = "success";
    },
    logout: (state) => {
      state.status = "loading";
      // Call apis to logout user here
      state.user = null;
      state.isAuthenticated = false;
      state.status = "success";
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
