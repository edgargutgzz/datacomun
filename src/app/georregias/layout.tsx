import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Territoria — Georregias",
  description:
    "Mapa de seguridad urbana para mujeres en Monterrey, México.",
};

export default function GeorregiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
