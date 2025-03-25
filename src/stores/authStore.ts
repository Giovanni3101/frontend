import { create } from 'zustand';

interface User {
  _id: string;
  email: string;
  role: string;
}

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true });
      const response = await fetch('http://serverisigsite.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      const { token } = await response.json();
      localStorage.setItem('token', token);
      
      // Decode token to get user info
      const payload = JSON.parse(atob(token.split('.')[1]));
      set({ user: payload });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (email: string, password: string) => {
    try {
      set({ isLoading: true });
      const response = await fetch('http://serverisigsite.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Registration failed');

      const { token } = await response.json();
      localStorage.setItem('token', token);
      
      // Decode token to get user info
      const payload = JSON.parse(atob(token.split('.')[1]));
      set({ user: payload });
    } catch (error) {
      set({ error: (error as Error).message });
      console.log('erreur est', error)
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null });
  },
}));