import { create } from 'zustand';
import io from 'socket.io-client';

const socket = io('http://serverisigsite.onrender.com');

interface Message {
  _id: string;
  content: string;
  userId: string;
  createdAt: string;
}

interface ChatStore {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  fetchMessages: () => Promise<void>;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isLoading: false,
  error: null,

  sendMessage: async (content: string) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Not authenticated');

      const response = await fetch('http://serverisigsite.onrender.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const newMessage = await response.json();
      socket.emit('send_message', newMessage);
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  fetchMessages: async () => {
    try {
      set({ isLoading: true });
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Not authenticated');

      const response = await fetch('http://serverisigsite.onrender.com/api/messages', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch messages');

      const messages = await response.json();
      set({ messages });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

// Socket.IO event listeners
socket.on('receive_message', (message) => {
  useChatStore.setState((state) => ({
    messages: [...state.messages, message],
  }));
});