import { apiClient } from './api';
import type { 
  BlogPost, 
  ApiResponse, 
  CreatePostRequest, 
  UpdatePostRequest, 
  SearchFilters
} from '../types';

export const blogService = {
  // Get all posts with optional filters
  getPosts: async (
    filters: SearchFilters = {}, 
    page = 1, 
    limit = 10
  ): Promise<ApiResponse<BlogPost[]>> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== undefined && value !== '')
      ),
    });
    
    const response = await apiClient.get(`/posts?${params}`);
    return response.data;
  },

  // Get a single post by ID or slug
  getPost: async (idOrSlug: string): Promise<ApiResponse<BlogPost>> => {
    const response = await apiClient.get(`/posts/${idOrSlug}`);
    return response.data;
  },

  // Create a new post
  createPost: async (postData: CreatePostRequest): Promise<ApiResponse<BlogPost>> => {
    const formData = new FormData();
    
    Object.entries(postData).forEach(([key, value]) => {
      if (key === 'tags' && Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (key === 'coverImage' && value instanceof File) {
        formData.append(key, value);
      } else if (value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    const response = await apiClient.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Update an existing post
  updatePost: async (postData: UpdatePostRequest): Promise<ApiResponse<BlogPost>> => {
    const { id, ...updateData } = postData;
    const formData = new FormData();
    
    Object.entries(updateData).forEach(([key, value]) => {
      if (key === 'tags' && Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (key === 'coverImage' && value instanceof File) {
        formData.append(key, value);
      } else if (value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    const response = await apiClient.put(`/posts/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete a post
  deletePost: async (postId: string): Promise<ApiResponse<void>> => {
    const response = await apiClient.delete(`/posts/${postId}`);
    return response.data;
  },

  // Like/unlike a post
  toggleLike: async (postId: string): Promise<ApiResponse<{ liked: boolean; likes: number }>> => {
    const response = await apiClient.post(`/posts/${postId}/like`);
    return response.data;
  },

  // Increment post views
  incrementViews: async (postId: string): Promise<ApiResponse<void>> => {
    const response = await apiClient.post(`/posts/${postId}/view`);
    return response.data;
  },

  // Get featured posts
  getFeaturedPosts: async (): Promise<ApiResponse<BlogPost[]>> => {
    const response = await apiClient.get('/posts/featured');
    return response.data;
  },

  // Get trending posts
  getTrendingPosts: async (): Promise<ApiResponse<BlogPost[]>> => {
    const response = await apiClient.get('/posts/trending');
    return response.data;
  },

  // Search posts
  searchPosts: async (query: string): Promise<ApiResponse<BlogPost[]>> => {
    const response = await apiClient.get(`/posts/search?q=${encodeURIComponent(query)}`);
    return response.data;
  },
};
