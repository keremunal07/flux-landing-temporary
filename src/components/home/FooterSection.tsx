import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { Smartphone } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <section className="py-20">
        <Image
          width={180}
          height={40}
          src="/flux-logo.svg"
          alt="Flux Logo"
          className="mx-auto"
        />

        <div className="my-12">
          <Typography
            variant="h1"
            as="h2"
            className="text-4xl lg:text-5xl font-bold mx-auto text-center mb-3 font-sf-pro-display"
          >
            Take control of your wealth now.
          </Typography>

          <Typography
            variant="h1"
            as="h2"
            className="text-2xl mx-auto text-center text-[#777F89]"
          >
            Don’t stake your freedom on a platform. Take it back.
          </Typography>
        </div>

        <Button className="min-h-12 cursor-pointer mx-auto block">
          <Typography variant="button" className="flex items-center gap-2">
            <Smartphone /> Download App
          </Typography>
        </Button>
      </section>

      <footer className="my-10">
        <div className="w-full flex justify-between items-center py-8 border-b border-[#BCC4CC] relative mb-8">
          <div />
          <div className="flex items-center justify-center gap-5 absolute left-1/2 -translate-x-1/2">
            {/* <Link href="https://www.instagram.com/flux.app/">
              <Image
                width={32}
                height={32}
                src="/social/instagram.svg"
                alt="Instagram"
                className="cursor-pointer"
              />
            </Link> */}
            <Link href="https://t.me/flux_app">
              <Image
                width={32}
                height={32}
                src="/social/telegram.svg"
                alt="Telegram"
                className="cursor-pointer"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/fluxmoney">
              <Image
                width={32}
                height={32}
                src="/social/linkedin.svg"
                alt="Linkedin"
                className="cursor-pointer"
              />
            </Link>
            <Link href="https://x.com/FluxOnchain">
              <Image
                width={32}
                height={32}
                src="/social/x.svg"
                alt="x"
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link href="/privacy-policy">
              <Typography variant="body-s" className="text-sm text-[#252525]">
                Privacy Policy
              </Typography>
            </Link>
            <Link href="/terms-of-service">
              <Typography variant="body-s" className="text-sm text-[#252525]">
                Terms of Service
              </Typography>
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
            Disclaimers
          </Typography>
          <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
            All Rights Reserved © 2025 Flux.
          </Typography>
        </div>
        <div className="grid lg:grid-cols-2 mt-3">
          <div className="flex flex-col gap-y-3 gap-x-10 mt-3">
            <div className="flex items-start gap-3">
              <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
                1.
              </Typography>
              <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
                Flux is a financial technology platform, not a bank or a digital
                asset custodian.
              </Typography>
            </div>

            <div className="flex items-start gap-3">
              <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
                3.
              </Typography>
              <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
                Local jurisdictions or partners may require KYC or address
                verification for certain services (e.g., fiat accounts, card
                issuance, or regulated financial products). Flux itself does not
                perform these checks unless required by applicable law or a
                service provider.
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 gap-x-10 mt-3">
            <div className="flex items-start gap-3">
              <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
                2.
              </Typography>
              <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
                Flux does not hold user funds, company information, or have
                control over user funds. All assets are held in self-custodial
                smart accounts, secured by passkeys, biometrics, or hardware
                wallets.
              </Typography>
            </div>

            <div className="flex items-start gap-3">
              <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
                4.
              </Typography>
              <Typography variant="body-s" className="text-xs text-[#BCC4CC]">
                Any debit card, virtual account, or off-ramp services are
                provided by regulated third-party partners, subject to their
                terms and conditions.
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
