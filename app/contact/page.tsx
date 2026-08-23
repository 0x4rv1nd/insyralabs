import { Navigation } from "@/components/landing/navigation";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";
import { Mail, Shield, Building, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact Insyra Labs for custom software inquiries, business partnerships, integration support, or privacy and compliance questions. Email: arvind301024@gmail.com",
  alternates: {
    canonical: "https://insyralabs.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Insyra Labs",
    description:
      "Get in touch with Insyra Labs for project inquiries, integration support, or compliance questions.",
    url: "https://insyralabs.vercel.app/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Insyra Labs",
    description:
      "Get in touch with Insyra Labs for project inquiries, integration support, or compliance questions.",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0BF3E0]/5 blur-[120px]" />
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
            Have a project in mind, require technical integration support, or have developer/compliance queries? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Structured Contact Details Grid */}
      <section className="relative z-10 py-8 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {/* Business Inquiry */}
            <div className="p-6 border border-white/10 bg-foreground/[0.01] hover:border-white/20 transition-all duration-300">
              <div className="w-8 h-8 flex items-center justify-center border border-white/15 text-[#0BF3E0] mb-4">
                <Building className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Company</h3>
              <p className="text-xs text-white/60 leading-relaxed font-mono">
                Insyra Labs
                <br />
                Software design, development &amp; integration services
              </p>
            </div>

            {/* Support/Contact */}
            <div className="p-6 border border-white/10 bg-foreground/[0.01] hover:border-white/20 transition-all duration-300">
              <div className="w-8 h-8 flex items-center justify-center border border-white/15 text-[#0BF3E0] mb-4">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Support &amp; Inquiries</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xs text-[#0BF3E0] leading-relaxed font-mono hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Privacy Compliance */}
            <div className="p-6 border border-white/10 bg-foreground/[0.01] hover:border-white/20 transition-all duration-300">
              <div className="w-8 h-8 flex items-center justify-center border border-white/15 text-[#0BF3E0] mb-4">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Privacy &amp; Data Requests</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Privacy%2FData%20Request`}
                className="text-xs text-[#0BF3E0] leading-relaxed font-mono hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Telephone */}
            <div className="p-6 border border-white/10 bg-foreground/[0.01] hover:border-white/20 transition-all duration-300">
              <div className="w-8 h-8 flex items-center justify-center border border-white/15 text-[#0BF3E0] mb-4">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Phone</h3>
              <a
                href={CONTACT_PHONE_HREF}
                className="text-xs text-[#0BF3E0] leading-relaxed font-mono hover:underline"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <FooterSection />
    </main>
  );
}
