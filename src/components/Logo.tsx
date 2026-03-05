import Link from "next/link";

export default function Logo({ size = "text-2xl" }: { size?: string }) {
  return (
    <Link href="/" className={`${size} font-bold tracking-tight`}>
      <span style={{ color: "#0f172a" }}>data</span>
      <span className="logo-comun">comun</span>
    </Link>
  );
}
