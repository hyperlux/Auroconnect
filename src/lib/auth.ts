import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase, signIn, signUp, signOut } from './supabase';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  session: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; name: string }) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      session: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          const { session } = await signIn(email, password);
          if (session) {
            const { user } = session;
            set({
              user: {
                id: user.id,
                email: user.email!,
                name: user.user_metadata.name || 'User',
                role: user.role || 'user'
              },
              session,
              isAuthenticated: true,
              isLoading: false
            });
          }
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      register: async ({ email, password, name }) => {
        try {
          set({ isLoading: true, error: null });
          const { session } = await signUp(email, password, { name });
          if (session) {
            const { user } = session;
            set({
              user: {
                id: user.id,
                email: user.email!,
                name: name,
                role: 'user'
              },
              session,
              isAuthenticated: true,
              isLoading: false
            });
          }
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },

      logout: async () => {
        try {
          await signOut();
          set({
            user: null,
            session: null,
            isAuthenticated: false
          });
        } catch (error: any) {
          set({ error: error.message });
          throw error;
        }
      },

      clearError: () => set({ error: null })
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);