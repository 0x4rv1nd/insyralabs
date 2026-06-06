"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  PenTool,
  Bot,
  Share2,
  Code2,
  Terminal,
  Database,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We craft native and cross-platform apps for iOS and Android that users love and businesses rely on.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Intuitive, stunning interfaces designed around your users — because great design converts.",
  },
  {
    number: "03",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Custom AI workflows that eliminate repetitive tasks, reduce costs, and unlock smarter operations.",
  },
  {
    number: "04",
    icon: Share2,
    title: "Social Media Automation",
    description:
      "Automate scheduling, posting, and analytics across platforms so your team focuses on strategy, not logistics.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Web Applications",
    description:
      "Scalable, fast, and resilient web apps built with modern stacks — designed to handle real growth.",
  },
  {
    number: "06",
    icon: Terminal,
    title: "Custom Software",
    description:
      "Bespoke software engineered from the ground up to solve the exact problems your business faces.",
  },
  {
    number: "07",
    icon: Database,
    title: "ERP Systems",
    description:
      "Integrated enterprise systems that connect your operations, people, and data in one powerful platform.",
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
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#0BF3E0] mb-6">
                <span className="w-12 h-px bg-[#0BF3E0]/50" />
                What We Do
              </span>
              <h2
                className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
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
                className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                End-to-end digital solutions built for growth — from first sketch to final deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group relative p-8 lg:p-10 bg-foreground/[0.02] border border-foreground/10 overflow-hidden transition-all duration-500 hover:border-[#0BF3E0]/40 hover:bg-[#0BF3E0]/[0.03] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#0BF3E0]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0BF3E0]/20" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 flex items-center justify-center border border-foreground/15 text-foreground/70 transition-colors duration-500 group-hover:border-[#0BF3E0] group-hover:text-[#0BF3E0]">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{service.number}</span>
                </div>
                <h3 className="text-2xl font-display mb-4 group-hover:translate-x-1 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              {/* bottom underline */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/10 overflow-hidden">
                <div className="h-full bg-[#0BF3E0] w-0 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}

          {/* CTA card filling the 8th cell */}
          <div
            className={`relative p-8 lg:p-10 bg-[#0BF3E0]/[0.06] border border-[#0BF3E0]/30 flex flex-col justify-between transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${services.length * 70}ms` }}
          >
            <p className="text-xl font-display leading-snug mb-8">
              Ready to bring your idea to life?
            </p>
            <Button
              asChild
              className="bg-[#0BF3E0] hover:bg-[#0BF3E0]/90 text-black font-medium rounded-full h-12 px-6 group self-start"
            >
              <a href="#contact">
                Explore All Services
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
