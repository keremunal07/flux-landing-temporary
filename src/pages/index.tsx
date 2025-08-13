import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import PoweredBy from "@/components/home/PoweredBy";
import Features from "@/components/home/Features";
import StatsCarousel from "@/components/home/StatsCarousel";
import SecuritySection from "@/components/home/SecuritySection";
import StablecoinSection from "@/components/home/StablecoinSection";
import AssetSection from "@/components/home/AssetSection";
import WhoItsForSection from "@/components/home/WhoItsForSection";
import BuildSection from "@/components/home/BuildSection";
import FaqSection from "@/components/home/FaqSection";
import FooterSection from "@/components/home/FooterSection";

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className="flex-1">
        <Hero />
        <PoweredBy />
        <Features />
        <StatsCarousel />
        <SecuritySection />
        <StablecoinSection />
        <AssetSection />
        <WhoItsForSection />
        <BuildSection />
        <FaqSection />
        <FooterSection />
      </main>
    </Layout>
  );
}
