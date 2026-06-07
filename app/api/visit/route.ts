import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { pathname, referrer, userAgent, screenResolution, timezone } = data;

    // Resolve IP address
    let ip = req.headers.get("x-forwarded-for") || (req as any).ip || "Unknown";
    if (ip && ip.includes(",")) {
      ip = ip.split(",")[0].trim();
    }

    // Resolve location info using Vercel Geo headers or fall back to IP-API
    const vercelCity = req.headers.get("x-vercel-ip-city");
    const vercelRegion = req.headers.get("x-vercel-ip-country-region");
    const vercelCountry = req.headers.get("x-vercel-ip-country");

    let locationStr = "Unknown Location";
    let isp = "";

    if (vercelCity && vercelCountry) {
      const regionPart = vercelRegion ? `${vercelRegion}, ` : "";
      locationStr = `${vercelCity}, ${regionPart}${vercelCountry}`;
    } else if (ip && ip !== "Unknown" && ip !== "127.0.0.1" && ip !== "::1" && !ip.startsWith("192.168.") && !ip.startsWith("10.")) {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city,isp`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData.status === "success") {
            locationStr = `${geoData.city}, ${geoData.regionName}, ${geoData.country}`;
            isp = geoData.isp;
          }
        }
      } catch (err) {
        console.error("Geolocation API error:", err);
      }
    } else {
      locationStr = "Localhost / Internal Network";
    }

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      console.warn("Telegram configuration missing for visitor tracking");
      return NextResponse.json({ success: false, error: "Telegram not configured" });
    }

    // Parse simple user agent device details
    let deviceType = "Unknown Device";
    if (userAgent) {
      if (/mobi|android|iphone|ipad|ipod/i.test(userAgent)) {
        deviceType = "Mobile Device";
      } else {
        deviceType = "Desktop Device";
      }
      const osMatches = userAgent.match(/\(([^)]+)\)/);
      if (osMatches && osMatches[1]) {
        deviceType += ` (${osMatches[1].split(";")[0]})`;
      }
    }

    const localTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Format rich markdown notification
    const telegramMessage = `
🌐 *New Visitor on Insyra Labs*

📍 *Location:* ${locationStr}
🌐 *IP Address:* \`${ip}\`
🏢 *ISP:* ${isp || "N/A"}
📄 *Landed On:* \`${pathname || "/"}\`
🔗 *Referrer:* ${referrer || "Direct"}
🖥️ *Device:* ${deviceType}
📐 *Screen:* ${screenResolution || "N/A"}
🕒 *Timezone:* ${timezone || "N/A"}
⏰ *Time:* ${localTime}
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API Error:", errorData);
      return NextResponse.json({ success: false, error: errorData.description });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor API handler error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
