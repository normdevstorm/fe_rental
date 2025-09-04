import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import LoginPage from './pages/LoginPage';
import './i18n';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/create" element={
                <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center px-4">
                  <div className="bg-white rounded-3xl shadow-2xl p-16 text-center max-w-2xl border-2 border-gray-200">
                    <div className="text-8xl mb-8">✍️</div>
                    <h1 className="text-4xl font-black text-gray-900 mb-6">Create Post</h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">This feature is coming soon! You'll be able to create and publish your own blog posts.</p>
                    <div className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-6">
                      <p className="text-primary-700 font-semibold">🚧 Under Development</p>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/post/:slug" element={
                <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
                  <div className="bg-white rounded-3xl shadow-2xl p-16 text-center max-w-2xl border-2 border-gray-200">
                    <div className="text-8xl mb-8">📖</div>
                    <h1 className="text-4xl font-black text-gray-900 mb-6">Post Details</h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">This page will show the full blog post content with comments and interactions.</p>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                      <p className="text-blue-700 font-semibold">🚧 Under Development</p>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/profile" element={
                <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4">
                  <div className="bg-white rounded-3xl shadow-2xl p-16 text-center max-w-2xl border-2 border-gray-200">
                    <div className="text-8xl mb-8">👤</div>
                    <h1 className="text-4xl font-black text-gray-900 mb-6">User Profile</h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">Manage your profile, view your posts, and customize your settings.</p>
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                      <p className="text-purple-700 font-semibold">🚧 Under Development</p>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={
                <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
                  <div className="bg-white rounded-3xl shadow-2xl p-16 text-center max-w-2xl border-2 border-gray-200">
                    <div className="text-8xl mb-8">🚫</div>
                    <h1 className="text-4xl font-black text-gray-900 mb-6">404 - Page Not Found</h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">The page you're looking for doesn't exist or has been moved.</p>
                    <a 
                      href="/" 
                      className="inline-block bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
