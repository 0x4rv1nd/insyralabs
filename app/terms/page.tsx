import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Terms of Service",
  description:
    "Insyra Labs Terms of Service: rules and responsibilities governing use of our website, custom software services, products, and platform integrations.",
  alternates: {
    canonical: "https://insyralabs.vercel.app/terms",
  },
  openGraph: {
    title: "Terms of Service | Insyra Labs",
    description:
      "Terms governing use of the Insyra Labs website, custom software services, products, and platform integrations.",
    url: "https://insyralabs.vercel.app/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Insyra Labs",
    description:
      "Terms governing use of the Insyra Labs website, custom software services, products, and platform integrations.",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-black text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0BF3E0]/5 blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#0BF3E0] mb-6">
            <span className="w-12 h-px bg-[#0BF3E0]/50" />
            Legal & Compliance
          </span>
          
          <h1 className="text-4xl md:text-6xl font-display tracking-tight leading-[0.95] mb-6">
            Terms of Service
          </h1>
          
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            Last Updated: August 23, 2026. These terms govern your use of Insyra Labs&apos; website, products, custom integrations, and services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto border border-foreground/10 bg-foreground/[0.01] p-8 sm:p-12 backdrop-blur-md rounded-2xl">
            <div className="prose prose-invert max-w-none space-y-10 text-white/80 leading-relaxed">
              
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">1. Acceptance of Terms</h2>
                <p>
                  By accessing this website, purchasing our custom development services, or registering an account on any Insyra Labs proprietary platform, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>
              </div>

              {/* Description of Services */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">2. Description of Services</h2>
                <p>
                  Insyra Labs designs, engineers, and hosts digital tools, custom software databases, mobile applications, and API workflow automation systems for business clients. Some of our web platforms offer proprietary workflow utilities (such as wireless scan-to-print systems, job boards, and automated properties managers) or connect to external social media platforms via standard application program interfaces (APIs).
                </p>
              </div>

              {/* Customer Accounts */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">3. Customer Accounts</h2>
                <p>
                  To use certain premium features or integrations, you may be required to establish a user account. You are responsible for safeguarding your login credentials, keeping account profile information accurate, and notifying us immediately of any unauthorized access. We reserve the right to suspend accounts that violate acceptable use principles.
                </p>
              </div>

              {/* Customer Responsibilities & Acceptable Use */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">4. Acceptable Use and Responsibilities</h2>
                <p className="mb-3">
                  You agree to use our software services only for lawful business operations. You must not:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Attempt to bypass, disable, or reverse engineer any security filters, server locks, or rate limits.</li>
                  <li>Use our platform to transmit spam, unsolicited marketing messages, or violate intellectual property rights.</li>
                  <li>Access or scrape backend services, database structures, or source files without authorization.</li>
                  <li>Violate the terms of service of any third-party APIs connected through our integrations.</li>
                </ul>
              </div>

              {/* Third-Party and Meta Integrations */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">5. Third-Party and Meta Platform Integrations</h2>
                <p className="mb-3">
                  Certain solutions we build for business customers may facilitate automated workflows involving third-party platforms, including Meta platforms (Facebook Pages, Instagram professional accounts) or other APIs, where the customer has requested such an integration. If you connect your Meta business assets to a solution operated by Insyra Labs:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Platform Authorization:</strong> You explicitly authorize Insyra Labs to request, process, and execute actions strictly under the API permissions you grant during Meta&apos;s official authorization flow.
                  </li>
                  <li>
                    <strong>Compliance:</strong> You must maintain active compliance with Meta&apos;s Developer Policies and terms. We are not responsible for account suspensions resulting from violating third-party platform rules.
                  </li>
                  <li>
                    <strong>API Limits:</strong> We are subject to API rate limits, deprecations, and service updates enforced by third-party providers. We do not warrant that integrations will run uninterrupted if external systems update their access models or deprecate legacy APIs.
                  </li>
                </ul>
              </div>

              {/* Service Availability */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">6. Service Availability &amp; Support</h2>
                <p>
                  While we aim to keep our hosted custom products available and reliable, we do not guarantee continuous, uninterrupted, or error-free access. Scheduled server maintenance, upstream network outages, or updates to third-party APIs may lead to temporary downtime. Support for integration bugs or operational inquiries is provided in accordance with your specific software service agreement.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">7. Intellectual Property</h2>
                <p>
                  Unless specified otherwise in a bespoke contract, all software engines, user interfaces, branding, graphics, icons, templates, and backend architecture developed by Insyra Labs remain our exclusive intellectual property. Client content, database assets, and custom logo marks supplied by you remain your property.
                </p>
              </div>

              {/* Confidentiality & Data Handling */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">8. Confidentiality &amp; Data Handling</h2>
                <p>
                  Both parties agree to treat proprietary business information, project files, and system passwords as confidential. We process business data in compliance with our Privacy Policy. We maintain backup systems and secure access controls but encourage customers to regularly export or back up their operational account databases.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">9. Limitation of Liability</h2>
                <p>
                  In no event shall Insyra Labs, its directors, or its developers be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data loss, business interruption, or API downtime) arising out of or related to your use of our website, custom integrations, or products.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">10. Termination</h2>
                <p>
                  We reserve the right to restrict or terminate access to our platforms or integrations, with or without notice, in the event of material breach of these terms, non-payment of software maintenance balances, or actions that threaten platform stability. You may close your user accounts or disconnect third-party APIs at any time.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">11. Contact Information</h2>
                <p>
                  If you have questions regarding these terms, please contact:
                  <br />
                  <span className="block mt-2 font-mono text-sm text-[#0BF3E0]">
                    Insyra Labs
                    <br />
                    Email: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline break-all">{CONTACT_EMAIL}</a>
                    <br />
                    Website: insyralabs.vercel.app
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
