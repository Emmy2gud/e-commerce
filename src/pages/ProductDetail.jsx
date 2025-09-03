import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
  Plus,
  Minus,
  Star,
} from "lucide-react";
import ProductCard from "../components/ProductCard";

const headphonesImg =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop";
const smartwatchImg =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop";
const backpackImg =
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop";
const smartphoneImg =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop";
const cameraLensImg =
  "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=800&fit=crop";
const keyboardImg =
  "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=800&fit=crop";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  // const [selectedImage, setSelectedImage] = useState(0);

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones with Noise Cancellation",
      price: 199,
      originalPrice: 249,
      image: headphonesImg,
      category: "Electronics",
      brand: "AudioTech",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Smart Fitness Watch with Heart Rate Monitor",
      price: 299,
      image: smartwatchImg,
      category: "Electronics",
      brand: "TechFit",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Luxury Leather Travel Backpack",
      price: 159,
      originalPrice: 199,
      image: backpackImg,
      category: "Fashion",
      brand: "LeatherCraft",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Latest Smartphone with AI Camera",
      price: 799,
      image: smartphoneImg,
      category: "Electronics",
      brand: "SmartTech",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Professional Camera Lens 85mm f/1.4",
      price: 1299,
      image: cameraLensImg,
      category: "Electronics",
      brand: "LensMaster",
      rating: 4.9,
    },
    {
      id: 6,
      name: "RGB Mechanical Gaming Keyboard",
      price: 149,
      originalPrice: 179,
      image: keyboardImg,
      category: "Electronics",
      brand: "GameGear",
      rating: 4.5,
    },
    {
      id: 7,
      name: "Premium Wireless Headphones Pro",
      price: 249,
      image: headphonesImg,
      category: "Electronics",
      brand: "AudioTech",
      rating: 4.9,
      badge: "Limited Edition",
    },
    {
      id: 8,
      name: "Advanced Smart Watch Series X",
      price: 399,
      originalPrice: 449,
      image: smartwatchImg,
      category: "Electronics",
      brand: "TechFit",
      rating: 4.8,
      trending: true,
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button onClick={() => navigate('/products')} className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
            Back to Products
          </button>
        </div>
      </div>
    );
  }


  const relatedProducts = [
    {
      id: 10,
      name: "Wireless Earbuds Pro",
      price: 129,
      originalPrice: 149,
      image: headphonesImg,
      category: "Electronics",
      brand: "AudioTech",
      rating: 4.7,
      reviews:100
    },
    {
      id: 11,
      name: "Smart Watch Classic",
      price: 199,
      image: smartwatchImg,
      category: "Electronics",
      brand: "TechFit",
      rating: 4.5,
      reviews:100
    },
    {
      id: 12,
      name: "Compact Travel Bag",
      price: 89,
      image: backpackImg,
      category: "Fashion",
      brand: "LeatherCraft",
      rating: 4.6,
      reviews:100
    },
  ];

  const handleRelatedProductClick = (relatedProduct) => {
    navigate(`/product/${relatedProduct.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
       
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* product color images */}
            {/* <div className="grid grid-cols-3 gap-4">
              {products.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-purple-600' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div> */}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-purple-600 font-medium mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-muted-foreground"
                      }
                    >
                     <Star fill="yellow" className='w-3 h-3 text-amber-500 ' /> 
                    </span>
                  ))}
                  <span className="text-muted-foreground ml-2">
                    ({product.rating}/5)
                  </span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">156 reviews</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-violet-600">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save{" "}
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  %
                </span>
              )}
            </div>

            <div className="prose max-w-none text-muted-foreground">
              <p>
                Experience premium quality with this exceptional product.
                Crafted with attention to detail and designed for modern
                lifestyles, it combines functionality with style to deliver an
                outstanding user experience.
              </p>
              <ul className="mt-4 space-y-2">
                <li>• Premium materials and construction</li>
                <li>• Advanced technology integration</li>
                <li>• Ergonomic design for comfort</li>
                <li>• 2-year manufacturer warranty</li>
                <li>• Free shipping and returns</li>
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-400 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-violet-600 text-white py-3 rounded-xl hover:bg-primary/90 transition-colors font-medium">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-400 rounded-xl hover:bg-muted transition-colors">
                  <Heart className="text-gray-400 " size={20} />
                </button>
                <button className="p-3 border border-gray-400  rounded-xl hover:bg-muted transition-colors">
                  <Share2 className="text-gray-400 " size={20} />
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-400  pt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">SKU:</span>
                <span>#{product.id.toString().padStart(6, '0')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability:</span>
                <span className="text-green-600">In Stock</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onClick={handleRelatedProductClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
