import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import {
  Lock,
  ShieldCheck,
  Settings2,
  KeyRound,
  Database,
  Eye,
  Share2,
  Workflow,
  MessageSquare,
  Info,
} from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Meta Platform Integrations",
  description:
    "Insyra Labs develops business software and integrations that connect supported workflows with Meta platforms such as Facebook Pages and Instagram professional accounts.",
  alternates: {
    canonical: "https://insyralabs.vercel.app/meta-integrations",
  },
  openGraph: {
    title: "Meta Platform Integrations | Insyra Labs",
    description:
      "Insyra Labs develops business software and integrations that connect supported workflows with Meta platforms.",
    url: "https://insyralabs.vercel.app/meta-integrations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Platform Integrations | Insyra Labs",
    description:
      "Insyra Labs develops business software and integrations that connect supported workflows with Meta platforms.",
  },
};

const authSteps = [
  {
    num: "01",
    title: "Business Onboarding",
    desc: "A business engages Insyra Labs or uses a solution we built and operates on their behalf."
  },
  {
    num: "02",
    title: "Initiate Connection",
    desc: "The business chooses to enable the Meta integration feature inside its application."
  },
  {
    num: "03",
    title: "Redirect to Meta",
    desc: "The user is redirected to Meta's official OAuth authorization screen — never to an Insyra Labs login page."
  },
  {
    num: "04",
    title: "Explicit Consent",
    desc: "The user reviews the exact permissions requested and explicitly authorizes the connection on Meta's own interface."
  },
  {
    num: "05",
    title: "Scoped Access Only",
    desc: "The application receives access limited strictly to the permissions granted, used only to provide the configured functionality."
  },
  {
    num: "06",
    title: "Revoke Anytime",
    desc: "The business can disconnect at any time via Facebook's Business Integrations settings and request data deletion from us."
  }
];

const capabilities = [
  {
    icon: Share2,
    title: "Facebook Pages",
    desc: "Publishing and scheduling of content to business-owned Facebook Pages through official Page APIs."
  },
  {
    icon: Eye,
    title: "Instagram Professional Accounts",
    desc: "Content publishing workflows for connected Instagram professional/business accounts where the API supports it."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    desc: "Business messaging automation built on WhatsApp Business APIs for approved business use cases."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Custom automation pipelines that move content, notifications, and records between your systems and Meta platforms."
  }
];

const dataCategories = [
  {
    category: "Business & Account Identifiers",
    reason: "Identify which assets you authorized",
    usage: "Lists connected pages/profiles in the customer's dashboard so you can confirm what is linked."
  },
  {
    category: "Page / Account Profile Details",
    reason: "Verify active connection",
    usage: "Displays names and profile imagery of authorized assets to confirm the correct account is synced."
  },
  {
    category: "Content You Schedule",
    reason: "Perform requested publishing",
    usage: "Transfers the media and text you schedule to Meta's API so posts publish at the designated time. Used only when publishing is part of your project scope."
  },
  {
    category: "Insights / Analytics",
    reason: "Provide reporting features",
    usage: "Retrieved only if analytics functionality is explicitly included in your engagement."
  }
];

