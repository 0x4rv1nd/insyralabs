import { Navigation } from "@/components/landing/navigation";
import { ProductsSection } from "@/components/landing/products-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Our Work",
  description:
    "Explore Insyra Labs products and projects: web applications, mobile apps, automation platforms, and AI-powered solutions built for modern businesses.",
  alternates: {
    canonical: "https://insyralabs.vercel.app/work",
  },
  openGraph: {
    title: "Our Work | Insyra Labs",
    description:
      "Explore Insyra Labs products and projects built for modern businesses.",
    url: "https://insyralabs.vercel.app/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Insyra Labs",
    description:
      "Explore Insyra Labs products and projects built for modern businesses.",
  },
};

export default function WorkPage() {
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
            Portfolio
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.9] mb-8">
            Our Work
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            A selection of projects we&apos;ve built for startups, scale-ups, and enterprises.
            Each one crafted with precision, purpose, and care.
          </p>
        </div>
      </section>
      
      <ProductsSection />
      <IntegrationsSection />
      <FooterSection />
    </main>
  );
}
