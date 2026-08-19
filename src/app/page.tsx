import Logo from "@/components/Logo";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <div>

      {/* Hero — split screen */}
      <div className="min-h-screen grid md:grid-cols-[1.2fr_0.8fr]">

        {/* Left column — nav + copy */}
        <div
          className="relative flex flex-col overflow-hidden md:min-h-screen"
          style={{
            background: "radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(139,92,246,0.14) 0%, transparent 55%), #f9f7f4",
          }}
        >
          <GrainOverlay />


          {/* Nav */}
          <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-7">
            <Logo size="text-xl" />
          </header>

          {/* Copy */}
          <div className="relative z-10 flex flex-col justify-end flex-1 px-6 md:px-10 pt-4 pb-12 md:pt-0 md:pb-16">
            <div className="w-fit">
              <h1 className="text-5xl sm:text-5xl md:text-7xl font-semibold text-[#0f172a] leading-[1.05] tracking-tight">
                Datos para organizaciones que transforman su <span className="logo-comun">comunidad</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#475569] leading-relaxed text-balance">
                Somos un estudio de visualización de datos que convierte información compleja en herramientas claras, visuales y accionables.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <p className="text-xs text-[#888888] uppercase tracking-widest mb-2">Hablemos.</p>
              <a
                href="mailto:hola@datacomun.com"
                className="cta-border inline-flex items-center gap-3 text-[#0f172a] font-medium text-base md:text-lg border-b-2 pb-1 cursor-default"
              >
                hola@datacomun.com
              </a>
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative overflow-hidden min-h-[50vh] md:min-h-screen">
          <img
            src="/hero.jpg"
            alt="datacomun — taller de datos con la comunidad"
            className="w-full h-full object-cover object-[45%_center]"
          />
          <p className="absolute bottom-3 right-3 text-[10px] text-black/40 tracking-wide">
            Fotografía: Equipo de documentación LABNL
          </p>
        </div>

      </div>

    </div>
  );
}
