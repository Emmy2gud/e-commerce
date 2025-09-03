import { useState } from 'react';
import FilterSection from './Filtersection';
import { ChevronDown, ChevronUp, X, Filter, Star, DollarSign, Tag, Sparkles } from 'lucide-react';

const ModernFilterSidebar = ({ isOpen, onClose }) => {

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: '',
    brands: [],
    minRating: '',
    features: [],
  });



const toggleFilter = (type, value) => {
  setSelectedFilters((prev) => {

    if (Array.isArray(prev[type])) {
      const isSelected = prev[type].includes(value);
      return {
        ...prev,
        [type]: isSelected
          ? prev[type].filter((item) => item !== value) // remove
          : [...prev[type], value], // add
      };
    }

    // If it's a single value (like priceRange or minRating)
    return {
      ...prev,
      [type]: value,
    };
  });
};


  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      priceRange: '',
      brands: [],
      minRating: '',
      features: [],
    });
  };

  const categories = [
    { name: 'Electronics', count: 120, icon: '💻' },
    { name: 'Fashion', count: 89, icon: '👕' },
    { name: 'Home & Garden', count: 67, icon: '🏠' },
    { name: 'Sports', count: 45, icon: '⚽' },
    { name: 'Books', count: 234, icon: '📚' },
    { name: 'Beauty', count: 78, icon: '💄' },
  ];

  const brands = [
    { name: 'Apple', count: 23, trending: true },
    { name: 'Samsung', count: 18, trending: false },
    { name: 'Sony', count: 15, trending: true },
    { name: 'Nike', count: 12, trending: false },
    { name: 'Adidas', count: 8, trending: false },
    { name: 'AudioTech', count: 6, trending: true },
  ];

  const priceRanges = [
    { label: 'Under $25', value: '0-25', count: 45 },
    { label: '$25 - $50', value: '25-50', count: 67 },
    { label: '$50 - $100', value: '50-100', count: 89 },
    { label: '$100 - $200', value: '100-200', count: 124 },
    { label: 'Over $200', value: '200+', count: 89 },
  ];

  const features = [
    { name: 'Free Shipping', icon: '🚚' },
    { name: 'Same Day Delivery', icon: '⚡' },
    { name: 'On Sale', icon: '🏷️' },
    { name: 'New Arrivals', icon: '✨' },
    { name: 'Best Seller', icon: '🔥' },
    { name: 'Eco Friendly', icon: '🌱' },
  ];


  return (
    <>
  
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}


      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-2xl
        w-80 transform transition-all duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        overflow-y-auto border-1 border-border
      `}>
        <div className="p-6 space-y-6">
         
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Filter className="text-primary" size={18} />
              </div>
              <h2 className="text-xl font-bold text-foreground">Filters</h2>
            </div>
            <button 
              onClick={onClose}
              className="bg-secondary/50 hover:bg-secondary p-2 rounded-lg transition-colors"
            >
              <X size={16} className="text-muted-foreground" />
            </button>
          </div>

          {/* Active Filters */}
          {(selectedFilters.categories.length > 0 || selectedFilters.brands.length > 0 || selectedFilters.priceRange || selectedFilters.minRating || selectedFilters.features.length > 0) && (
            <div className="bg-primary/5 rounded-xl p-4 border-2 border-gray-400/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">Active Filters</span>
                <button 
                  onClick={clearAllFilters}
                  className="text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...selectedFilters.categories, ...selectedFilters.brands, selectedFilters.priceRange, selectedFilters.minRating, ...selectedFilters.features].filter(Boolean).map((filter, index) => (
                  <span key={index} className="bg-primary/10 text-purple-600 text-xs px-2 py-1 rounded-lg border border-violet-600/20">
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          )}

         
          <FilterSection title="Categories" icon={<Tag size={18} className='text-violet-600'  />} sectionKey="category" className="mt-4  ">
            <div className="grid grid-cols-2 gap-2 ">
              {categories.map((category) => (
                <label 
                  key={category.name} 
                  className={`cursor-pointer p-3 rounded-lg border-1 border-gray-400 transition-all duration-200 ${
                    selectedFilters.categories.includes(category.name)
                      ? 'border-purple-600 bg-purple-600/5 text-purple-600'
                      : 'border-border hover:border-border-hover bg-card hover:bg-muted/30'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="hidden"
                    checked={selectedFilters.categories.includes(category.name)}
                    onChange={() => toggleFilter('categories', category.name)}
                  />
                  <div className="text-center">
                    <div className="text-lg mb-1">{category.icon}</div>
                    <div className="text-xs font-medium">{category.name}</div>
                    <div className="text-xs text-muted-foreground">({category.count})</div>
                  </div>
                </label>
              ))}
            </div>
          </FilterSection>

         
          <FilterSection title="Price Range" icon={<DollarSign size={18} className='text-violet-600' />} sectionKey="price">
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label 
                  key={range.value} 
                  className={`cursor-pointer flex items-center justify-between p-3 rounded-lg border-1 border-gray-400 transition-all duration-200 ${
                    selectedFilters.priceRange === range.value
                   ? 'border-purple-600 bg-purple-600/5 text-purple-600'
                      : 'border-border hover:border-border-hover bg-card hover:bg-muted/30'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="priceRange"
                    className="hidden"
                    checked={selectedFilters.priceRange === range.value}
                    onChange={() => toggleFilter('priceRange', range.value)}
                  />
                  <span className="text-sm font-medium">{range.label}</span>
                  <span className="text-xs text-muted-foreground">({range.count})</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Brands */}
          <FilterSection title="Brands" icon={<Sparkles size={18} className='text-violet-600' />} sectionKey="brand">
            <div className="space-y-2">
              {brands.map((brand) => (
                <label 
                  key={brand.name} 
                  className={`cursor-pointer flex items-center justify-between p-3 rounded-lg border-1 border-gray-400 transition-all duration-200 ${
                    selectedFilters.brands.includes(brand.name)
                  ? 'border-purple-600 bg-purple-600/5 text-purple-600'
                      : 'border-border hover:border-border-hover bg-card hover:bg-muted/30'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="hidden"
                    checked={selectedFilters.brands.includes(brand.name)}
                    onChange={() => toggleFilter('brands', brand.name)}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{brand.name}</span>
                    {brand.trending && (
                      <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                        Trending
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">({brand.count})</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Rating */}
          <FilterSection title="Rating" icon={<Star size={18} className='text-violet-600' />} sectionKey="rating">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label 
                  key={rating} 
                  className={`cursor-pointer flex items-center justify-between p-3 rounded-lg border-1 border-gray-400 transition-all duration-200 ${
                    selectedFilters.minRating === `${rating}+`
                    ? 'border-purple-600 bg-purple-600/5 text-purple-600'
                      : 'border-border hover:border-border-hover bg-card hover:bg-muted/30'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="rating"
                    className="hidden"
                    checked={selectedFilters.minRating === `${rating}+`}
                    onChange={() => toggleFilter('minRating', `${rating}+`)}
                  />
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: rating }, (_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm">& Up</span>
                  </div>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Features */}
          <FilterSection title="Features" icon={<Sparkles size={18} className='text-violet-600'  />} sectionKey="features">
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature) => (
                <label 
                  key={feature.name} 
                  className={`cursor-pointer p-3 rounded-lg border-1 border-gray-400 transition-all duration-200 ${
                    selectedFilters.features.includes(feature.name)
                    ? 'border-purple-600 bg-purple-600/5 text-purple-600'
                      : 'border-border hover:border-border-hover bg-card hover:bg-muted/30'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="hidden"
                    checked={selectedFilters.features.includes(feature.name)}
                    onChange={() => toggleFilter('features', feature.name)}
                  />
                  <div className="text-center">
                    <div className="text-lg mb-1">{feature.icon}</div>
                    <div className="text-xs font-medium">{feature.name}</div>
                  </div>
                </label>
              ))}
            </div>
          </FilterSection>

  
          <button className="w-full bg-violet-600 hover:bg-violet-600/90 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md">
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default ModernFilterSidebar;