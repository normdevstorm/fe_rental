import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login } from '../store/slices/authSlice';
import type { User } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authSelector = useAppSelector((state) => state.auth)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login - in a real app, this would call an API
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        username: 'demo_user',
        email: email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      dispatch(login({email: mockUser.email, password: "12345"}));
      navigate('/');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 flex flex-col justify-center py-16 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-50 animate-bounce-subtle"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-lg relative z-10 animate-fade-in">
        <Link to="/" className="flex justify-center group">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl flex items-center justify-center shadow-strong group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border-2 border-white">
              <span className="text-white font-black text-3xl">B</span>
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
          </div>
        </Link>
        <h2 className="mt-10 text-center text-5xl font-black text-gray-900 tracking-tight animate-slide-up">
          {t('auth.login')}
        </h2>
        <p className="mt-6 text-center text-xl text-gray-700 font-semibold animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {t('auth.dontHaveAccount')}{' '}
          <Link to="/register" className="font-black text-primary-600 hover:text-primary-500 transition-colors underline decoration-2 underline-offset-4 hover:decoration-primary-400">
            {t('auth.register')}
          </Link>
        </p>
      </div>

      <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-lg relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 py-16 px-10 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-lg font-black text-gray-900 mb-3">
                {t('auth.email')}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-200 transition-all duration-300 placeholder-gray-500 font-medium text-lg shadow-md hover:shadow-sm"
                  placeholder="demo@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-black text-gray-900 mb-3">
                {t('auth.password')}
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field text-lg shadow-medium hover:shadow-soft"
                  placeholder="password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-lg">
                <a href="#" className="font-black text-gradient hover:text-primary-500 transition-colors underline decoration-2 underline-offset-4">
                  {t('auth.forgotPassword')}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-6 text-xl font-black shadow-strong hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-3 border-white"></div>
                    <span>{t('common.loading')}</span>
                  </span>
                ) : (
                  t('auth.login')
                )}
              </button>
            </div>
          </form>

          <div className="mt-10">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 shadow-medium">
              <div className="flex items-start space-x-4">
                <div className="text-3xl animate-bounce-subtle">💡</div>
                <div>
                  <p className="text-lg font-black text-blue-900 mb-2">
                    Demo Access
                  </p>
                  <p className="text-lg text-blue-800 font-semibold leading-relaxed">
                    Use any email and password to login - this is a demonstration version of the blog platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
