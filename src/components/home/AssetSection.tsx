import Image from "next/image";
import { Typography } from "../ui/typography";

export default function AssetSection() {
  return (
    <section className="py-20 relative grid lg:grid-cols-2 gap-12">
      <div>
        <div className="pl-6">
          <Typography
            variant="h1"
            as="h2"
            className="text-4xl lg:text-5xl font-bold font-sf-pro-display"
          >
            Money That Works
          </Typography>
          <Typography
            variant="h1"
            as="h3"
            className="text-2xl my-4 font-medium text-[#555D67]"
          >
            Every asset in your wallet works for you, automatically.
          </Typography>
          <Typography variant="body-s" className="text-[#777F89]">
            Access top DeFi vaults built to outperform traditional savings.{" "}
            <br /> No lockups, no minimums, and no reliance on centralized
            platforms.
          </Typography>
        </div>

        <div className="w-full bg-gradient-to-r from-[#F7F7F7] to-[#DBDBDB] rounded-2xl mt-16">
          <Image
            width={572}
            height={612}
            src="/asset-section-phone.webp"
            alt="Flux Assets"
            className="mx-auto pointer-events-none"
            unoptimized
          />
        </div>
      </div>
      <div className="relative h-full flex items-end">
        <Image
          width={1000}
          height={950}
          src="/world.png"
          alt="Flux Stablecoin Assets"
          className="absolute -top-96 -right-96 max-w-[unset] opacity-60 z-0 pointer-events-none"
        />

        <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full">
          <div className="flex flex-col gap-2 max-w-[240px]">
            <Image
              width={60}
              height={32}
              src="/assets-card-images/switch.svg"
              alt="Flux switch"
              className="pointer-events-none"
            />
            <Typography
              variant="body-s"
              as="h3"
              className="text-[#252525] text-[16px]"
            >
              Always On
            </Typography>
            <Typography
              variant="body-s"
              as="p"
              className="text-[#777f89] text-sm"
            >
              Yield starts the moment funds hit your wallet.
            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full border border-[#EDEDED] flex justify-center items-center">
                <Image
                  width={26}
                  height={14}
                  src="/assets-card-images/icon-1.svg"
                  alt="Flux icon"
                  className="pointer-events-none"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#EDEDED] flex justify-center items-center">
                <Image
                  width={22}
                  height={20}
                  src="/assets-card-images/icon-2.svg"
                  alt="Flux icon"
                  className="pointer-events-none"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#EDEDED] flex justify-center items-center">
                <Image
                  width={25}
                  height={25}
                  src="/assets-card-images/icon-3.svg"
                  alt="Flux icon"
                  className="pointer-events-none"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#EDEDED] flex justify-center items-center">
                <Image
                  width={33}
                  height={33}
                  src="/assets-card-images/icon-4.svg"
                  alt="Flux icon"
                  className="pointer-events-none"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#EDEDED] flex justify-center items-center">
                <Image
                  width={30}
                  height={30}
                  src="/assets-card-images/icon-5.svg"
                  alt="Flux icon"
                  className="pointer-events-none"
                />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#EDEDED] flex justify-center items-center">
                <Image
                  width={25}
                  height={25}
                  src="/assets-card-images/icon-6.svg"
                  alt="Flux icon"
                  className="pointer-events-none"
                />
              </div>
            </div>
            <Typography
              variant="body-s"
              as="h3"
              className="text-[#252525] text-[16px]"
            >
              DeFi-Powered
            </Typography>
            <Typography
              variant="body-s"
              as="p"
              className="text-[#777f89] text-sm"
            >
              Backed by trusted protocols like Aave, Morpho, Kamino and Drift
            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <Image
              width={50}
              height={50}
              src="/assets-card-images/24-hours.svg"
              alt="Flux 24 Hours"
              className="pointer-events-none"
            />
            <Typography
              variant="body-s"
              as="h3"
              className="text-[#252525] text-[16px]"
            >
              Instant Access
            </Typography>
            <Typography
              variant="body-s"
              as="p"
              className="text-[#777f89] text-sm"
            >
              No lockups or delays. Withdraw or move funds anytime.
            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div
                className="h-[50px] w-full max-w-[210px] rounded-xl flex justify-center items-center gap-1"
                style={{
                  boxShadow: "0px 6px 12px 2px rgba(187, 187, 187, 0.15)",
                }}
              >
                <Image
                  width={30}
                  height={30}
                  src="/assets-card-images/chart-positive.svg"
                  alt="Flux Chart"
                />
                <Typography
                  variant="body-s"
                  as="p"
                  className="text-[#777f89] text-sm"
                >
                  Auto-Yield
                </Typography>
                <div className="w-1 h-1 rounded-full bg-[#BCC4CC]" />
                <Typography
                  variant="body-s"
                  as="p"
                  className="text-green-500 text-sm"
                >
                  35.33%
                </Typography>
                <Typography
                  variant="body-s"
                  as="p"
                  className="text-[#777f89] text-sm"
                >
                  APY
                </Typography>
              </div>
            </div>
            <Typography
              variant="body-s"
              as="h3"
              className="text-[#252525] text-[16px]"
            >
              High Yield Vaults
            </Typography>
            <Typography
              variant="body-s"
              as="p"
              className="text-[#777f89] text-sm"
            >
              Assets are routed into optimized strategy vaults to earn high APY.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
