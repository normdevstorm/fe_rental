import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  HeartIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import type { BlogPost } from "../../../common/types/types";
import {
  formatDateRelative,
  truncateText,
  formatNumber,
} from "../../../common/utils";

interface BlogCardProps {
  post: BlogPost;
  onLike?: (postId: string) => void;
  isLiked?: boolean;
  variant?: "default" | "featured" | "compact";
}

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  onLike,
  isLiked = false,
  variant = "default",
}) => {
  const { t } = useTranslation();

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onLike?.(post.id);
  };

  if (variant === "compact") {
    return (
      <Link to={`/post/${post.slug}`} className="block group animate-fade-in">
        <article className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group-hover:border-primary-300 p-6">
          <div className="flex space-x-5">
            {post.coverImage && (
              <div className="relative overflow-hidden rounded-xl border border-gray-200 group-hover:border-primary-300 transition-colors duration-300">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-24 h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-black text-gray-900 group-hover:text-gradient transition-all duration-300 line-clamp-2 mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                {t("blog.by", { author: post.author.username })} •{" "}
                {formatDateRelative(post.publishedAt || post.createdAt)}
              </p>
              <div className="flex items-center space-x-5 text-sm text-gray-500">
                <span className="flex items-center space-x-2 group/like hover:text-red-500 transition-colors cursor-pointer">
                  <HeartIcon className="h-4 w-4 group-hover/like:scale-110 transition-transform" />
                  <span className="font-semibold">
                    {formatNumber(post.likes)}
                  </span>
                </span>
                <span className="flex items-center space-x-2">
                  <EyeIcon className="h-4 w-4" />
                  <span className="font-semibold">
                    {formatNumber(post.views)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link to={`/post/${post.slug}`} className="block group animate-slide-up">
        <article className="bg-white rounded-3xl shadow-strong border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-700 hover:-translate-y-4 hover:border-primary-200 group-hover:scale-[1.02]">
          {post.coverImage && (
            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
              <div className="absolute top-6 left-6">
                <span
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-black bg-white/95 backdrop-blur-sm shadow-medium border border-white/50 hover:scale-105 transition-transform duration-300"
                  style={{ color: post.category.color }}
                >
                  {post.category.name}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3 text-white/90">
                    <CalendarIcon className="h-4 w-4" />
                    <span className="font-semibold">
                      {formatDateRelative(post.publishedAt || post.createdAt)}
                    </span>
                    <span>•</span>
                    <span className="font-semibold">
                      {t("blog.readTime", { minutes: post.readTime })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="p-8">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 group-hover:text-primary-600 transition-all duration-300 mb-5 line-clamp-2 leading-tight tracking-tight">
              {post.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-7 line-clamp-3 font-medium">
              {truncateText(post.excerpt, 150)}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-shadow duration-300">
                    <span className="text-lg font-black text-white">
                      {post.author.username[0].toUpperCase()}
                    </span>
                  </div>
                  <span className="text-lg font-black text-gray-800">
                    {post.author.username}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <button
                  onClick={handleLike}
                  className="flex items-center space-x-2 hover:text-red-500 transition-colors group/like"
                >
                  {isLiked ? (
                    <HeartSolid className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 group-hover/like:scale-125 transition-transform duration-300" />
                  )}
                  <span className="font-black text-lg">
                    {formatNumber(post.likes)}
                  </span>
                </button>
                <span className="flex items-center space-x-2">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  <span className="font-black text-lg">
                    {formatNumber(post.comments.length)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.slug}`} className="block group animate-fade-in">
      <article className="card overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-3 group-hover:border-primary-300 group-hover:scale-[1.02]">
        {post.coverImage && (
          <div className="aspect-[16/10] relative overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50 transition-all duration-500"></div>
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-gray-700 shadow-soft">
                {t("blog.readTime", { minutes: post.readTime })}
              </div>
            </div>
          </div>
        )}
        <div className="p-7">
          <div className="flex items-center space-x-4 mb-5">
            <span
              className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-black shadow-soft border-2"
              style={{
                backgroundColor: post.category.color + "15",
                color: post.category.color,
                borderColor: post.category.color + "30",
              }}
            >
              {post.category.name}
            </span>
          </div>
          <h3 className="text-xl font-black text-gray-900 group-hover:text-primary-600 transition-all duration-300 mb-4 line-clamp-2 leading-tight tracking-tight">
            {post.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
            {truncateText(post.excerpt, 100)}
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="font-bold">
                {t("blog.by", { author: post.author.username })}
              </span>
              <span className="text-gray-400">•</span>
              <span className="font-semibold">
                {formatDateRelative(post.publishedAt || post.createdAt)}
              </span>
            </div>
            <div className="flex items-center space-x-5 text-gray-500">
              <button
                onClick={handleLike}
                className="flex items-center space-x-2 hover:text-red-500 transition-colors group/like"
              >
                {isLiked ? (
                  <HeartSolid className="h-4 w-4 text-red-500" />
                ) : (
                  <HeartIcon className="h-4 w-4 group-hover/like:scale-125 transition-transform duration-300" />
                )}
                <span className="font-bold">{formatNumber(post.likes)}</span>
              </button>
              <span className="flex items-center space-x-2">
                <EyeIcon className="h-4 w-4" />
                <span className="font-bold">{formatNumber(post.views)}</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
