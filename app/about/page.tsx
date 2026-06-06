import { Navigation } from "@/components/landing/navigation";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { SecuritySection } from "@/components/landing/security-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "About | Insyra Labs",
  description: "Learn about Insyra Labs — a premium custom software and web agency building digital products that help businesses scale.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#0BF3E0] mb-8">
            <span className="w-12 h-px bg-[#0BF3E0]/50" />
            About Us
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.9] mb-8">
            We Build
            <br />
            <span className="text-white/40">What Matters</span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            A team of designers and engineers obsessed with craft, clarity, and impact.
            We partner with ambitious teams to build products that perform.
          </p>
        </div>
      </section>
      
      <InfrastructureSection />
      <MetricsSection />
      <SecuritySection />
      <FooterSection />
    </main>
  );
}
