import Logo from "@/components/Logo";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <div className="px-4 md:px-6 pt-3 md:pt-5">

      {/* Hero — split screen */}
      <div className="min-h-screen grid md:grid-cols-[1.2fr_0.8fr]">

        {/* Left column — nav + copy */}
        <div
          className="relative flex flex-col overflow-hidden rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl md:min-h-screen"
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
          <div className="relative z-10 flex flex-col justify-end flex-1 px-4 md:px-10 pt-10 pb-12 md:pt-0 md:pb-16">
            <div className="w-fit">
              <h1 className="text-[2.6rem] sm:text-[2.6rem] md:text-7xl font-semibold text-[#0f172a] leading-[1.05] tracking-tight">
                Mapas para organizaciones que transforman su <span className="logo-comun">comunidad</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative overflow-hidden rounded-b-3xl md:rounded-bl-none md:rounded-tr-3xl min-h-[50vh] md:min-h-screen">
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

      {/* Aire Claro */}
      <section className="pt-14 pb-14 md:pt-32 md:pb-20 bg-[#f9f7f4]">
        <div className="w-full px-3 md:px-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
          <div className="min-w-0 flex flex-wrap items-center gap-3">
            <h2>
              <img
                src="/aire-claro-logo.png"
                alt="Aire Claro"
                className="h-6 md:h-7 w-auto"
              />
            </h2>
            <p className="text-base text-[#475569]">
              Un mapa que visualiza la calidad del aire en la Zona Metropolitana de Monterrey.
            </p>
          </div>
          <a
            href="https://www.aireclaro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 inline-flex items-center gap-2 text-[#0f172a] text-base font-medium border-b border-[#0f172a]/40 pb-0.5 hover:border-[#0f172a] transition-colors"
          >
            Ver aireclaro.com →
          </a>
        </div>

        <div className="w-full">
          <div className="rounded-3xl overflow-hidden h-[380px] md:h-[460px]">
            <img
              src="/aire-claro-banner.png"
              alt="Aire Claro — mapa de sensores ciudadanos y estaciones SIMA en Monterrey"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Contact — same treatment as hero banner */}
        <div
          className="relative overflow-hidden rounded-3xl mt-14 md:mt-32 px-8 py-12 md:py-24 text-center"
          style={{
            background: "radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(139,92,246,0.14) 0%, transparent 55%), #f9f7f4",
          }}
        >
          <GrainOverlay />
          <div className="relative z-10">
            <p className="text-base text-[#475569]">Hablemos de tu proyecto</p>
            <a
              href="mailto:edgar@datacomun.com"
              className="cta-border mt-2 inline-flex items-center gap-3 text-[#0f172a] font-medium text-lg border-b-2 pb-1"
            >
              edgar@datacomun.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
