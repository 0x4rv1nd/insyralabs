"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const sessionKey = "insyra_session_tracked";
    // Fire only once per session to avoid spamming the bot
    if (sessionStorage.getItem(sessionKey)) {
      return;
    }

    const trackVisit = async () => {
      try {
        const metadata = {
          pathname,
          referrer: document.referrer || "Direct",
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

        await fetch("/api/visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(metadata),
        });

        sessionStorage.setItem(sessionKey, "true");
      } catch (err) {
        console.error("Failed to track visit:", err);
      }
    };

    trackVisit();
  }, [pathname]);

  return null;
}
