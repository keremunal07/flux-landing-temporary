import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const features = {
  send: [
    {
      image: "/features-card-images/via-worldwide.png",
    },
    {
      image: "/features-card-images/schedule-payments.png",
    },
    {
      image: "/features-card-images/spend-globally.png",
    },
  ],
  schedule: [
    {
      image: "/features-card-images/trade-perpetuals.png",
    },
    {
      image: "/features-card-images/use-ai-manage.png",
    },
    {
      image: "/features-card-images/earn-yield.png",
    },
  ],
  spend: [
    {
      image: "/features-card-images/secure-access-to.png",
    },
    {
      image: "/features-card-images/keep-transfers-hidden.png",
    },
    {
      image: "/features-card-images/set-spending-limits.png",
    },
  ],
};

export default function Features() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-background mb-6">
          Smarter Money Runs On Self-Custody
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium">
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
          <TabsTrigger value="spend" className="text-sm font-medium">
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
