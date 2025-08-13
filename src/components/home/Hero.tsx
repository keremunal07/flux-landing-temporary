import Image from "next/image";
import { Typography } from "../ui/typography";
import { Input } from "../ui/input";
import { CircleArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section
      className="rounded-2xl relative overflow-hidden"
      style={{
        background: "var(--hero-gradient)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "var(--grid-pattern)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 px-16">
        <div className="space-y-8">
          <div className="space-y-6">
            <Typography variant="h1" as="h1" className="max-w-lg">
              The Better Bank You Control
            </Typography>
            <Typography variant="body-r" className="text-muted-foreground">
              Build wealth. Spend it anywhere. Zero limits.
            </Typography>
            <p className="text-xl "></p>
          </div>

          <div className="space-y-4 max-w-3xs">
            <div className="flex flex-col gap-3">
              <Input placeholder="Your Email" />
              <Button>
                <CircleArrowRight /> Get Early Access
              </Button>
            </div>
          </div>
          <Typography variant="body-s" className="text-muted-foreground">
            Biometric protection. Hardware-wallet security.
          </Typography>
        </div>

        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <Image
              src="/phone-mockup.png"
              alt="Mobile App Interface"
              width={640}
              height={576}
              className=""
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
