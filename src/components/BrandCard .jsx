import { useState } from "react";



const BrandCard = ({ brand, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl aspect-square cursor-pointer
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-2xl
        bg-gradient-to-br ${brand.gradient}
        animate-fade-in
      `}
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
      
      {/* Brand logo/image */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={brand.logo}
          alt={brand.name}
          className={`
            w-full h-full object-cover rounded-lg
            transition-all duration-300
            ${isHovered ? 'scale-110 opacity-90' : 'opacity-70'}
          `}
        />
      </div>

      {/* Brand name overlay */}
      <div className={`
        absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent
        flex flex-col justify-end p-3
        transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}>
        <h3 className="text-white font-bold text-sm md:text-base mb-1">
          {brand.name}
        </h3>
        <p className="text-white/80 text-xs">
          {brand.category}
        </p>
      </div>

      {/* Hover effect shimmer */}
      <div className={`
        absolute inset-0 
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        transform -skew-x-12 translate-x-full
        transition-transform duration-700
        ${isHovered ? '-translate-x-full' : 'translate-x-full'}
      `} />
    </div>
  );
};

export default BrandCard;
