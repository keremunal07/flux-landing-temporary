import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Typography } from "../ui/typography";
import Image from "next/image";

const carouselData = [
  {
    title: "Stablecoin-to-Fiat Transfers",
    description:
      "Instantly send USD or EUR to any bank account, anywhere in the world",
    src: "/stablecoin-section-phone-1.webp",
  },
  {
    title: "Virtual Bank Account",
    description:
      "Accept USD and EUR bank transfers that land in your wallet as stablecoins.",
    src: "/stablecoin-section-phone-2.webp",
  },
  {
    title: "Borrow Stablecoins",
    description: "Use your crypto as collateral to unlock stablecoins anytime.",
    src: "/stablecoin-section-phone-3.webp",
  },
];

export default function StablecoinSection() {
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
    <section className="py-20 relative z-[1]">
      <Carousel
        setApi={setApi}
        className="w-full relative embla__fade"
        opts={{
          loop: true,
          dragFree: false,
          align: "start",
          containScroll: "keepSnaps",
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
          Fade(),
        ]}
      >
        <CarouselContent className="w-full">
          {carouselData.map((item, idx) => (
            <CarouselItem key={idx} className="w-full">
              <div className="grid lg:grid-cols-2 items-center w-full">
                <div className="w-full pl-6">
                  <div className="w-full flex items-start flex-col gap-10">
                    <Typography
                      variant="h1"
                      as="h2"
                      className="text-4xl lg:text-5xl font-bold font-sf-pro-display max-w-sm"
                    >
                      Use Stablecoins for everything
                    </Typography>

                    <div className="flex flex-row gap-2">
                      {carouselData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-12 h-1 transition-all duration-300 ${
                            currentSlide === index
                              ? "bg-gray-500"
                              : "bg-gray-300 hover:bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 max-w-lg">
                      <Typography
                        variant="h1"
                        as="h3"
                        className="text-2xl text-[#555D67]"
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body-s" className="text-[#777F89]">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="w-full rounded-2xl bg-gradient-to-r from-[#F7F7F7] to-[#DBDBDB] h-fit min-h-[558px] aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    unoptimized
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
