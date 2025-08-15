import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const features = {
  send: [
    {
      image: "/features-card-images/spend-and-send-1.webp",
    },
    {
      image: "/features-card-images/spend-and-send-2.webp",
    },
    {
      image: "/features-card-images/spend-and-send-3.webp",
    },
  ],
  schedule: [
    {
      image: "/features-card-images/grow-and-trade-1.webp",
    },
    {
      image: "/features-card-images/grow-and-trade-2.webp",
    },
    {
      image: "/features-card-images/grow-and-trade-3.webp",
    },
  ],
  spend: [
    {
      image: "/features-card-images/protect-1.webp",
    },
    {
      image: "/features-card-images/protect-2.webp",
    },
    {
      image: "/features-card-images/protect-3.webp",
    },
  ],
};

export default function Features() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold font-sf-pro-display text-background mb-6">
          Smarter Money Runs On Self-Custody
        </h2>
        <p className="text-xl text-muted-foreground max-w-5xl mx-auto font-medium">
          A programmable account that grows your balance, powers your payments,
          and protects your assets.
        </p>
      </div>

      <Tabs defaultValue="send" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
          <TabsTrigger value="send" className="text-sm font-medium">
            Spend & Send
          </TabsTrigger>
          <TabsTrigger value="schedule" className="text-sm font-medium">
            Grow & Trade
          </TabsTrigger>
          <TabsTrigger value="spend" className="text-sm font-medium w-42">
            Protect & Automate
          </TabsTrigger>
        </TabsList>

        {Object.entries(features).map(([tabId, tabFeatures]) => (
          <TabsContent key={tabId} value={tabId} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {tabFeatures.map((feature, index) => (
                <div className="relative w-full aspect-[428/624]" key={index}>
                  <Image
                    src={feature.image}
                    alt="Feature card"
                    width={428}
                    height={624}
                    className="w-full h-full object-cover rounded-lg"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
