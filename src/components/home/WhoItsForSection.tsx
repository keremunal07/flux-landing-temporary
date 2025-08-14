import Image from "next/image";
import { Typography } from "../ui/typography";
import { Check } from "lucide-react";

const features = [
  "Remote professionals managing income and payments across borders",
  "Active traders who want custody, control, and low fees",
  "Stablecoin users migrating from centralized exchanges and browser wallets",
  "High-trust individuals seeking biometric, hardware-level security with no seed phrase",
  "Mobile-first users who expect seamless access to their money, anytime",
  "Early adopters looking for better financial tools outside traditional banking",
];

export default function WhoItsForSection() {
  return (
    <section className="w-screen bg-[#D9D9D933] -mx-[calc(50vw-50%)] py-20 my-20">
      <div className="container max-w-[1400px] px-4 mx-auto grid lg:grid-cols-2">
        <div className="w-full flex justify-start items-center">
          <div className="pl-6 w-full">
            <Typography
              variant="h1"
              as="h2"
              className="text-4xl lg:text-5xl font-bold font-sf-pro-display"
            >
              Who It&apos;s For
            </Typography>
            <Typography
              variant="h1"
              as="h3"
              className="text-2xl mt-4 mb-6 text-[#252525]"
            >
              Made for modern money movers
            </Typography>

            <div className="flex flex-col gap-5 max-w-sm ml-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#3860E7] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <Typography
                    variant="body-s"
                    className="text-[#555D67] text-sm"
                  >
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="relative">
            <Image
              width={585}
              height={610}
              src="/any-man.png"
              alt="Flux"
              className="pointer-events-none w-full max-w-[585px]"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[356px] p-4 rounded-2xl bg-white flex justify-between items-center">
              <div className="w-full">
                <Typography variant="body-s" className="text-[#555D67] text-sm">
                  Liquidity
                </Typography>
                <div className="flex gap-1 items-center my-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3860e7]" />
                  <Typography
                    variant="body-s"
                    className="text-[#3860e7] text-xs"
                  >
                    Cash Balance %24
                  </Typography>
                </div>
                <div className="flex gap-1 items-center my-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#043CAE]" />
                  <Typography
                    variant="body-s"
                    className="text-[#043CAE] text-xs"
                  >
                    Investments %76
                  </Typography>
                </div>
              </div>
              <Image
                width={52}
                height={52}
                src="/chart.svg"
                alt="Flux Chart"
                className="pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
