import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Insyra Labs Privacy Policy: how we collect, use, store, and protect information across our website, products, and platform integrations, and how to request data deletion.",
  alternates: {
    canonical: "https://insyralabs.vercel.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Insyra Labs",
    description:
      "How Insyra Labs collects, uses, stores, and protects information, and how to request deletion of your data.",
    url: "https://insyralabs.vercel.app/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Insyra Labs",
    description:
      "How Insyra Labs collects, uses, stores, and protects information, and how to request deletion of your data.",
  },
};

export default function PrivacyPolicyPage() {
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
            Legal &amp; Compliance
          </span>

          <h1 className="text-4xl md:text-6xl font-display tracking-tight leading-[0.95] mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            Last Updated: August 23, 2026. This policy describes how Insyra Labs collects, uses, and safeguards information when you visit our website or use our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto border border-foreground/10 bg-foreground/[0.01] p-8 sm:p-12 backdrop-blur-md rounded-2xl">
            <div className="prose prose-invert max-w-none space-y-10 text-white/80 leading-relaxed">

              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">1. Overview</h2>
                <p>
                  Insyra Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) builds and operates digital products, custom web applications, mobile apps, and business integration services. We are committed to transparency and the security of your data. This Privacy Policy details our practices concerning personal information collected via our website, our products, and direct communications with you.
                </p>
              </div>

              {/* Data Collection */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">2. Information We Collect</h2>
                <p className="mb-4">
                  We collect information that you voluntarily provide to us, as well as limited technical data automatically generated during your use of this website:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Contact Information:</strong> When you submit a project inquiry or contact form, we collect your name, email address, phone number, project type, and any project details you choose to share. Submissions are forwarded to our internal team communication channel for handling.
                  </li>
                  <li>
                    <strong>Account Data:</strong> Where a client engagement includes an application we build or operate for you, account credentials (such as username, email address, and password hashes) or authentication tokens may be stored in that application&apos;s database under the terms of your service agreement.
                  </li>
                  <li>
                    <strong>Technical &amp; Log Information:</strong> Like most websites, our hosting infrastructure automatically processes standard web request data such as IP address, browser user agent, referring URL, and request timestamps to maintain security and performance.
                  </li>
                  <li>
                    <strong>Visit Notifications:</strong> This website sends a single per-session visit notification to our internal team channel containing the landing page, referrer, approximate location derived from your IP address, internet service provider name, device type, screen resolution, language, and timezone. We use this solely to understand where interest in our services comes from. This website does not use advertising cookies or cross-site trackers.
                  </li>
                  <li>
                    <strong>Cookies &amp; Local Storage:</strong> We use essential browser storage (such as a session flag to prevent duplicate notifications) and may use functional storage to remember interface preferences. You can clear or block these in your browser settings.
                  </li>
                </ul>
              </div>

              {/* Usage of Data */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We process data to deliver, monitor, and improve our professional technology services:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>To respond directly to project inquiries and arrange consultations.</li>
                  <li>To operate, secure, and maintain our website and the custom products we build.</li>
                  <li>To process authentication within client applications where applicable.</li>
                  <li>To prevent abuse, detect malicious traffic, and resolve technical issues.</li>
                  <li>To understand aggregate usage trends and improve user experience.</li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or trade your personal information, and we do not use it for third-party advertising.
                </p>
              </div>

              {/* Data Sharing & Third-Party Service Providers */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">4. Data Sharing, Storage, and Retention</h2>
                <p className="mb-3">
                  We share information only with the service providers necessary to operate this website and our business:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    <strong>Hosting:</strong> This website is hosted on Vercel, which processes request data and provides HTTPS delivery.
                  </li>
                  <li>
                    <strong>Team Communications:</strong> Contact form submissions and visit notifications are delivered to our internal team channel via the Telegram Bot API.
                  </li>
                  <li>
                    <strong>Geolocation Lookup:</strong> For visit notifications, approximate city-level location may be derived from Vercel geo headers or a lookup against the ip-api.com service based on IP address.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> If required by law, regulation, or valid legal process, we may disclose information to appropriate authorities.
                  </li>
                </ul>
                <p>
                  We retain collected data only as long as necessary to fulfill the purposes outlined in this policy, honor active client agreements, satisfy legal record-keeping obligations, or resolve open inquiries. Inquiry records that lead nowhere are periodically cleaned up; you can request earlier deletion at any time (see Section 7).
                </p>
              </div>

              {/* Meta Platform Integration Disclosures */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">5. Meta Platform Integrations</h2>
                <p className="mb-4">
                  Our services may integrate with Meta platforms, including Facebook, Instagram, and WhatsApp, where applicable. QRPress — a product developed, owned, and operated by Insyra Labs — integrates with supported Meta services to provide authorized business functionality. See our{" "}
                  <a href="/meta-integrations" className="text-[#0BF3E0] hover:underline font-mono">Meta Platform Integrations page</a>{" "}
                  for full detail. In summary:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>This website itself does not connect to Meta or access any Meta platform data.</strong>
                  </li>
                  <li>
                    <strong>Access Scope:</strong> Where a delivered product includes a Meta integration, access is limited strictly to the API permissions that the business customer explicitly grants through Meta&apos;s official OAuth authorization flow. We do not request unrelated personal profile data.
                  </li>
                  <li>
                    <strong>Purpose Limitation:</strong> Meta-connected data is used only to provide the functionality the customer configured — such as scheduling or publishing content to their own authorized pages and accounts.
                  </li>
                  <li>
                    <strong>No Third-Party Sharing:</strong> Meta-connected data and tokens are never sold or shared with third parties and are not used for profiling or advertising.
                  </li>
                  <li>
                    <strong>Retention:</strong> Meta-connected data is retained only while the integration remains active for the customer. Tokens and connected-asset data are removed upon disconnection or verified deletion request.
                  </li>
                  <li>
                    <strong>Revoking Connection:</strong> A business can disconnect its Meta assets at any time via Facebook&apos;s Business Integrations settings, and can request deletion of stored application data via our{" "}
                    <a href="/data-deletion" className="text-[#0BF3E0] hover:underline font-mono">Data Deletion page</a>.
                  </li>
                </ul>
              </div>

              {/* Security Practices */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">6. Security Practices</h2>
                <p>
                  We implement reasonable administrative and technical safeguards appropriate to the size and nature of our business. All traffic between your browser and this website is encrypted using HTTPS (SSL/TLS). Secrets and API credentials used by our systems are kept in server-side environment configuration rather than in source code. Access to production systems is limited to authorized team members. No method of transmission or storage is perfectly secure, but we review and improve our practices continuously.
                </p>
              </div>

              {/* User Rights & Deletion Request */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">7. Your Rights and Data Deletion</h2>
                <p className="mb-4">
                  Depending on your jurisdiction, you may have rights to access, correct, export, or delete the personal data we hold about you. To exercise these rights:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    Visit our dedicated <a href="/data-deletion" className="text-[#0BF3E0] hover:underline font-mono">User Data Deletion page</a> for the step-by-step process.
                  </li>
                  <li>
                    Or email us directly at <a href={`mailto:${CONTACT_EMAIL}?subject=Data%20Deletion%20Request`} className="text-[#0BF3E0] hover:underline font-mono break-all">{CONTACT_EMAIL}</a> with the subject line &quot;Data Deletion Request&quot;.
                  </li>
                  <li>
                    Verified requests are processed and completed within 30 days of submission.
                  </li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">8. Children&apos;s Privacy</h2>
                <p>
                  Our website and services are directed at businesses and are not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will delete it.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The &quot;Last Updated&quot; date at the top of this page indicates when it was last revised. Continued use of this website after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">10. Contact Us</h2>
                <p>
                  For privacy questions or data requests, contact:
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
