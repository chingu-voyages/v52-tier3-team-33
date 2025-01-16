import type { User } from "@supabase/supabase-js";
import { create } from "zustand";

import { supabase } from "@/utils/db/client";
import type { LoginSchemaType } from "@/utils/schemas/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginSchemaType) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    const { data, error } = await supabase.auth.signInWithPassword(credentials);

    if (error) {
      throw new Error(error.message);
    }

    set({ user: data.user, isAuthenticated: true });
  },
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
