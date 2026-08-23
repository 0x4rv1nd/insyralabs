import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "User Data Deletion",
  description:
    "How to request deletion of your personal data, account information, or connected platform data (including Meta-connected assets) from Insyra Labs.",
  alternates: {
    canonical: "https://insyralabs.vercel.app/data-deletion",
  },
  openGraph: {
    title: "User Data Deletion | Insyra Labs",
    description:
      "Request deletion of your personal data, account information, or connected platform data from Insyra Labs.",
    url: "https://insyralabs.vercel.app/data-deletion",
  },
  twitter: {
    card: "summary_large_image",
    title: "User Data Deletion | Insyra Labs",
    description:
      "Request deletion of your personal data, account information, or connected platform data from Insyra Labs.",
  },
};

export default function DataDeletionPage() {
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
            User Data Deletion
          </h1>

          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            Learn how to request deletion of your personal information, contact details, or connected platform data associated with Insyra Labs.
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
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">Overview</h2>
                <p>
                  Insyra Labs respects your right to control your personal data. This page explains what data may be associated with you across our website and the solutions we build and operate, and how you can request its deletion at any time.
                </p>
              </div>

              {/* What Can Be Deleted */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">What Can Be Deleted</h2>
                <p className="mb-4">
                  Depending on your interaction with Insyra Labs, the following categories of data can be deleted upon a verified request:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Contact &amp; Inquiry Information:</strong> Your name, email address, phone number, company name, and project details submitted through our contact form or direct email.
                  </li>
                  <li>
                    <strong>Visit Notification Records:</strong> Technical visit records (approximate location, device type, referrer) sent to our internal team channel when you browsed this website.
                  </li>
                  <li>
                    <strong>Application Account Data:</strong> Where we operate an application for your business under a service agreement — registered user profiles, credentials, and stored business content in that application.
                  </li>
                  <li>
                    <strong>Connected Platform Integration Data:</strong> For solutions that include platform integrations (such as Meta-connected Facebook Pages or Instagram professional accounts) — OAuth tokens, connected asset identifiers, and cached profile data linked to those integrations.
                  </li>
                </ul>
              </div>

              {/* Data Deletion Process */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">How to Request Deletion</h2>
                <p className="mb-4">
                  We currently handle deletion through a manual verification process to protect against unauthorized or accidental loss of business data.
                </p>

                <div className="border border-foreground/10 bg-foreground/[0.03] p-6 rounded-lg space-y-4">
                  <h3 className="text-lg font-semibold text-white">Manual Request Process:</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>
                      Email us at <a href={`mailto:${CONTACT_EMAIL}?subject=User%20Data%20Deletion%20Request`} className="text-[#0BF3E0] hover:underline font-mono break-all">{CONTACT_EMAIL}</a>.
                    </li>
                    <li>
                      Use the subject line: <code className="text-[#0BF3E0] font-mono font-bold">User Data Deletion Request</code>.
                    </li>
                    <li>
                      Include the email address or identity the data is associated with, and — where applicable — your company name, application account name, or the specific connected assets you want purged.
                    </li>
                    <li>
                      Our team will send a verification confirmation to protect against fraudulent deletion requests.
                    </li>
                    <li>
                      Once verified, the requested data is permanently removed from active systems and backups within 30 days, and we confirm completion by email.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Meta Asset Disconnection */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">Disconnecting Meta Platform Integrations</h2>
                <p className="mb-3">
                  If a solution built by Insyra Labs for your business is connected to your Meta assets (such as a Facebook Page or Instagram professional account) and you want to revoke API access without deleting everything else:
                </p>
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li>Log into your Facebook account.</li>
                  <li>
                    Go to <span className="font-semibold text-white">Settings &amp; Privacy &gt; Settings &gt; Business Integrations</span>.
                  </li>
                  <li>
                    Find the Insyra Labs application listed there and click <span className="font-semibold text-white">&quot;Remove&quot;</span>. This immediately invalidates the access token issued to us and stops all scheduled actions for those assets.
                  </li>
                  <li>
                    Then notify us via the deletion process above so we also erase any residual identifiers or cached data stored on our side.
                  </li>
                </ol>
                <p>
                  Removing the integration from Meta&apos;s side halts all data processing for those assets immediately; deleting our stored records completes the cleanup.
                </p>
              </div>

              {/* Data Retention Exceptions */}
              <div>
                <h2 className="text-2xl font-display text-white mb-4 border-b border-foreground/5 pb-2">Retention Exceptions</h2>
                <p>
                  We may retain certain records where required by law or legitimate business need — for example, invoices, payment receipts, or signed agreements subject to statutory accounting and tax requirements. Such records are kept only as long as necessary and are not used for any other purpose.
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
