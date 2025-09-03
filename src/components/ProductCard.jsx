import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] cursor-pointer animate-fade-in "
      onClick={() => onClick(product)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 aspect-square mb-3">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-[var(--transition-smooth)] ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted/20 animate-pulse" />
        )}
        <div className="absolute flex top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-center items-center">
          <Star className="w-3 h-3 text-amber-300 mr-2" /> {product.rating}
        </div>
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-violet-500 text-white rounded-full px-2 py-1 text-xs font-medium">
            Sale
          </div>
        )}
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
            <span className="text-sm mr-4 text-gray-500 line-through">
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
  );
};

export default ProductCard;
