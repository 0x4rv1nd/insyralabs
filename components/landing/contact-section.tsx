"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const projectTypes = [
  "Web App",
  "Mobile App",
  "AI Automation",
  "UI/UX Design",
  "ERP",
  "Other",
];

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsLoading(true);
    setError(null);

    const formData = new FormData(form);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Contact form submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="relative border border-foreground/10 bg-foreground/[0.02] p-6 sm:p-8 lg:p-12"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName" className="text-sm sm:text-base">First Name *</Label>
                  <Input 
                    id="firstName" 
                    name="firstName" 
                    placeholder="Jane" 
                    required 
                    disabled={isLoading}
                    className="text-sm sm:text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                  <Input 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Doe" 
                    disabled={isLoading}
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="jane@company.com" 
                    required 
                    disabled={isLoading}
                    className="text-sm sm:text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    required 
                    disabled={isLoading}
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4 sm:mb-6">
                <Label htmlFor="projectType" className="text-sm sm:text-base">Project Type <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                <Select name="projectType" disabled={isLoading}>
                  <SelectTrigger id="projectType" className="w-full text-sm sm:text-base">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 mb-6 sm:mb-8">
                <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project, timeline, and budget..."
                  required
                  disabled={isLoading}
                  className="text-sm sm:text-base"
                />
              </div>

              {error && (
                <p className="text-xs sm:text-sm text-red-500 mb-4 text-center font-mono">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isLoading || submitted}
                className="w-full bg-[#0BF3E0] hover:bg-[#0BF3E0]/90 text-black font-medium rounded-full h-12 sm:h-14 text-sm sm:text-base group disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              {submitted && (
                <p className="text-xs sm:text-sm text-[#0BF3E0] mt-4 text-center font-mono">
                  Thanks — we&apos;ll be in touch within one business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
