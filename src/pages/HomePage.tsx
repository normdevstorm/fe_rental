import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRightIcon,
  SparklesIcon,
  FireIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import BlogCard from "../presentation/common/components/BlogCard";
import type { BlogPost } from "../common/types/types";
import { useBlogStore } from "../store/blogStore";
import { itemApi } from "../data/item/api/item_api";
import { toItemEntity } from "../data/item/model/item_response_model";

import { useInjection } from "brandi-react";
import { TOKENS } from "../common/di/tokens";

// Mock data for demo purposes
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React 19",
    content: "React 19 brings exciting new features...",
    excerpt:
      "Discover the latest features in React 19 and how they can improve your development workflow.",
    slug: "getting-started-with-react-19",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    category: {
      id: "1",
      name: "Technology",
      slug: "technology",
      color: "#3B82F6",
    },
    tags: [
      { id: "1", name: "React", slug: "react" },
      { id: "2", name: "JavaScript", slug: "javascript" },
    ],
    author: {
      id: "1",
      username: "johndoe",
      email: "john@example.com",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    publishedAt: "2024-08-20",
    createdAt: "2024-08-20",
    updatedAt: "2024-08-20",
    isPublished: true,
    readTime: 5,
    likes: 42,
    views: 1250,
    comments: [],
  },
  {
    id: "2",
    title: "Modern CSS Techniques for 2024",
    content: "CSS has evolved significantly...",
    excerpt:
      "Explore the latest CSS features and techniques that will make your designs more efficient and beautiful.",
    slug: "modern-css-techniques-2024",
    coverImage:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
    category: { id: "2", name: "Design", slug: "design", color: "#EC4899" },
    tags: [
      { id: "3", name: "CSS", slug: "css" },
      { id: "4", name: "Web Design", slug: "web-design" },
    ],
    author: {
      id: "2",
      username: "janesmith",
      email: "jane@example.com",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    publishedAt: "2024-08-19",
    createdAt: "2024-08-19",
    updatedAt: "2024-08-19",
    isPublished: true,
    readTime: 8,
    likes: 38,
    views: 980,
    comments: [],
  },
  {
    id: "3",
    title: "The Future of Web Development",
    content: "Web development is constantly evolving...",
    excerpt:
      "A comprehensive look at emerging trends and technologies shaping the future of web development.",
    slug: "future-of-web-development",
    coverImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    category: {
      id: "1",
      name: "Technology",
      slug: "technology",
      color: "#3B82F6",
    },
    tags: [
      { id: "5", name: "Web Development", slug: "web-development" },
      { id: "6", name: "Future Tech", slug: "future-tech" },
    ],
    author: {
      id: "1",
      username: "johndoe",
      email: "john@example.com",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    publishedAt: "2024-08-18",
    createdAt: "2024-08-18",
    updatedAt: "2024-08-18",
    isPublished: true,
    readTime: 12,
    likes: 67,
    views: 1540,
    comments: [],
  },
];

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { setPosts } = useBlogStore();
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [trendingPosts, setTrendingPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // In a real app, you would fetch from API
    // fetchItems();
    login();
    // refreshToken();
    // fetchItems();
    setPosts(mockPosts);
    setFeaturedPosts(mockPosts.slice(0, 1));
    setLatestPosts(mockPosts.slice(0, 3));
    setTrendingPosts(mockPosts.slice(0, 2));
  }, [setPosts]);

  const handleLike = (postId: string) => {
    // In a real app, this would call the API
    console.log("Like post:", postId);
  };

  const fetchItems = async () => {
    try {
      const items = await itemApi.getAllItems();
      const itemEntity = toItemEntity(items.at(0)!);
      console.log("Fetched items:", new Date(itemEntity.createdAt));
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // const createItem = async () => {
  //   try {
  //     const itemRequest: ItemEntity = {
  //       name: "New Item",
  //       description: "This is a new item",
  //       price: 99.99,
  //       createdAt: new Date(),
  //       id: "0",
  //       updatedAt: new Date().toISOString(),
  //       address: "123 Main St",
  //       conditionRating: 5,
  //       status: "AVAILABLE",
  //       category: "ELECTRONICS",
  //       latePrice: 10,
  //       depositAmount: 20,
  //       amount: 1,
  //     };
  //     const newItem = await itemUseCase.addItem(itemRequest);
  //     if (newItem) {
  //       console.log("Created item:", newItem);
  //     }
  //   } catch (error) {
  //     console.error("Error creating item:", error);
  //   }
  // };

  const authUseCase = useInjection(TOKENS.authUsecase);

  const login = async () => {
    try {
      const loginRequest = {
        username: "norm_owner_3",
        password: "12345678",
      };
      await authUseCase.login(loginRequest);
      console.log("Login response:", localStorage.getItem("accessToken"));
      await fetchItems();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // const refreshToken = async () => {
  //   try {
  //     const response = await authUseCase.refreshToken(
  //       localStorage.getItem("refreshToken") || ""
  //     );
  //     console.log("Refresh token response:", response);
  //   } catch (error) {
  //     console.error("Refresh token error:", error);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-28 lg:py-36 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0ydjYiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-10 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {t("home.title")}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-100 mb-14 max-w-4xl mx-auto leading-relaxed font-medium">
              {t("home.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                to="/browse"
                className="group inline-flex items-center px-10 py-5 text-primary-600 font-bold rounded-2xl hover:bg-gray-50 hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 text-lg border-2 border-white"
              >
                {t(`blog.views`, { count: 3 })}
                <ArrowRightIcon className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/create"
                className="group inline-flex items-center px-10 py-5 border-3 border-white text-white hover:text-black font-bold rounded-2xl hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:-translate-y-2 text-lg shadow-xl hover:shadow-2xl"
              >
                {t("nav.create")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <SparklesIcon className="h-10 w-10 text-yellow-500" />
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
                {t("home.featuredPosts")}
              </h2>
            </div>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Discover our handpicked selection of outstanding articles
            </p>
          </div>
          {featuredPosts.length > 0 && (
            <div className="max-w-5xl mx-auto">
              <BlogCard
                post={featuredPosts[0]}
                variant="featured"
                onLike={handleLike}
              />
            </div>
          )}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-20">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <ClockIcon className="h-10 w-10 text-green-500" />
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
                  {t("home.latestPosts")}
                </h2>
              </div>
              <p className="text-2xl text-gray-700 font-medium">
                Stay updated with our newest content
              </p>
            </div>
            <Link
              to="/browse"
              className="group inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-xl transition-colors mx-auto lg:mx-0 bg-primary-50 hover:bg-primary-100 px-6 py-3 rounded-2xl border-2 border-primary-200 hover:border-primary-300"
            >
              {t("common.viewMore")}
              <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} onLike={handleLike} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Posts */}
      <section className="py-24 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <FireIcon className="h-10 w-10 text-orange-500" />
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
                {t("home.trendingPosts")}
              </h2>
            </div>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              The most popular articles our community is talking about
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {trendingPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                variant="featured"
                onLike={handleLike}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-28 bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0ydjYiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
            Ready to Share Your Story?
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Join our community of writers and share your insights with the
            world. Your voice matters, and we can't wait to hear it.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              to="/create"
              className="group inline-flex items-center px-12 py-6 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-xl border-2 border-primary-500"
            >
              {t("nav.create")}
              <ArrowRightIcon className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/browse"
              className="group inline-flex items-center px-12 py-6 border-3 border-white/40 text-white font-bold rounded-2xl hover:bg-white/15 transition-all duration-300 text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
