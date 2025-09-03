import { useState } from 'react';
import { Search, TrendingUp, Clock, X } from 'lucide-react';



const ProductSearchBar = ({ searchQuery, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const trendingSearches = [
    'Wireless Headphones',
    'Smart Watch',
    'Gaming Keyboard',
    'Camera Lens',
    'Travel Backpack',
  ];

  const recentSearches = [
    'iPhone accessories',
    'Gaming chair',
    'Bluetooth speaker',
  ];

  const popularCategories = [
    { name: 'Electronics', icon: '💻' },
    { name: 'Fashion', icon: '👕' },
    { name: 'Home & Garden', icon: '🏠' },
    { name: 'Sports', icon: '⚽' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className={`
          relative bg-background  transition-all duration-300
          ${isFocused ? 'border-violet-600 shadow-gray-400' : 'border-border hover:border-border/80'}
        `}>
          <Search 
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
              isFocused ? 'text-primary' : 'text-muted-foreground'
            }`} 
            size={20} 
          />
          <input
            type="text"
            placeholder="Search for products, brands, or categories..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => {
              setIsFocused(true);
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setIsFocused(false);
              setTimeout(() => setShowSuggestions(false), 200);
            }}
            className="w-full pl-12 rounded-2xl shadow-lg shadow-gray-200 pr-12 py-4 bg-gray-100 text-foreground  outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </form>

      {/* Search Suggestions Dropdown */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-1 border-gray-200  rounded-lg shadow-gray-100 z-50 overflow-hidden">
          <div className="p-6 space-y-6">
           
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="text-primary" size={16} />
                <h3 className="text-sm font-semibold text-foreground">Trending Searches</h3>
              </div>
              <div className="space-y-1">
                {trendingSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSuggestionClick(search)}
                    className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

       
            {recentSearches.length > 0 && (
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="text-muted-foreground" size={16} />
                  <h3 className="text-sm font-semibold text-foreground">Recent Searches</h3>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => handleSuggestionClick(search)}
                      className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

           
            <div className="border-t border-border pt-4">
              <h3 className="text-sm font-semibold text-foreground mb-3">Popular Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {popularCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleSuggestionClick(category.name)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearchBar;