import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const FilterSidebar = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    brand: true,
    rating: true,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const categories = [
    { name: 'Electronics', count: 120 },
    { name: 'Fashion', count: 89 },
    { name: 'Home & Garden', count: 67 },
    { name: 'Sports', count: 45 },
    { name: 'Books', count: 234 },
  ];

  const brands = [
    { name: 'Apple', count: 23 },
    { name: 'Samsung', count: 18 },
    { name: 'Sony', count: 15 },
    { name: 'Nike', count: 12 },
    { name: 'Adidas', count: 8 },
  ];

  const priceRanges = [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: 'Over $200', min: 200, max: 999999 },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto bg-background border-r border-border
        w-80 lg:w-full transform transition-[var(--transition-smooth)] z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between lg:justify-start">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button 
              onClick={onClose}
              className="lg:hidden text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full text-left font-medium"
            >
              Categories
              {openSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections.category && (
              <div className="space-y-2 pl-2">
                {categories.map((category) => (
                  <label key={category.name} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">{category.name}</span>
                    <span className="text-xs text-muted-foreground">({category.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left font-medium"
            >
              Price Range
              {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections.price && (
              <div className="space-y-2 pl-2">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Brands */}
          <div className="space-y-3">
            <button
              onClick={() => toggleSection('brand')}
              className="flex items-center justify-between w-full text-left font-medium"
            >
              Brands
              {openSections.brand ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections.brand && (
              <div className="space-y-2 pl-2">
                {brands.map((brand) => (
                  <label key={brand.name} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm">{brand.name}</span>
                    <span className="text-xs text-muted-foreground">({brand.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <button
              onClick={() => toggleSection('rating')}
              className="flex items-center justify-between w-full text-left font-medium"
            >
              Rating
              {openSections.rating ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections.rating && (
              <div className="space-y-2 pl-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <div className="flex items-center">
                      {Array.from({ length: rating }, (_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                      <span className="text-sm ml-1">& Up</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Clear Filters */}
          <button className="w-full py-2 px-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;