import { Navigation } from "@/components/landing/navigation";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { SecuritySection } from "@/components/landing/security-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "About Us",
  description:
    "Insyra Labs is a technology provider that designs, builds, and operates custom software systems, web applications, mobile apps, and business integrations.",
  alternates: {
    canonical: "https://insyralabs.vercel.app/about",
  },
  openGraph: {
    title: "About | Insyra Labs",
    description:
      "Insyra Labs is a technology provider building and operating custom software systems for businesses.",
    url: "https://insyralabs.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Insyra Labs",
    description:
      "Insyra Labs is a technology provider building and operating custom software systems for businesses.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0BF3E0]/5 blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#0BF3E0] mb-8">
            <span className="w-12 h-px bg-[#0BF3E0]/50" />
            About Insyra Labs
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.9] mb-8">
            We Build
            <br />
            <span className="text-white/40">Custom Software</span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Insyra Labs is a technology provider that designs, builds, and operates digital products and custom software systems for modern businesses.
          </p>
        </div>
      </section>

      {/* Company Mission / Details */}
      <section className="relative py-12 sm:py-16 lg:py-20 z-10 border-t border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#0BF3E0] uppercase tracking-wider">
                Our Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl font-display leading-tight">
                A Software Engine
                <br />
                <span className="text-white/40">Built for Business Growth</span>
              </h2>
              <p className="text-white/70 leading-relaxed">
                Insyra Labs operates as a dedicated technology provider. We build, deploy, and operate high-performance software systems that solve operational bottlenecks and automate critical workflows.
              </p>
              <p className="text-white/70 leading-relaxed">
                We partner with ambitious startups, growing agencies, and established businesses to engineer custom products. Whether establishing a secure API connection, building a customer-facing mobile application, or designing a database, we focus on engineering clarity and security.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="border border-foreground/10 bg-foreground/[0.01] p-6 hover:border-foreground/20 transition-all duration-300">
                <h3 className="text-[#0BF3E0] font-mono text-sm uppercase mb-4">Custom Systems We Build</h3>
                <ul className="text-sm text-white/70 space-y-3">
                  <li className="flex gap-2"><span>•</span> <span>Bespoke ERP &amp; operational databases</span></li>
                  <li className="flex gap-2"><span>•</span> <span>High-performance mobile apps (iOS &amp; Android)</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Scalable SaaS web applications &amp; APIs</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Workflow automation and platform integrations</span></li>
                  <li className="flex gap-2"><span>•</span> <span>Custom business intelligence dashboards</span></li>
                </ul>
              </div>
              
              <div className="border border-foreground/10 bg-foreground/[0.01] p-6 hover:border-foreground/20 transition-all duration-300">
                <h3 className="text-[#0BF3E0] font-mono text-sm uppercase mb-4">Our In-House Products</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  We actively design and operate proprietary software platforms to refine our technology stack and deliver specialized utility:
                </p>
                <ul className="text-sm text-white/70 space-y-3">
                  <li className="flex gap-2"><span>•</span> <span><strong>QRPress:</strong> Zero-driver wireless scan-to-print utility, developed and operated by Insyra Labs with supported Meta service integrations.</span></li>
                  <li className="flex gap-2"><span>•</span> <span><strong>AR Sarees:</strong> Online saree storefront — currently in development.</span></li>
                  <li className="flex gap-2"><span>•</span> <span><strong>Get Jobs:</strong> Modern job board matching and screening system.</span></li>
                  <li className="flex gap-2"><span>•</span> <span><strong>PG Management:</strong> Accommodation scheduling &amp; operations portal.</span></li>
                </ul>
              </div>

              <div className="border border-foreground/10 bg-foreground/[0.01] p-6 sm:col-span-2 hover:border-foreground/20 transition-all duration-300">
                <h3 className="text-[#0BF3E0] font-mono text-sm uppercase mb-4">Technology Expertise</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Our development architecture centers on secure, modern, and highly scalable technologies. We specialize in building responsive frontends (React, Next.js), performant backend servers (Node.js, TypeScript), secure database engines (PostgreSQL, MongoDB), and integrations with external developer APIs (including Meta Graph APIs, communication bots, and payment systems like Stripe).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <InfrastructureSection />
      <MetricsSection />
      <SecuritySection />
      <FooterSection />
    </main>
  );
}
