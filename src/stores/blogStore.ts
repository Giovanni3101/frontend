import { create } from 'zustand';
import { API_BASE_URL, API_ENDPOINTS } from '../components/config/api';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  authorId: string;
  published: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogStore {
  posts: BlogPost[];
  isLoading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  createPost: (post: Partial<BlogPost>) => Promise<void>;
  updatePost: (id: string, post: Partial<BlogPost>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  isLoading: false,
  error: null,

  fetchPosts: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.blog}`);
      if (!response.ok) throw new Error('Failed to fetch posts');

      const posts = await response.json();
      set({ posts });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  createPost: async (post) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Not authenticated');

      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.blog}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) throw new Error('Failed to create post');
      
      const newPost = await response.json();
      set((state) => ({ posts: [newPost, ...state.posts] }));
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  updatePost: async (id, post) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Not authenticated');

      const response = await fetch(`https://serverisigsite.onrender.com/api/blog/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) throw new Error('Failed to update post');

      const updatedPost = await response.json();
      set((state) => ({
        posts: state.posts.map((p) => (p._id === id ? updatedPost : p)),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  deletePost: async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Not authenticated');

      const response = await fetch(`https://serverisigsite.onrender.com/api/blog/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to delete post');

      set((state) => ({
        posts: state.posts.filter((p) => p._id !== id),
      }));
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },
}));