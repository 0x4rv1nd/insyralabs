import { Navigation } from "@/components/landing/navigation";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Contact | Insyra Labs",
  description: "Get in touch with Insyra Labs. Let us know about your project and we will get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#0BF3E0] mb-8">
            <span className="w-12 h-px bg-[#0BF3E0]/50" />
            Get In Touch
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.9] mb-8">
            Let&apos;s Talk
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it.
            Fill out the form below and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>
      
      <ContactSection />
      <FooterSection />
    </main>
  );
}
