import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function CarouselDemo() {
  return (
    <Carousel
      className="w-full max-w-7xl mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl"
      loop
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="flex items-center justify-center p-0 aspect-[16/6] rounded-xl overflow-hidden">
                  <div className="flex items-center justify-center w-full h-full ">
                    <div className="  w-full max-w-2xl mx-auto h-full">
                      <div className="text-left text-white py-30 px-10 max-w-2xl  mx-10 ">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                          SUMMER SALE IS LIVE!
                        </h2>
                        <p className="text-3xl mb-6 pt-2">
                          Get 50% OFF on trending outfits. Limited time only.
                        </p>
                    
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-bounce z-0">
                    <div className="w-50 h-50 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-20 "></div>
                  </div>
                    <div className="absolute top-0 -right-9 -translate-x-1/8 -translate-y-1/9 -z-100">
                    <div className="circle bg-purple-200 rounded-full opacity-20 "></div>
                    
                  </div>
                    
                        <button className="px-8 py-3 mt-2 bg-white text-purple-600 rounded-full font-bold hover:scale-105 transition-transform">
                          SHOP NOW
                        </button>
                      </div>
                    </div>
                    <div className="w-full ">
                      <div className=" ">
                        <img
                          src="/images/pic5.png"
                          className="object-cover  image"
                        />
                 {/* absolute right-60 bottom-6 */}
                      </div>
                    </div>
                  </div>
                </CardContent>
                
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 h-8 w-8 text-white" />
      <CarouselNext className="right-2 h-8 w-8 text-white" />
    </Carousel>
    
  );
}