export default function MetaIntegrationsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-black text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0BF3E0]/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#0BF3E0] mb-6">
            <span className="w-12 h-px bg-[#0BF3E0]/50" />
            Integrations
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-6">
            Meta Platform
            <br />
            <span className="text-white/40">Integrations.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-3xl leading-relaxed">
            Insyra Labs develops and operates business software. Where a project requires it, we build integrations that connect business workflows with supported Meta platforms using Meta&apos;s official developer APIs and authorization flow.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <section className="relative py-16 sm:py-20 lg:py-24 z-10 space-y-20 sm:space-y-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-20">

            {/* Transparency Notice */}
            <div className="border border-[#0BF3E0]/25 bg-[#0BF3E0]/[0.04] rounded-lg p-6 flex gap-4">
              <Info className="w-5 h-5 text-[#0BF3E0] shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h2 className="font-semibold text-white">Scope of This Page</h2>
                <p className="text-sm text-white/70 leading-relaxed">
                  Our services may integrate with Meta platforms, including Facebook, Instagram, and WhatsApp, where applicable. When you connect a Meta account, we process the information and permissions you authorize to provide the requested functionality.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  <strong className="text-white">Business relationship:</strong> QRPress is a product developed, owned, and operated by Insyra Labs. It is not a third-party company — any Meta platform access through QRPress occurs under the same business entity, Insyra Labs, subject to the authorization, privacy, and deletion practices described on this page. Insyra Labs is an independent software provider and is not owned by or affiliated with Meta Platforms, Inc.
                </p>
              </div>
            </div>

            {/* Why We Use Meta APIs */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#0BF3E0] uppercase tracking-wider">
                <Workflow className="w-4 h-4" /> Why We Use Meta APIs
              </span>
              <h2 className="text-3xl font-display text-white">Automating Business Asset Workflows</h2>
              <p className="text-white/70 leading-relaxed">
                Insyra Labs uses supported Meta APIs to provide business customers with functionality that allows them to manage or automate supported workflows involving their own Meta business assets.
              </p>
              <p className="text-white/70 leading-relaxed">
                A concrete example is <strong className="text-white">QRPress</strong>, a product developed, owned, and operated by Insyra Labs, which integrates with supported Meta services to provide authorized business functionality for its business users.
              </p>
              <p className="text-white/70 leading-relaxed">
                For custom engagements, when a customer&apos;s solution includes social media automation, we build workflows that let their team draft, schedule, and publish content to their own authorized Facebook Pages and Instagram professional accounts, record publishing history, and — where included in scope — surface basic insights. This replaces manual copy-pasting across channels with a governed, auditable pipeline. For projects that include messaging use cases, we build on WhatsApp Business APIs under applicable business policies.
              </p>
            </div>

            <hr className="border-white/10" />

            {/* What We Build */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-[#0BF3E0] uppercase tracking-wider">
                  <Database className="w-4 h-4" /> Capabilities
                </span>
                <h2 className="text-3xl font-display text-white">What We Build</h2>
                <p className="text-white/70 leading-relaxed">
                  Supported Meta platform surfaces we integrate in customer solutions include:
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="p-6 border border-foreground/10 bg-foreground/[0.02] space-y-3">
                      <div className="w-10 h-10 border border-foreground/15 flex items-center justify-center text-[#0BF3E0]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Authorization Flow */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-[#0BF3E0] uppercase tracking-wider">
                  <KeyRound className="w-4 h-4" /> Authorization Flow
                </span>
                <h2 className="text-3xl font-display text-white">How It Works</h2>
                <p className="text-white/70 leading-relaxed">
                  Connections are established exclusively through Meta&apos;s official OAuth 2.0 flow. Our systems never ask for, capture, or store your Facebook or Instagram password.
                </p>
              </div>

              <ol className="grid gap-4 sm:grid-cols-2 list-none">
                {authSteps.map((step, idx) => (
                  <li key={idx} className="relative p-6 border border-foreground/10 bg-foreground/[0.01] min-h-[160px]">
                    <span className="block font-mono text-xs text-[#0BF3E0] mb-4">{step.num}</span>
                    <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>

            <hr className="border-white/10" />

            {/* Data We Access */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-[#0BF3E0] uppercase tracking-wider">
                  <Eye className="w-4 h-4" /> Transparency
                </span>
                <h2 className="text-3xl font-display text-white">Data Involved in Integrations</h2>
                <p className="text-white/70 leading-relaxed">
                  In any Meta-connected solution, we follow a least-privilege model: only the permissions needed for the features you commissioned are requested, and each category below applies only when that functionality is part of your project scope. Data is never sold, shared with third parties, or used for advertising or profiling.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {dataCategories.map((item, idx) => (
                  <div key={idx} className="p-6 border border-foreground/10 bg-foreground/[0.02] space-y-4">
                    <h3 className="text-base font-semibold text-white">{item.category}</h3>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-white/40 block font-mono">Why it&apos;s accessed:</span>
                        <span className="text-white/80">{item.reason}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block font-mono">How it&apos;s used:</span>
                        <span className="text-white/80 leading-relaxed">{item.usage}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Security Section */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#0BF3E0] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Security
              </span>
              <h2 className="text-3xl font-display text-white">Security &amp; Privacy Practices</h2>
              <p className="text-white/70 leading-relaxed">
                Safeguards we apply across our website and delivered solutions:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm text-white/80">
                <li className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 mt-0.5 text-[#0BF3E0] shrink-0" />
                  <span><strong>HTTPS everywhere:</strong> All traffic between browsers and our hosted applications is encrypted in transit via SSL/TLS.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 mt-0.5 text-[#0BF3E0] shrink-0" />
                  <span><strong>OAuth-only authorization:</strong> Platform connections use Meta&apos;s official authorization flow. We never handle your platform passwords.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 mt-0.5 text-[#0BF3E0] shrink-0" />
                  <span><strong>Secrets kept server-side:</strong> API credentials and tokens live in server-side environment configuration — never in client code or repositories.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 mt-0.5 text-[#0BF3E0] shrink-0" />
                  <span><strong>Server-side API communication:</strong> Requests to third-party APIs are made from our servers, keeping credentials out of the browser entirely.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 mt-0.5 text-[#0BF3E0] shrink-0" />
                  <span><strong>Least-privilege scopes:</strong> Integrations request only the minimum permissions required for the commissioned features.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 mt-0.5 text-[#0BF3E0] shrink-0" />
                  <span><strong>Data deletion procedures:</strong> Verified requests result in removal of stored personal and integration data within 30 days.</span>
                </li>
              </ul>
            </div>

            <hr className="border-white/10" />

            {/* Disconnect & Revoke Access */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#0BF3E0] uppercase tracking-wider">
                <Settings2 className="w-4 h-4" /> Revocation
              </span>
              <h2 className="text-3xl font-display text-white">Disconnect / Revoke Access</h2>
              <p className="text-white/70 leading-relaxed">
                You remain in control of your Meta assets at all times. Two ways to cut off access:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-foreground/10 bg-foreground/[0.02] p-6 space-y-3">
                  <h3 className="font-semibold text-white">From Meta&apos;s side</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Log into Facebook, open <strong>Settings &amp; Privacy &gt; Settings &gt; Business Integrations</strong>, locate the Insyra Labs application, and click <strong>Remove</strong>. This immediately invalidates our token and halts all processing for your assets.
                  </p>
                </div>
                <div className="border border-foreground/10 bg-foreground/[0.02] p-6 space-y-3">
                  <h3 className="font-semibold text-white">From our side</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Email{" "}
                    <a href={`mailto:${CONTACT_EMAIL}?subject=Disconnect%20Request`} className="text-[#0BF3E0] hover:underline break-all">
                      {CONTACT_EMAIL}
                    </a>{" "}
                    and we will disable the integration, remove stored identifiers and cached data, and confirm completion. See also our{" "}
                    <a href="/data-deletion" className="text-[#0BF3E0] hover:underline">Data Deletion page</a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
