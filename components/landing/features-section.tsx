"use client";

import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  PenTool,
  Bot,
  Share2,
  Code2,
  Terminal,
  Database,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Custom iOS and Android applications designed to streamline customer engagement and field operations, featuring real-time syncing and offline capabilities.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "User-centric research and interface design that reduces churn, improves conversion rates, and ensures a seamless experience across web and mobile layouts.",
  },
  {
    number: "03",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Custom LLM integrations, document parser engines, and workflow bots that eliminate manual data entry and accelerate business operations.",
  },
  {
    number: "04",
    icon: Share2,
    title: "Social Media Automation",
    description:
      "Business social media automation solutions for scheduling, publishing, workflow automation, and analytics across supported platforms (such as Facebook Pages and Instagram Professional profiles).",
  },
  {
    number: "05",
    icon: Code2,
    title: "Web Applications",
    description:
      "Modern cloud-hosted SaaS applications built with secure Next.js and React frontends, engineered for thousands of concurrent business users.",
  },
  {
    number: "06",
    icon: Terminal,
    title: "Custom Software",
    description:
      "Bespoke internal tools, CRM solutions, and RESTful API integrations built to bridge communication between fragmented software ecosystems.",
  },
  {
    number: "07",
    icon: Database,
    title: "ERP Systems",
    description:
      "Custom resource management systems that consolidate inventory tracking, scheduling, staff attendance, and payroll databases into a single interface.",
  },
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="features"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-[#0BF3E0] mb-4 sm:mb-6">
                <span className="w-6 sm:w-12 h-px bg-[#0BF3E0]/50" />
                What We Do
              </span>
              <h2
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Our
                <br />
                <span className="text-muted-foreground">Expertise.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                End-to-end digital solutions built for growth — from first sketch to final deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group relative p-6 sm:p-8 lg:p-10 bg-foreground/[0.02] border border-foreground/10 overflow-hidden transition-all duration-500 hover:border-[#0BF3E0]/40 hover:bg-[#0BF3E0]/[0.03] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#0BF3E0]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0BF3E0]/20" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center border border-foreground/15 text-foreground/70 transition-colors duration-500 group-hover:border-[#0BF3E0] group-hover:text-[#0BF3E0]">
                    <service.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-muted-foreground">{service.number}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display mb-3 sm:mb-4 group-hover:translate-x-1 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              {/* bottom underline */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/10 overflow-hidden">
                <div className="h-full bg-[#0BF3E0] w-0 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
