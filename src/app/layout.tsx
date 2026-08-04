import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "datacomun",
    template: "%s | datacomun",
  },
  description:
    "datacomun es un estudio de diseño de datos que convierte información compleja en comunicación visual clara y efectiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
