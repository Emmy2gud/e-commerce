
import { useNavigate } from 'react-router-dom';
import { Grid, LayoutList, Heart, Star } from 'lucide-react';
import ProductCard from './ProductCard';

import { Button } from "@/components/ui/button";


const headphonesImg = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop';
const smartwatchImg = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop';
const backpackImg = 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop';
const smartphoneImg = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop';
const cameraLensImg = 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=800&fit=crop';
const keyboardImg = 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=800&fit=crop';

const ProductGrid = ({ searchQuery, viewMode, onViewModeChange }) => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones with Noise Cancellation',
      price: 199,
      originalPrice: 249,
      image: headphonesImg,
      category: 'Electronics',
      brand: 'AudioTech',
      rating: 4.8,
      reviews:128,
      badge: 'Best Seller',
      trending: true,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch with Heart Rate Monitor',
      price: 299,
      image: smartwatchImg,
      category: 'Electronics',
      brand: 'TechFit',
      rating: 4.6,
        reviews:110,
      badge: 'New',
    },
    {
      id: 3,
      name: 'Luxury Leather Travel Backpack',
      price: 159,
      originalPrice: 199,
      image: backpackImg,
      category: 'Fashion',
      brand: 'LeatherCraft',
      rating: 4.9,
        reviews:18,
      trending: true,
    },
    {
      id: 4,
      name: 'Latest Smartphone with AI Camera',
      price: 799,
      image: smartphoneImg,
      category: 'Electronics',
      brand: 'SmartTech',
      rating: 4.7,
        reviews:48,
      badge: 'Editor\'s Choice',
    },
    {
      id: 5,
      name: 'Professional Camera Lens 85mm f/1.4',
      price: 1299,
      image: cameraLensImg,
      category: 'Electronics',
      brand: 'LensMaster',
      rating: 4.9,
        reviews:180,
      badge: 'Premium',
    },
    {
      id: 6,
      name: 'RGB Mechanical Gaming Keyboard',
      price: 149,
      originalPrice: 179,
      image: keyboardImg,
      category: 'Electronics',
      brand: 'GameGear',
        reviews:100,
      rating: 4.5,
    },
  
    {
      id: 7,
      name: 'Premium Wireless Headphones Pro',
      price: 249,
      image: headphonesImg,
      category: 'Electronics',
      brand: 'AudioTech',
      rating: 4.9,
        reviews:82,
      badge: 'Limited Edition',
    },
    {
      id: 8,
      name: 'Advanced Smart Watch Series X',
      price: 399,
      originalPrice: 449,
      image: smartwatchImg,
      category: 'Electronics',
      brand: 'TechFit',
      rating: 4.8,
        reviews:120,
      trending: true,
    },
  ];

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
     
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-foreground">
            Discover Products
          </h2>
          <p className="text-gray-500">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

     
        <div className="flex items-center gap-4">
          <div className="bg-secondary/50 rounded-xl p-1 flex">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-primary text-purple-500 shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background'
              }`}
            >
              <LayoutList size={18} />
            </button>
          </div>
        </div>
      </div>

  
      <div className="bg-gray-200 rounded-2xl p-6 border border-gray-200/10">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-purple-500/10 p-2 rounded-lg">
            <Star className="text-purple-500" size={20} />
          </div>
          <h3 className="text-lg font-medium ">Trending Now</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.filter(p => p.trending).slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white backdrop-blur-sm rounded-xl p-3 cursor-pointer hover:bg-background/80 transition-all duration-200 group"
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-square bg-muted/30 rounded-lg mb-2 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
               <div className="space-y-2">
                 <div>
                   <h3 className="font-semibold text-black/80 text-sm line-clamp-2 group-hover:text-primary transition-colors">
                     {product.name}
                   </h3>
                   <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
                 </div>
                 <div className="flex items-center mb-3">
                   <div className="flex items-center">
                     {[...Array(5)].map((_, i) => (
                       <Star
                         key={i}
                         className={`h-3 w-3 ${
                           i < Math.floor(product.rating)
                             ? "fill-yellow-400 text-yellow-400"
                             : "text-gray-300"
                         }`}
                       />
                     ))}
                   </div>
                   <span className="text-sm text-gray-600 ml-1">
                     ({product.reviews})
                   </span>
                 </div>
                 <div className="flex items-center gap-2 justify-between">
                   <span className="font-semibold text-purple-500">
                     ${product.price}
                   </span>
                   {product.originalPrice && (
                     <span className="text-sm mr-15 text-gray-500 line-through">
                       ${product.originalPrice}
                     </span>
                   )}
                   <Button
                     size="sm"
                     className="bg-purple-600 text-white font-bold shadow-lg shadow-purple-300 hover:bg-purple-400"
                   >
                     Add to Cart
                   </Button>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>

   
      <div className={`
        ${viewMode === 'grid' 
          ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4' 
          : 'space-y-4'
        }
      `}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleProductClick}
            viewMode={viewMode}
          />
        ))}
      </div>

  
      {filteredProducts.length > 0 && (
        <div className="text-center pt-8">
          <button className="bg-purple-600 hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md">
            Load More Products
          </button>
        </div>
      )}


      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-muted/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Heart className="text-muted-foreground" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;