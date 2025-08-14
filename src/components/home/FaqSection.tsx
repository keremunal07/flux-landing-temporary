import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Typography } from "../ui/typography";

export default function FaqSection() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <Typography
        variant="h1"
        as="h2"
        className="text-2xl lg:text-3xl font-bold text-center font-sf-pro-display"
      >
        FAQ
      </Typography>
      <Typography
        variant="body-s"
        className="text-[#535862] text-xl text-center my-5"
      >
        You can find answers to your questions here.
      </Typography>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="value-1"
          className="!border-b !border-b-[#E9EAEB]"
        >
          <AccordionTrigger>
            <Typography
              variant="body-s"
              className="text-[#181D27] text-lg font-semibold"
            >
              What is Flux?
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography variant="body-s" className="text-[#535862] text-sm">
              Flux is a self-custodial smart wallet that feels like a modern
              banking app powered by DeFi. It lets you save, earn, borrow,
              trade, and send money globally while keeping full control of your
              keys and assets.
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="value-2"
          className="!border-b !border-b-[#E9EAEB]"
        >
          <AccordionTrigger>
            <Typography
              variant="body-s"
              className="text-[#181D27] text-lg font-semibold"
            >
              Do I own my assets on Flux?
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography variant="body-s" className="text-[#535862] text-sm">
              Yes. Flux is 100% self-custodial. Your keys stay on your device,
              secured by biometrics or passkeys. No one, not even Flux, can
              freeze, move, or access your funds.
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="value-3"
          className="!border-b !border-b-[#E9EAEB]"
        >
          <AccordionTrigger>
            <Typography
              variant="body-s"
              className="text-[#181D27] text-lg font-semibold"
            >
              How is Flux different from crypto wallets?
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography variant="body-s" className="text-[#535862] text-sm">
              Flux is built for real-world finance. It replaces seed phrases
              with passkeys and guardian recovery, offers a banking-grade user
              experience, DeFi access and allows programmable automation for
              limits, schedules, and rules.
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="value-4"
          className="!border-b !border-b-[#E9EAEB]"
        >
          <AccordionTrigger>
            <Typography
              variant="body-s"
              className="text-[#181D27] text-lg font-semibold"
            >
              Can I send and receive fiat money too?
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography variant="body-s" className="text-[#535862] text-sm">
              Yes. Flux bridges crypto and traditional finance. You can send and
              receive stablecoins or fiat globally, get virtual USD and EUR
              accounts, and spend worldwide with the Flux debit card.
            </Typography>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="value-5"
          className="!border-b !border-b-[#E9EAEB]"
        >
          <AccordionTrigger>
            <Typography
              variant="body-s"
              className="text-[#181D27] text-lg font-semibold"
            >
              What if I lose my phone?
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography variant="body-s" className="text-[#535862] text-sm">
              Flux uses biometric security and multiple recovery methods to
              restore your wallet. You can add trusted guardians or devices to
              recover access without seed phrases.
            </Typography>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
