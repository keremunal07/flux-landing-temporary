import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const statsData = [
  {
    title: "Forgot Your Seed Phrase? You're Not Alone.",
    subtitle:
      "Over $100 Billion in crypto has been lost forever due to forgotten seed phrases and lost keys.",
    number: "$100",
    unit: "Billion",
    conclusion:
      "No more fragile keys. Flux makes self-custody secure, simple, and recoverable.",
    gradient: "from-blue-600 via-purple-600 to-red-600",
  },
  {
    title: "When Wallets Break, You Pay.",
    subtitle:
      "Hackers drained $2.3 billion from wallets and exchanges in the first 6 months of 2025 alone.",
    number: "$2.3",
    unit: "Billion",
    conclusion: "Don't trust luck. Trust programmable security.",
    gradient: "from-blue-700 via-purple-700 to-orange-600",
  },
  {
    title: "You Earn Pennies. They Earn Billions.",
    subtitle:
      "Banks earn an average 3% on your deposits while paying you less than 0.5%. $275 Billion in missed yield in 2025.",
    number: "$275",
    unit: "Billion",
    conclusion: "Put your balance to work with up to 25% APY.",
    gradient: "from-blue-800 via-purple-800 to-red-700",
  },
];

export default function StatsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden w-screen -mx-[calc(50vw-50%)]">
      <Carousel
        setApi={setApi}
        className="w-full h-screen relative"
        orientation="vertical"
        opts={{
          loop: true,
          dragFree: false,
          align: "start",
          containScroll: "trimSnaps",
          skipSnaps: false,
          duration: 20,
          startIndex: 0,
          inViewThreshold: 0.7,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="h-screen mt-0">
          {statsData.map((stat, index) => (
            <CarouselItem key={index} className="h-screen m-0 p-0">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0">
                  <Image
                    src="/carousel-bg.webp"
                    alt="Background"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                    quality={100}
                    unoptimized
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>

                <div className="relative z-10 text-center text-white px-8 max-w-5xl">
                  <h2 className="text-4x lg:text-5xl font-bold font-sf-pro-display mb-8 leading-14">
                    {stat.title}
                  </h2>

                  <p className="text-lg lg:text-[22px] text-gray-300 mb-12 max-w-lg mx-auto leading-[140%]">
                    {stat.subtitle}
                  </p>

                  <div className="mb-16">
                    <div className="flex flex-col items-center justify-center text-8xl lg:text-9xl font-black font-sf-pro-display text-white mb-2">
                      <span>{stat.number}</span>
                      <span>{stat.unit}</span>
                    </div>
                  </div>

                  <p className="text-lg lg:text-xl font-semibold text-white">
                    {stat.conclusion}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute right-24 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col gap-4">
            {statsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-[3px] h-9 transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-500"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
