import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // TODO: wire up an email provider (e.g. Resend) here
  // For now, log to server console in development
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
