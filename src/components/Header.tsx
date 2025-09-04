import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  HomeIcon, 
  PencilSquareIcon, 
  UserIcon, 
  ArrowRightOnRectangleIcon,
  LanguageIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';
import { login, logout, type AuthState } from '../store/slices/authSlice';
import '../store/configureStore'
import { cn } from '../utils';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const authSelector = useAppSelector<AuthState>((state) => state.auth);
  // const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-soft border-b border-gray-200/60 sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <span className="text-white font-black text-xl">B</span>
              </div>
              <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
            </div>
            <span className="font-black text-2xl text-gray-900 group-hover:text-primary-600 transition-all duration-300 tracking-tight">
              BlogSpace
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-all duration-300 py-2.5 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 font-semibold text-sm group border border-transparent hover:border-primary-200/50"
            >
              <HomeIcon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>{t('nav.home')}</span>
            </Link>
            <Link
              to="/browse"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-all duration-300 py-2.5 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 font-semibold text-sm group border border-transparent hover:border-primary-200/50"
            >
              <MagnifyingGlassIcon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>{t('nav.browse')}</span>
            </Link>
            {authSelector.isAuthenticated && (
              <Link
                to="/create"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-all duration-300 py-2.5 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 font-semibold text-sm group border border-transparent hover:border-primary-200/50"
              >
                <PencilSquareIcon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>{t('nav.create')}</span>
              </Link>
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-all duration-200 py-2.5 px-4 rounded-xl hover:bg-gray-50 text-sm border border-gray-200 hover:border-gray-300">
                <LanguageIcon className="h-4 w-4" />
                <span className="font-medium">{i18n.language.toUpperCase()}</span>
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-gray-200 overflow-hidden">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => changeLanguage('en')}
                      className={cn(
                        'block px-4 py-3 text-sm w-full text-left transition-all duration-200',
                        active ? 'bg-primary-50 text-primary-600' : '',
                        i18n.language === 'en' ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700'
                      )}
                    >
                      🇺🇸 English
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={cn(
                        'block px-4 py-3 text-sm w-full text-left transition-all duration-200',
                        active ? 'bg-primary-50 text-primary-600' : '',
                        i18n.language === 'fr' ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700'
                      )}
                    >
                      🇫🇷 Français
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => changeLanguage('vi')}
                      className={cn(
                        'block px-4 py-3 text-sm w-full text-left transition-all duration-200',
                        active ? 'bg-primary-50 text-primary-600' : '',
                        i18n.language === 'vi' ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700'
                      )}
                    >
                      🇻🇳 Việt Nam
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

            {/* User Menu */}
            {authSelector.isAuthenticated ? (
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-all duration-200 py-2 px-3 rounded-xl hover:bg-gray-50 border border-gray-200 hover:border-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-semibold text-sm">
                      {authSelector.user?.username?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium">{authSelector.user?.username}</span>
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-gray-200 overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                    <p className="text-sm font-semibold text-gray-900">{authSelector.user?.username}</p>
                    <p className="text-sm text-gray-600">{authSelector.user?.email}</p>
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={cn(
                          'flex items-center space-x-3 px-5 py-3 text-sm transition-all duration-200 font-medium',
                          active ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                        )}
                      >
                        <UserIcon className="h-4 w-4" />
                        <span>{t('nav.profile')}</span>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={cn(
                          'flex items-center space-x-3 px-5 py-3 text-sm w-full text-left transition-all duration-200 font-medium',
                          active ? 'bg-red-50 text-red-600' : 'text-gray-700'
                        )}
                      >
                        <ArrowRightOnRectangleIcon className="h-4 w-4" />
                        <span>{t('nav.logout')}</span>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link
                to="/login"
                className="   text-black px-6 py-3 rounded-xl text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-gray-200 border-primary-600  "
              >
                {t('nav.login')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
