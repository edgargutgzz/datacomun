import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

const title = "datacomun";
const description =
  "datacomun diseña, construye y opera mapas y plataformas de datos para organizaciones que trabajan temas públicos.";

export const metadata: Metadata = {
  metadataBase: new URL("https://datacomun.com"),
  title: {
    default: title,
    template: "%s | datacomun",
  },
  description,
  openGraph: {
    title,
    description,
    url: "https://datacomun.com",
    siteName: "datacomun",
    locale: "es_MX",
    type: "website",
    images: ["/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero.jpg"],
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
