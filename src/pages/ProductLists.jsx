import { useState } from 'react';
import { Filter, SlidersHorizontal, Sparkles, TrendingUp } from 'lucide-react';
import ProductSearchBar from '../components/ProductSearchBar';
import ModernFilterSidebar from '../components/ModernFilterSidebar';
import ProductGrid from '../components/ProductGrid';



const Products = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSortChange = (sortValue) => {
    console.log('Sort by:', sortValue);
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Best Rating' },
    { value: 'popular', label: 'Most Popular' },
  ];

  return (
    <div className="min-h-screen bg-background">
    
      <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in space-y-6">
            <div className="inline-flex text-white items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Sparkles size={16} />
              <span className=''>Over 10,000+ Premium Products</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
              Discover
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Amazing Products
              </span>
            </h1>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto text-white leading-relaxed">
              Find the perfect items from our curated collection of premium products. 
              Quality guaranteed, prices unmatched.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp size={16} />
                <span className="text-sm">Trending Products</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles size={16} />
                <span className="text-sm">New Arrivals Daily</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Filter size={16} />
                <span className="text-sm">Smart Filters</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
   
        <div className="mb-8 space-y-6">
          <ProductSearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          
        
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-500">Quick Sort:</span>
            {sortOptions.slice(0, 4).map((option) => (
              <button
                key={option.value}
                onClick={() => handleSortChange(option.value)}
                className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-xl transition-all duration-200 hover:scale-105"
              >
                {option.label}
              </button>
            ))}
            
    
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 px-6 py-2 bg-violet-600 text-white rounded-xl transition-all duration-200 hover:bg-primary/90 hover:scale-105 shadow-md"
            >
              <SlidersHorizontal size={16} />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>
        </div>

    
        <ModernFilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />

        <div className="w-full">
          <ProductGrid 
            searchQuery={searchQuery}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;