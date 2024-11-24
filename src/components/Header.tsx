import React from 'react';
import { Bell, Search, Users, X } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { useSearch } from '../lib/search';
import { useTheme } from '../lib/theme';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import NotificationsPopover from './NotificationsPopover';
import SearchResults from './SearchResults';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [showSearchResults, setShowSearchResults] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const { isAuthenticated, logout } = useAuth();
  const { query, results, isSearching, setQuery, search, clearSearch } = useSearch();
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleDark = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowSearchResults(true);
    search(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSearchResults(false);
      searchInputRef.current?.blur();
    }
  };

  const clearSearchResults = () => {
    clearSearch();
    setShowSearchResults(false);
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  return (
    <header className={`px-6 py-4 ${
      isDark 
        ? 'bg-dark-card border-dark' 
        : 'bg-white border-gray-200'
    } border-b`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="relative w-96">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSearchResults(true)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                isDark
                  ? 'bg-dark-lighter border-dark text-dark-primary placeholder-dark-secondary'
                  : 'bg-white border-gray-300 text-gray-900'
              } border focus:outline-none focus:ring-2 focus:ring-auroville-primary focus:border-transparent`}
            />
            {query ? (
              <button
                onClick={clearSearchResults}
                className={`absolute right-3 top-2.5 ${
                  isDark ? 'text-dark-secondary hover:text-dark-primary' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <X className="h-5 w-5" />
              </button>
            ) : (
              <Search className={`absolute left-3 top-2.5 h-5 w-5 ${
                isDark ? 'text-dark-secondary' : 'text-gray-400'
              }`} />
            )}
            {showSearchResults && (
              <SearchResults
                results={results}
                isSearching={isSearching}
                onClose={() => setShowSearchResults(false)}
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Visitor Counter */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
            isDark ? 'bg-dark-lighter' : 'bg-auroville-light'
          }`}>
            <Users className="h-5 w-5 text-auroville-primary" />
            <div className="text-sm">
              <span className="font-medium text-auroville-primary">1,247</span>
              <span className={`ml-1 ${
                isDark ? 'text-dark-secondary' : 'text-gray-600'
              }`}>visitors today</span>
            </div>
          </div>

          <ThemeToggle />

          {isAuthenticated ? (
            <>
              <NotificationsPopover />
              <button
                onClick={() => logout()}
                className={`text-sm hover:text-gray-900 ${
                  isDark ? 'text-dark-secondary hover:text-dark-primary' : 'text-gray-600'
                }`}
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowLogin(true)}
                className={`text-sm hover:text-gray-900 ${
                  isDark ? 'text-dark-secondary hover:text-dark-primary' : 'text-gray-600'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setShowRegister(true)}
                className="px-4 py-2 bg-auroville-primary text-white rounded-lg hover:bg-opacity-90"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />

      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    </header>
  );
}