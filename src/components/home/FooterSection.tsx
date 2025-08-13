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
            className="text-4xl lg:text-5xl font-bold mx-auto text-center mb-3"
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
        <div className="w-full flex justify-between items-center py-8 border-b border-[#BCC4CC] relative">
          <div />
          <div className="flex items-center justify-center gap-5 absolute left-1/2 -translate-x-1/2">
            <Image
              width={32}
              height={32}
              src="/social/instagram.svg"
              alt="Instagram"
            />
            <Image
              width={32}
              height={32}
              src="/social/telegram.svg"
              alt="Telegram"
            />
            <Image
              width={32}
              height={32}
              src="/social/linkedin.svg"
              alt="Linkedin"
            />
            <Image width={32} height={32} src="/social/x.svg" alt="x" />
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
      </footer>
    </>
  );
}
