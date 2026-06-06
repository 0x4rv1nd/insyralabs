"use client";

const footerLinks = {
  Services: [
    { name: "Web Applications", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "AI & Automation", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Our Values", href: "/about#values" },
    { name: "How We Work", href: "/about#how-it-works" },
  ],
  Resources: [
    { name: "Our Stack", href: "#integrations" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "/contact" },
  ],
};

const footerStats = [
  { value: "10+", label: "Projects" },
  { value: "95%", label: "Retention" },
  { value: "2+", label: "Years" },
  { value: "09", label: "Team Members" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="Abstract bioluminescent landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10">
          {footerStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-4xl lg:text-5xl font-display text-white">{stat.value}</span>
              <span className="text-sm text-white/40">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2.5 mb-6">
                <span className="flex items-center justify-center w-9 h-9 rounded-md bg-[#0BF3E0] text-black font-display font-semibold text-base">
                  I
                </span>
                <span className="text-xl font-display text-white whitespace-nowrap">INSYRA&nbsp;LABS</span>
              </a>

              <p className="text-white/50 leading-relaxed mb-8 max-w-xs text-sm">
                From idea to impact. We design and engineer custom software, web, and AI products for modern businesses.
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-[#0BF3E0] text-black rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2025 Insyra Labs. All rights reserved.
          </p>

          <p className="text-sm text-white/30">
            Crafted with precision by Insyra Labs.
          </p>
        </div>
      </div>

      {/* Large faded watermark */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none">
        <span className="block text-center font-display text-[16vw] leading-[0.8] text-white/[0.04] tracking-tight pb-4 whitespace-nowrap">
          INSYRALABS
        </span>
      </div>
    </footer>
  );
}
