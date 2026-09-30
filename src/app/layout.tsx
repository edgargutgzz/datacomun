import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

const title = "datacomun — Estudio de datos y diseño";
const headline = "Recolectar, limpiar y comunicar datos públicos.";
const description = "Estudio de datos y diseño para organizaciones de la sociedad civil.";

export const metadata: Metadata = {
  metadataBase: new URL("https://datacomun.com"),
  title: {
    default: title,
    template: "%s | datacomun",
  },
  description: `${headline} ${description}`,
  openGraph: {
    title: "datacomun",
    description: `${headline} ${description}`,
    url: "https://datacomun.com",
    siteName: "datacomun",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "datacomun",
    description: `${headline} ${description}`,
  },
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
