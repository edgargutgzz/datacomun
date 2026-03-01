import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-2">
      <Image
        src="/logo.svg"
        alt="data comun logo"
        width={120}
        height={120}
        priority
      />
      <h1 className="text-5xl tracking-widest">
        data comun
      </h1>
    </div>
  );
}
