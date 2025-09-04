import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import BlogCard from '../components/BlogCard';
import LoadingSpinner from '../components/LoadingSpinner';
import type { BlogPost } from '../types';
import { useBlogStore } from '../store/blogStore';
import { debounce } from '../utils';

// Mock data - same as HomePage for consistency
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React 19',
    content: 'React 19 brings exciting new features...',
    excerpt: 'Discover the latest features in React 19 and how they can improve your development workflow.',
    slug: 'getting-started-with-react-19',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    category: { id: '1', name: 'Technology', slug: 'technology', color: '#3B82F6' },
    tags: [
      { id: '1', name: 'React', slug: 'react' },
      { id: '2', name: 'JavaScript', slug: 'javascript' }
    ],
    author: {
      id: '1',
      username: 'johndoe',
      email: 'john@example.com',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    },
    publishedAt: '2024-08-20',
    createdAt: '2024-08-20',
    updatedAt: '2024-08-20',
    isPublished: true,
    readTime: 5,
    likes: 42,
    views: 1250,
    comments: []
  },
  {
    id: '2',
    title: 'Modern CSS Techniques for 2024',
    content: 'CSS has evolved significantly...',
    excerpt: 'Explore the latest CSS features and techniques that will make your designs more efficient and beautiful.',
    slug: 'modern-css-techniques-2024',
    coverImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop',
    category: { id: '2', name: 'Design', slug: 'design', color: '#EC4899' },
    tags: [
      { id: '3', name: 'CSS', slug: 'css' },
      { id: '4', name: 'Web Design', slug: 'web-design' }
    ],
    author: {
      id: '2',
      username: 'janesmith',
      email: 'jane@example.com',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    },
    publishedAt: '2024-08-19',
    createdAt: '2024-08-19',
    updatedAt: '2024-08-19',
    isPublished: true,
    readTime: 8,
    likes: 38,
    views: 980,
    comments: []
  },
  {
    id: '3',
    title: 'The Future of Web Development',
    content: 'Web development is constantly evolving...',
    excerpt: 'A comprehensive look at emerging trends and technologies shaping the future of web development.',
    slug: 'future-of-web-development',
    coverImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
    category: { id: '1', name: 'Technology', slug: 'technology', color: '#3B82F6' },
    tags: [
      { id: '5', name: 'Web Development', slug: 'web-development' },
      { id: '6', name: 'Future Tech', slug: 'future-tech' }
    ],
    author: {
      id: '1',
      username: 'johndoe',
      email: 'john@example.com',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    },
    publishedAt: '2024-08-18',
    createdAt: '2024-08-18',
    updatedAt: '2024-08-18',
    isPublished: true,
    readTime: 12,
    likes: 67,
    views: 1540,
    comments: []
  },
  {
    id: '4',
    title: 'Building Scalable APIs with Node.js',
    content: 'Learn how to build robust and scalable APIs...',
    excerpt: 'A comprehensive guide to building scalable APIs with Node.js, Express, and best practices.',
    slug: 'building-scalable-apis-nodejs',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    category: { id: '3', name: 'Backend', slug: 'backend', color: '#10B981' },
    tags: [
      { id: '7', name: 'Node.js', slug: 'nodejs' },
      { id: '8', name: 'API', slug: 'api' }
    ],
    author: {
      id: '3',
      username: 'mikejohnson',
      email: 'mike@example.com',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    },
    publishedAt: '2024-08-17',
    createdAt: '2024-08-17',
    updatedAt: '2024-08-17',
    isPublished: true,
    readTime: 10,
    likes: 55,
    views: 890,
    comments: []
  }
];

const BrowsePage: React.FC = () => {
  const { t } = useTranslation();
  const { setPosts } = useBlogStore();
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: '1', name: 'Technology', slug: 'technology' },
    { id: '2', name: 'Design', slug: 'design' },
    { id: '3', name: 'Backend', slug: 'backend' },
  ];

  const sortOptions = [
    { value: 'newest', label: t('blog.newest') },
    { value: 'oldest', label: t('blog.oldest') },
    { value: 'popular', label: t('blog.popular') },
    { value: 'trending', label: t('blog.trending') },
  ];

  // Debounced search function
  const debouncedSearch = debounce((query: string) => {
    filterPosts(query, selectedCategory, sortBy);
  }, 300);

  const filterPosts = (query: string, category: string, sort: string) => {
    setIsLoading(true);
    
    let filtered = [...mockPosts];

    // Filter by search query
    if (query.trim()) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.author.username.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter(post => post.category.slug === category);
    }

    // Sort posts
    switch (sort) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt || a.createdAt).getTime() - new Date(b.publishedAt || b.createdAt).getTime());
        break;
      case 'popular':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case 'trending':
        filtered.sort((a, b) => b.views - a.views);
        break;
    }

    setFilteredPosts(filtered);
    setIsLoading(false);
  };

  useEffect(() => {
    setPosts(mockPosts);
    setFilteredPosts(mockPosts);
  }, [setPosts]);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, selectedCategory, sortBy, debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleLike = (postId: string) => {
    console.log('Like post:', postId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-primary-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">{t('blog.title')}</h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Discover amazing articles and stories from our community of writers
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 p-10 mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-7 w-7 text-gray-500" />
                <input
                  type="text"
                  placeholder={t('blog.searchPlaceholder')}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-16 pr-6 py-6 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 text-xl placeholder-gray-500 transition-all duration-300 font-medium bg-gray-50 focus:bg-white hover:border-gray-400 shadow-lg"
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="lg:w-64">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="w-full px-6 py-6 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 text-xl transition-all duration-300 font-medium bg-gray-50 focus:bg-white hover:border-gray-400 shadow-lg"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-10 pt-10 border-t-2 border-gray-200">
            <div className="flex items-center space-x-4 mb-8">
              <FunnelIcon className="h-8 w-8 text-gray-600" />
              <span className="text-2xl font-black text-gray-900">{t('blog.filterByCategory')}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border-2 ${
                    selectedCategory === category.slug
                      ? 'bg-primary-600 text-white border-primary-600 scale-105 shadow-2xl'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
            <p className="text-xl text-gray-700 font-medium">
              {isLoading 
                ? (
                  <span className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-3 border-primary-600"></div>
                    <span>{t('common.loading')}</span>
                  </span>
                )
                : filteredPosts.length === 0 
                  ? (
                    <span className="text-red-600 font-bold text-xl">{t('common.noResults')}</span>
                  )
                  : (
                    <span>
                      Showing <span className="font-black text-primary-600 text-xl">{filteredPosts.length}</span> 
                      {' '}article{filteredPosts.length !== 1 ? 's' : ''}
                      {searchQuery && (
                        <span> for "<span className="font-bold text-gray-900">{searchQuery}</span>"</span>
                      )}
                      {selectedCategory && (
                        <span> in <span className="font-bold text-gray-900 capitalize">{selectedCategory}</span></span>
                      )}
                    </span>
                  )
              }
            </p>
          </div>
        </div>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <LoadingSpinner size="lg" text={t('common.loading')} />
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-32">
            <div className="bg-white rounded-3xl p-16 shadow-2xl border-2 border-gray-200 max-w-lg mx-auto">
              <div className="text-8xl mb-8">🔍</div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">{t('common.noResults')}</h3>
              <p className="text-gray-700 mb-10 text-xl font-medium leading-relaxed">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSortBy('newest');
                }}
                className="bg-primary-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Clear all filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                onLike={handleLike}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-20">
            <button className="bg-white border-3 border-gray-300 px-12 py-5 rounded-2xl text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl text-xl transform hover:-translate-y-1">
              {t('common.viewMore')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;
