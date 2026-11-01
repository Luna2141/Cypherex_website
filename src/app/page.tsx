import BuiltWith from "@/components/home/built-with";
import Features from "@/components/home/features";
import FeaturesFaq from "@/components/home/features-faq";
import Hero from "@/components/home/hero";
import ProofSection from "@/components/home/proof-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ProofSection />
      <BuiltWith />
      <FeaturesFaq />
    </div>
  );
}
