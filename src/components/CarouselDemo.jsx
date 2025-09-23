import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function CarouselDemo() {
  const slides = [
    {
      id: 1,
      title: "SUMMER SALE IS LIVE!",
      subtitle: "Get 50% OFF on trending outfits. Limited time only.",
      buttonText: "SHOP NOW",
      bgGradient: "from-purple-600 to-blue-500",
      image: "/images/pic5.png",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "NEW TECH ARRIVALS",
      subtitle:
        "Discover the latest gadgets and electronics with amazing deals.",
      buttonText: "EXPLORE NOW",
      bgGradient: "from-blue-600 to-cyan-500",
      image: "/images/pic5.png",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "FASHION WEEK SPECIAL",
      subtitle: "Up to 70% off on designer collections. Style meets savings.",
      buttonText: "SHOP FASHION",
      bgGradient: "from-pink-600 to-rose-500",
      image: "/images/pic5.png",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "HOME & LIVING SALE",
      subtitle: "Transform your space with our premium home collection.",
      buttonText: "DISCOVER MORE",
      bgGradient: "from-emerald-600 to-teal-500",
      image: "/images/pic5.png",
      textColor: "text-white",
    },
    {
      id: 5,
      title: "SPORTS & FITNESS",
      subtitle: "Gear up for your fitness journey with top-quality equipment.",
      buttonText: "GET ACTIVE",
      bgGradient: "from-orange-600 to-red-500",
      image: "/images/pic5.png",
      textColor: "text-white",
    },
  ];

  return (
    <Carousel
      className="w-full max-w-7xl mx-auto rounded-2xl"
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="">
              <Card
                className={`relative border-none bg-gradient-to-r ${slide.bgGradient}`}
              >
                <CardContent
                  className={`flex items-center  justify-center  aspect-[16/6] sm:aspect-[16/7] md:aspect-[16/6] rounded-xl overflow-hidden `}
                >
                  <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-4 sm:px-6 md:px-10 lg:px-16">
                    <div className="flex-1 text-center md:text-left z-10 mb-4 md:mb-0">
                      <div className={`${slide.textColor} max-w-2xl`}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight">
                          {slide.title}
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 pt-1 md:pt-2 leading-relaxed">
                          {slide.subtitle}
                        </p>
                        <button className="px-6 sm:px-8 py-2 sm:py-3 mt-1 md:mt-2 bg-white text-purple-600 rounded-full font-bold hover:scale-105 transition-transform text-sm sm:text-base">
                          {slide.buttonText}
                        </button>
                      </div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-bounce z-100">
                        <div className="w-50 h-50 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-60 "></div>
                      </div>
                    </div>
                    <div className="absolute top-0 -right-9 -translate-x-1/8 -translate-y-1/9 z-10">
                      <div className="circle bg-purple-200 rounded-full opacity-30 "></div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end relative ">
                      <div className=" w-full max-w-sm md:max-w-md lg:max-w-lg ">
                      

                        <img
                          src={slide.image}
                          alt={`Slide ${slide.id}`}
                          className="w-full h-auto object-cover rounded-lg relative z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 h-8 w-8 sm:h-10 sm:w-10 text-white bg-black/20 hover:bg-black/40 border-none" />
      <CarouselNext className="right-2 h-8 w-8 sm:h-10 sm:w-10 text-white bg-black/20 hover:bg-black/40 border-none" />
    </Carousel>
  );
}
