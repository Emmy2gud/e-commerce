import BrandCard from "./BrandCard ";


const brands = [
  {
    id: 1,
    name: "TechPro",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    category: "Electronics",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    name: "SmartHome",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "Home Automation",
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    name: "GameMax",
    logo: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    category: "Gaming",
    gradient: "from-red-500 to-pink-600"
  },
  {
    id: 4,
    name: "AudioWave",
    logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Audio Equipment",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "MobileTech",
    logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    category: "Mobile Devices",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    id: 6,
    name: "CloudSync",
    logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    category: "Cloud Services",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 7,
    name: "PowerCore",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    category: "Power Solutions",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: 8,
    name: "DataFlow",
    logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    category: "Data Storage",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: 9,
    name: "SecureNet",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    category: "Security",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    id: 10,
    name: "VisionPro",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    category: "Display Technology",
    gradient: "from-teal-500 to-green-600"
  },
  {
    id: 11,
    name: "ConnectHub",
    logo: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
    category: "Networking",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 12,
    name: "EcoTech",
    logo: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop",
    category: "Sustainable Tech",
    gradient: "from-emerald-500 to-green-600"
  }
];

const BrandShowcase = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
      {brands.map((brand, index) => (
        <BrandCard
          key={brand.id} 
          brand={brand} 
          index={index}
        />
      ))}
    </div>
  );
};

export default BrandShowcase;
