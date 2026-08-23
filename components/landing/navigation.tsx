"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home",              href: "/" },
  { name: "Products",          href: "/#products" },
  { name: "Work",              href: "/work" },
  { name: "Services",          href: "/services" },
  { name: "About",             href: "/about" },
  { name: "Meta Integrations", href: "/meta-integrations" },
  { name: "Contact",           href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 left-4 right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 relative z-50 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
            isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5 sm:gap-2.5 group shrink-0">
            <span
              className={`flex items-center justify-center rounded-md bg-[#0BF3E0] text-black font-display font-semibold transition-all duration-500 ${
                isScrolled ? "w-6 h-6 sm:w-7 sm:h-7 text-xs sm:text-sm" : "w-7 h-7 sm:w-9 sm:h-9 text-sm sm:text-base"
              }`}
            >
              I
            </span>
            <span className={`font-display tracking-tight transition-all duration-500 whitespace-nowrap text-xs sm:text-sm lg:text-base ${isScrolled ? "text-base sm:text-lg text-foreground" : "text-lg sm:text-xl text-white"}`}>
              INSYRA LABS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs lg:text-sm transition-colors duration-300 relative group ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-foreground" : "bg-white"}`} />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              asChild
              className={`rounded-full transition-all duration-500 bg-[#0BF3E0] hover:bg-[#0BF3E0]/90 text-black font-medium ${isScrolled ? "px-4 sm:px-5 h-8 sm:h-9 text-xs sm:text-sm" : "px-5 sm:px-6 h-9 sm:h-10 text-xs sm:text-sm"}`}
            >
              <a href="/contact">Let&apos;s Talk</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-1.5 sm:p-2 transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="flex flex-col h-full px-4 sm:px-8 pt-20 sm:pt-28 pb-6 sm:pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl sm:text-5xl font-display text-foreground hover:text-[#0BF3E0] transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom CTAs */}
          <div className={`flex gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-foreground/10 transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button 
              asChild
              className="flex-1 bg-[#0BF3E0] hover:bg-[#0BF3E0]/90 text-black font-medium rounded-full h-12 sm:h-14 text-sm sm:text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="/contact">Let&apos;s Talk</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
