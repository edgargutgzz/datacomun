import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Datacomun — Data Design",
    template: "%s | Datacomun",
  },
  description:
    "Datacomun is a data design firm that transforms complex data into clear, compelling visual communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
