import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  {
    name: "ethereum",
    logo: "/logos/ethereum.png",
  },
  {
    name: "ARBITRUM",
    logo: "/logos/arbitrum.png",
  },
  {
    name: "base",
    logo: "/logos/base.png",
  },
  {
    name: "Safe",
    logo: "/logos/safe.png",
  },
  {
    name: "Hyperliquid",
    logo: "/logos/hyperliquid.png",
  },
  {
    name: "aave",
    logo: "/logos/aave.png",
  },
  {
    name: "tether",
    logo: "/logos/tether.png",
  },
  {
    name: "USD Coin",
    logo: "/logos/usdc.png",
  },
  {
    name: "UNISWAP",
    logo: "/logos/uniswap.png",
  },
];

interface PoweredByProps {
  showTitle?: boolean;
  className?: string;
}

export default function PoweredBy({
  showTitle = true,
  className = "",
}: PoweredByProps) {
  const carouselRef = useRef(null);

  return (
    <section className={`py-16 ${className}`}>
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-background">Powered By</h2>
        </div>
      )}

      <div className="flex justify-center items-center">
        <Carousel
          ref={carouselRef}
          className="w-full max-w-6xl"
          opts={{
            loop: true,
            dragFree: true,
            align: "start",
            containScroll: "trimSnaps",
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner) => (
              <CarouselItem
                key={partner.name}
                className="pl-2 md:pl-4 basis-auto"
              >
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={140}
                      height={40}
                      className="object-contain"
                      quality={100}
                      priority={false}
                      unoptimized={false}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
