import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, projectType, message } = data;

    // Validate required fields (lastName and projectType are optional)
    if (!firstName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    console.log("[v0] Telegram Bot Token exists:", !!telegramBotToken);
    console.log("[v0] Telegram Chat ID:", telegramChatId);

    if (!telegramBotToken || !telegramChatId) {
      console.error("[v0] Telegram credentials not configured");
      return NextResponse.json({ success: true, telegram: false, error: "Telegram not configured" });
    }

    // Format the message for Telegram
    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    const telegramMessage = `
🔔 *New Enquiry from Insyra Labs Website*

👤 *Name:* ${fullName}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
📋 *Project Type:* ${projectType || "Not specified"}

💬 *Message:*
${message}

---
_Received at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}_
    `.trim();

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    console.log("[v0] Sending to Telegram...");
    
    const telegramResponse = await fetch(telegramUrl, {
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

    const telegramResult = await telegramResponse.json();
    console.log("[v0] Telegram response:", JSON.stringify(telegramResult));

    if (!telegramResponse.ok) {
      console.error("[v0] Telegram API error:", telegramResult);
      return NextResponse.json({ 
        success: true, 
        telegram: false, 
        telegramError: telegramResult.description 
      });
    }

    console.log("[v0] Telegram message sent successfully");
    return NextResponse.json({ success: true, telegram: true });
  } catch (error) {
    console.error("[v0] Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
