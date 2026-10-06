"use server";

import nodemailer from "nodemailer";

export type ContactState = { ok: boolean; message: string };

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // honeypot: bot biasanya mengisi field tersembunyi ini
  if (formData.get("website")) {
    return { ok: true, message: "Message sent." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "All fields are required." };
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { ok: false, message: "Invalid email format." };
  }
  if (message.length > 2000) {
    return { ok: false, message: "Message is too long." };
  }

  // LOG SEMENTARA: hapus setelah masalah beres
  console.log("user:", JSON.stringify(process.env.GMAIL_USER));
  console.log(
    "pass:",
    process.env.GMAIL_APP_PASSWORD?.length,
    process.env.GMAIL_APP_PASSWORD?.slice(0, 2),
    process.env.GMAIL_APP_PASSWORD?.slice(-2),
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return { ok: true, message: "Thanks, your message has been sent!" };
  } catch (err) {
    console.error("sendMail error:", err);
    return { ok: false, message: "Failed to send, please try again." };
  }
}
