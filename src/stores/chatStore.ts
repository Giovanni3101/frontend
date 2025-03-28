import { create } from 'zustand';
import io from 'socket.io-client';
import { API_BASE_URL, API_ENDPOINTS, SOCKET_URL } from '../components/config/api';

const socket = io(SOCKET_URL);

interface Message {
  _id: string;
  content: string;
  userId: string | null;
  userName: string;
  createdAt: string;
}

interface ChatStore {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string, userName: string) => Promise<void>;
  fetchMessages: () => Promise<void>;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isLoading: false,
  error: null,

  sendMessage: async (content: string, userName: string) => {
    try {
      const token = localStorage.getItem('token');
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.messages}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ content, userName }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const newMessage = await response.json();
      socket.emit('send_message', newMessage);
      
      set((state) => ({
        messages: [...state.messages, newMessage],
      }));
    } catch (error) {
      set({ error: (error as Error).message });
      throw error;
    }
  },

  fetchMessages: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.messages}`);

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const messages = await response.json();
      set({ messages, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));

socket.on('receive_message', (message: Message) => {
  useChatStore.setState((state) => ({
    messages: [...state.messages, message],
  }));
});