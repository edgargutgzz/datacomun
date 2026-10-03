import Link from "next/link";
import SpringyText from "@/components/SpringyText";

export default function Logo({ size = "text-2xl" }: { size?: string }) {
  return (
    <Link href="/" className={`${size} font-bold tracking-tight text-[#0f172a]`}>
      <SpringyText text="datacomun" highlight="comun" />
    </Link>
  );
}
