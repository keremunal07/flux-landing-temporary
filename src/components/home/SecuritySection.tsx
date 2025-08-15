import Image from "next/image";
import { Typography } from "../ui/typography";
import { Check } from "lucide-react";

const features = [
  "Sign with Face ID, passkey, or hardware wallet",
  "Recover access using social keys—no seed phrase",
  "Set limits for spending, transfers, and cards",
  "Add a guardian for inheritance or backup",
  "Turn on 2FA for all or specific actions",
  "Let AI monitor and block risky activity",
];

export default function SecuritySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center bg-background rounded-2xl pl-18">
        <div className="space-y-8">
          <div className="space-y-6">
            <Typography
              variant="h1"
              as="h2"
              className="text-4xl lg:text-5xl font-bold font-sf-pro-display text-white"
            >
              Total Control,
              <br /> Zero Complexity
            </Typography>
            <Typography variant="body-r" className="text-2xl text-[#BBBBBB]">
              Hardware-level protection with easy
              <br /> recovery and powerful controls.
            </Typography>
          </div>

          <div className="space-y-4 pl-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <Typography variant="body-s" className="text-[#BBBBBB]">
                  {feature}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full">
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: "var(--grid-pattern-2)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex justify-center">
            <div className="relative">
              <Image
                src="/security-section-phone.webp"
                alt="Security App Interface"
                width={367}
                height={564}
                className="pointer-events-none"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
