import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  {
    name: "ethereum",
    logo: "/logos/ethereum.svg",
  },
  {
    name: "ARBITRUM",
    logo: "/logos/arbitrum.svg",
  },
  {
    name: "base",
    logo: "/logos/base.svg",
  },
  {
    name: "Safe",
    logo: "/logos/safe.svg",
  },
  {
    name: "Hyperliquid",
    logo: "/logos/hyperliquid.svg",
  },
  {
    name: "aave",
    logo: "/logos/aave.svg",
  },
  {
    name: "tether",
    logo: "/logos/tether.svg",
  },
  {
    name: "USD Coin",
    logo: "/logos/usdc.svg",
  },
  {
    name: "UNISWAP",
    logo: "/logos/uniswap.svg",
  },
  {
    name: "COWSWAP",
    logo: "/logos/cowswap.svg",
  },
  {
    name: "PENDLE",
    logo: "/logos/pendle.svg",
  },
  {
    name: "LIDO",
    logo: "/logos/lido.svg",
  },
  {
    name: "ETHENA",
    logo: "/logos/ethena.svg",
  },
  {
    name: "LIFI",
    logo: "/logos/lifi.svg",
  },
  {
    name: "SOCKET",
    logo: "/logos/socket.svg",
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
          <h2 className="text-2xl font-bold font-sf-pro-display text-background">
            Powered By
          </h2>
        </div>
      )}

      <div className="flex justify-center items-center">
        <Carousel
          ref={carouselRef}
          className="w-full max-w-full"
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
          <CarouselContent>
            {partners.map((partner) => (
              <CarouselItem
                key={partner.name}
                className="basis-1/9 flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={0}
                  height={0}
                  sizes="160px"
                  className="w-auto h-auto  object-contain"
                  quality={100}
                  priority={false}
                  unoptimized={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
