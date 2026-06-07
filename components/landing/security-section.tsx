"use client";

import { useEffect, useState, useRef } from "react";
import { Lightbulb, Gauge, Users, BadgeCheck } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new technologies and approaches to solve problems in ways others haven't thought of yet.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Speed, scalability, and reliability aren't optional — they're built into everything we ship.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as an extension of your team, staying transparent and aligned from kickoff to launch.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description:
      "Every pixel, every line of code, every interaction is held to the highest standard before it ships.",
  },
];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section id="values" ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <span className={`inline-flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono text-[#0BF3E0] mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-6 sm:w-12 h-px bg-[#0BF3E0]/50" />
            What Drives Us
          </span>

          <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-display tracking-tight leading-[0.9] mb-6 sm:mb-8 lg:mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Our
            <br />
            <span className="text-muted-foreground">values.</span>
          </h2>

          <p className={`text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            The principles that shape how we work, what we build, and the partnerships we keep.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative p-6 sm:p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-700 hover:border-[#0BF3E0]/40 hover:bg-[#0BF3E0]/[0.03] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#0BF3E0]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0BF3E0]/15" />

              <div className="relative z-10">
                <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center border border-foreground/15 text-foreground/70 mb-6 sm:mb-8 transition-colors duration-500 group-hover:border-[#0BF3E0] group-hover:text-[#0BF3E0]">
                  <value.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
