import Image from "next/image";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";
import { Smartphone } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div className="flex items-center space-x-2">
        <Image src="/flux-logo.svg" alt="flux-logo" width={118} height={28} />
      </div>

      <nav className="hidden md:flex items-center space-x-16 font-inter">
        <a
          href="#features"
          className="hover:text-background/70 transition-colors"
        >
          <Typography as="span" variant="display">
            Individuals
          </Typography>
        </a>
        <a
          href="#pricing"
          className="hover:text-background/70 transition-colors"
        >
          <Typography as="span" variant="display">
            Business
          </Typography>
        </a>
        <a
          href="#contact"
          className="hover:text-background/70 transition-colors"
        >
          <Typography as="span" variant="display">
            Learn
          </Typography>
        </a>
        <a
          href="#contact"
          className="hover:text-background/70 transition-colors"
        >
          <Typography as="span" variant="display">
            Support
          </Typography>
        </a>

        <Button className="min-h-12 cursor-pointer">
          <Typography variant="button" className="flex items-center gap-2">
            <Smartphone /> Download App
          </Typography>
        </Button>
      </nav>
    </header>
  );
}
