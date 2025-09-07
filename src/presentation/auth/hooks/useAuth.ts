import { useAuthStore } from "../stores/auth_store";

export const useAuth = () => {
  // Implement authentication logic here
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);
  // const logout = useAuthStore((state) => state.logout)

  return {
    user,
    isAuthenticated,
    login,
    // logout,
  };
};
