import { create } from "zustand";
import type { BlogPost, SearchFilters } from "../common/types/types";

interface BlogState {
  posts: BlogPost[];
  currentPost: BlogPost | null;
  filters: SearchFilters;
  isLoading: boolean;
  error: string | null;
  setPosts: (posts: BlogPost[]) => void;
  addPost: (post: BlogPost) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (postId: string) => void;
  setCurrentPost: (post: BlogPost | null) => void;
  setFilters: (filters: SearchFilters) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  likePost: (postId: string) => void;
  incrementViews: (postId: string) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  posts: [],
  currentPost: null,
  filters: {},
  isLoading: false,
  error: null,
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  updatePost: (updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      ),
    })),
  deletePost: (postId) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== postId),
    })),
  setCurrentPost: (currentPost) => set({ currentPost }),
  setFilters: (filters) => set({ filters }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  likePost: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ),
    })),
  incrementViews: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, views: post.views + 1 } : post
      ),
    })),
}));
