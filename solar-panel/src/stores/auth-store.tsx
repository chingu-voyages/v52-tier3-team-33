import type { User } from "@supabase/supabase-js";
import { create } from "zustand";

import type { LoginSchemaType } from "@/utils/schemas/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginSchemaType) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    set({ isAuthenticated: true, user: { email: credentials.email } as User });
  },
  logout: async () => {
    set({ user: null, isAuthenticated: false });
  },
}));
