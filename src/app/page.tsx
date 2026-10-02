import CoverageGrid from "@/components/CoverageGrid";
import Logo from "@/components/Logo";
import GrainOverlay from "@/components/GrainOverlay";

// Right-hand coverage chart is hidden for now; flip to true to bring it back.
const SHOW_COVERAGE = false;

export default function Home() {
  return (
    <div className="px-4 md:px-6 py-3 md:py-5">

      {/* Hero — split screen */}
      <div className={`min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2.5rem)] grid ${SHOW_COVERAGE ? "md:grid-cols-[1.2fr_0.8fr]" : ""}`}>

        {/* Left column — nav + copy */}
        <div
          className={`relative flex flex-col overflow-hidden md:min-h-[calc(100vh-2.5rem)] ${SHOW_COVERAGE ? "rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl" : "rounded-3xl"}`}
          style={{
            background: "radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(139,92,246,0.14) 0%, transparent 55%), #f9f7f4",
          }}
        >
          <GrainOverlay />


          {/* Nav */}
          <header className="relative z-10 flex items-center justify-between px-4 md:px-10 py-7">
            <Logo size="text-xl" />
          </header>

          {/* Copy */}
          <div className="relative z-10 flex flex-col justify-end flex-1 px-4 md:px-10 pt-10 pb-8 md:pt-0 md:pb-11">
            <h1 className="max-w-[18ch] text-[2.6rem] sm:text-[2.6rem] md:text-8xl xl:text-[7.5rem] font-semibold text-[#0f172a] leading-[1.02] tracking-tight">
              Recolectar, limpiar y comunicar <span className="logo-comun">datos públicos</span>.
            </h1>
            <div className="mt-5 md:mt-12 md:pt-8 md:border-t md:border-[#0f172a]/10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p className="max-w-xl text-lg md:text-2xl text-[#475569] leading-snug">
                Estudio de datos y diseño para organizaciones de la sociedad civil.
              </p>
              <div className="md:text-right">
                <p className="text-base text-[#475569]">Contacto</p>
                <a
                  href="mailto:hola@datacomun.com"
                  className="cta-border group mt-2 inline-flex w-fit items-center gap-2 text-[#0f172a] font-medium text-base md:text-lg border-b-2 pb-1"
                >
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  hola@datacomun.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — daily PM2.5 coverage, Observatorio del Aire */}
        {SHOW_COVERAGE && (
        <div className="relative flex flex-col overflow-hidden rounded-b-3xl md:rounded-bl-none md:rounded-tr-3xl min-h-[85svh] md:min-h-[calc(100vh-2.5rem)] bg-[#0f172a] px-6 md:px-10 pt-8 md:pt-10 pb-6 md:pb-8">
          <CoverageGrid />
        </div>
        )}

      </div>

    </div>
  );
}
