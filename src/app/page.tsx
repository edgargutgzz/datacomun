import CoverageGrid from "@/components/CoverageGrid";
import Logo from "@/components/Logo";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <div className="px-4 md:px-6 py-3 md:py-5">

      {/* Hero — split screen */}
      <div className="min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2.5rem)] grid md:grid-cols-[1.2fr_0.8fr]">

        {/* Left column — nav + copy */}
        <div
          className="relative flex flex-col overflow-hidden rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl md:min-h-[calc(100vh-2.5rem)]"
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
          <div className="relative z-10 flex flex-col justify-end flex-1 px-4 md:pl-10 md:pr-32 pt-10 pb-8 md:pt-0 md:pb-11">
            <div className="w-fit">
              <h1 className="text-[2.6rem] sm:text-[2.6rem] md:text-7xl font-semibold text-[#0f172a] leading-[1.05] tracking-tight">
                Recolectar, limpiar y comunicar <span className="logo-comun">datos públicos</span>.
              </h1>
            </div>
            <p className="mt-5 md:mt-6 max-w-xl text-lg md:text-xl text-[#475569] leading-snug">
              Estudio de datos y diseño para que las organizaciones cívicas puedan usarlos y defenderlos ante quien las financia.
            </p>
            <p className="mt-8 md:mt-12 text-base text-[#475569]">Hablemos.</p>
            <a
              href="mailto:edgar@datacomun.com"
              className="cta-border mt-2 inline-flex w-fit items-center gap-3 text-[#0f172a] font-medium text-base border-b-2 pb-1"
            >
              edgar@datacomun.com
            </a>
          </div>
        </div>

        {/* Right column — daily PM2.5 coverage, Observatorio del Aire */}
        <div className="relative flex flex-col overflow-hidden rounded-b-3xl md:rounded-bl-none md:rounded-tr-3xl min-h-[50vh] md:min-h-[calc(100vh-2.5rem)] bg-[#0f172a] px-6 md:px-10 pt-8 md:pt-10 pb-6 md:pb-8">
          <CoverageGrid />
        </div>

      </div>

    </div>
  );
}
