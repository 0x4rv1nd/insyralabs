"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  Printer,
  Briefcase,
  Building,
} from "lucide-react";

const products = [
  {
    tag: "Wireless Printing",
    title: "QRPress",
    description: "An instant wireless printing solution that enables users to print documents, receipts, and labels directly via QR code scanning.",
    icon: Printer,
    color: "#10B981",
    features: ["Scan-to-Print API", "Multi-format Document Support", "Zero-Driver Setup"],
    demoLink: "https://www.qrpress.in",
  },
  {
    tag: "Job Board Platform",
    title: "Get Jobs",
    description: "A high-performance job board platform that connects top talent with companies using smart matching and automated screening.",
    icon: Briefcase,
    color: "#F59E0B",
    features: ["AI Candidate Screening", "Real-time Application Tracking", "Dynamic Talent Pipelines"],
    demoLink: "#contact",
  },
  {
    tag: "Property & Workforce",
    title: "PG & Workforce Management",
    description: "An all-in-one operations platform for managing paying guest accommodations, hostels, and staff workforce scheduling.",
    icon: Building,
    color: "#8B5CF6",
    features: ["Automated Rent Collection", "Shift & Attendance Tracking", "Tenant & Staff Portals"],
    demoLink: "#contact",
  },
];

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden border-t border-foreground/5 bg-black"
    >
      {/* Background Gradients */}
      <div className="pointer-events-none absolute -left-1/4 top-1/4 w-96 h-96 rounded-full bg-[#0BF3E0]/5 blur-[120px] transition-opacity duration-1000" />
      <div className="pointer-events-none absolute -right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] transition-opacity duration-1000" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-[#0BF3E0] mb-4 sm:mb-6">
                <span className="w-6 sm:w-12 h-px bg-[#0BF3E0]/50" />
                Proprietary Tech
              </span>
              <h2
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Our
                <br />
                <span className="text-muted-foreground">Products.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Engineered in-house to solve the toughest bottlenecks in software development, operations, and business scaling.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={product.title}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-foreground/[0.01] border border-foreground/10 overflow-hidden transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/[0.02] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Dynamic visual indicator glow */}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl transition-all duration-700 opacity-20"
                  style={{
                    backgroundColor: isHovered ? product.color : "transparent",
                  }}
                />

                <div>
                  {/* Category Tag & Icon */}
                  <div className="flex items-center justify-between mb-8 sm:mb-12">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/80 bg-foreground/[0.04] px-3 py-1 border border-foreground/5">
                      {product.tag}
                    </span>
                    <div
                      className="w-12 h-12 flex items-center justify-center border transition-all duration-500"
                      style={{
                        borderColor: isHovered ? product.color : "rgba(255, 255, 255, 0.1)",
                        color: isHovered ? product.color : "rgba(255, 255, 255, 0.7)",
                        boxShadow: isHovered ? `0 0 15px ${product.color}20` : "none",
                      }}
                    >
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Product Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-display mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-10 border-t border-foreground/5 pt-6">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                        <Sparkles className="w-3.5 h-3.5 mt-1 shrink-0 text-[#0BF3E0]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <Button
                  asChild
                  id={`product-btn-${product.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="w-full bg-transparent border border-foreground/15 text-foreground hover:bg-foreground hover:text-black rounded-full h-11 sm:h-12 font-medium transition-all duration-500 group-hover:border-foreground"
                >
                  <a 
                    href={product.demoLink}
                    target={product.demoLink.startsWith("http") ? "_blank" : undefined}
                    rel={product.demoLink.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center gap-2"
                  >
                    {product.demoLink.startsWith("http") ? "Visit Website" : "Request Integration Access"}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>

                {/* Accent bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground/10 overflow-hidden">
                  <div
                    className="h-full w-0 transition-all duration-700"
                    style={{
                      backgroundColor: product.color,
                      width: isHovered ? "100%" : "0%",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
