"use client";

import { useEffect, useState, useRef } from "react";

export function InfrastructureSection() {
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
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-[#0BF3E0] mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-[#0BF3E0]/50" />
            Who We Are
          </span>

          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center">
            {/* Abstract visual — left */}
            <div className={`w-48 lg:w-80 xl:w-96 shrink-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
                alt="Abstract network sphere representing connected systems"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Title */}
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[1.02] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              We Build at the{" "}
              <span className="text-[#0BF3E0]">Intersection</span>{" "}
              of Design &amp; Engineering
            </h2>
          </div>
        </div>

        {/* Paragraphs + stat */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className={`lg:col-span-8 space-y-6 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Insyra Labs is a full-service digital agency founded on the belief that great software should be both powerful and beautiful. We partner with startups and growing businesses to create digital products that are built to last.
            </p>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Our team of designers, engineers, and strategists bring deep technical expertise and creative thinking to every project — delivering solutions that don&apos;t just look good, but actually move the needle.
            </p>
          </div>

          {/* Stat badge */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="p-10 border border-[#0BF3E0]/30 bg-[#0BF3E0]/[0.05]">
              <span className="text-6xl lg:text-7xl font-display text-[#0BF3E0]">2+</span>
              <span className="block text-base text-foreground mt-3">
                Years of Industry Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
