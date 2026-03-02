import ScatterBg from "@/components/ScatterBg";

export default function Home() {
  return (
    <>
      <ScatterBg />
      <div className="relative flex min-h-screen items-center justify-center">
        <h1 className="text-3xl md:text-5xl tracking-widest text-[#111111]">
          data comun
        </h1>
        <footer className="absolute bottom-8">
          <a
            href="mailto:hola@datacomun.com"
            className="text-sm tracking-widest text-black/50 hover:text-black transition-colors"
          >
            hola@datacomun.com
          </a>
        </footer>
      </div>
    </>
  );
}
