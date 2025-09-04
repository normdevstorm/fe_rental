// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import type { User } from '../types';

// interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (user: User) => void;
//   logout: () => void;
//   updateUser: (user: Partial<User>) => void;
//   setLoading: (loading: boolean) => void;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set, get) => ({
//       user: null,
//       isAuthenticated: false,
//       isLoading: false,
//       login: (user) => set({ user, isAuthenticated: true }),
//       logout: () => set({ user: null, isAuthenticated: false }),
//       updateUser: (updatedUser) => {
//         const currentUser = get().user;
//         if (currentUser) {
//           set({ user: { ...currentUser, ...updatedUser } });
//         }
//       },
//       setLoading: (isLoading) => set({ isLoading }),
//     }),
//     {
//       name: 'auth-storage',
//       partialize: (state) => ({
//         user: state.user,
//         isAuthenticated: state.isAuthenticated,
//       }),
//     }
//   )
// );
