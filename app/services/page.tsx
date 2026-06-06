import { Navigation } from "@/components/landing/navigation";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Services | Insyra Labs",
  description: "Custom software development, web applications, mobile apps, AI automation, and UI/UX design services.",
};

export default function ServicesPage() {
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
            What We Do
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.9] mb-8">
            Services
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            End-to-end design and engineering for digital products.
            From initial concept to production-ready code.
          </p>
        </div>
      </section>
      
      <FeaturesSection />
      <HowItWorksSection />
      <DevelopersSection />
      <FooterSection />
    </main>
  );
}
