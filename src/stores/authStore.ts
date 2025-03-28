import { create } from 'zustand';
import { API_BASE_URL, API_ENDPOINTS } from '../components/config/api';
import { toast } from 'react-hot-toast';

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
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  checkAuth: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Math.floor(Date.now() / 1000);
        
        if (payload.exp && payload.exp > currentTime) {
          set({ user: payload });
        } else {
          localStorage.removeItem('token');
          set({ user: null });
        }
      } catch (error) {
        localStorage.removeItem('token');
        set({ user: null });
      }
    }
  },

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.auth.login}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      
      // Decode token to get user info
      const payload = JSON.parse(atob(data.token.split('.')[1]));
      set({ user: payload, isLoading: false });
      toast.success('Connexion réussie !');
    } catch (error) {
      const message = (error as Error).message;
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },

  register: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.auth.register}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      localStorage.setItem('token', data.token);
      
      // Decode token to get user info
      const payload = JSON.parse(atob(data.token.split('.')[1]));
      set({ user: payload, isLoading: false });
      toast.success('Inscription réussie !');
    } catch (error) {
      const message = (error as Error).message;
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null });
    toast.success('Déconnexion réussie !');
  },
}));

// Initialize auth state
useAuthStore.getState().checkAuth();