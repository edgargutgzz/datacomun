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
          <header className="relative z-10 flex items-center justify-between px-2 md:px-10 py-7">
            <Logo size="text-xl" />
          </header>

          {/* Copy */}
          <div className="relative z-10 flex flex-col justify-end flex-1 px-2 md:px-10 pt-4 pb-12 md:pt-0 md:pb-16">
            <div className="w-fit">
              <h1 className="text-5xl sm:text-5xl md:text-7xl font-semibold text-[#0f172a] leading-[1.05] tracking-tight">
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
      <section className="py-24 md:py-32 bg-[#f9f7f4]">
        <div className="w-full px-3 md:px-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
          <div className="min-w-0 flex flex-wrap items-baseline gap-3">
            <h2 className="text-2xl font-semibold text-[#0f172a] tracking-tight">
              Aire Claro
            </h2>
            <p className="text-sm text-[#475569]">
              Un mapa de la calidad del aire en Nuevo León.
            </p>
          </div>
          <a
            href="https://www.aireclaro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 inline-flex items-center gap-2 text-[#0f172a] text-sm font-medium border-b border-[#0f172a]/40 pb-0.5 hover:border-[#0f172a] transition-colors"
          >
            Ver aireclaro.com →
          </a>
        </div>

        <div className="w-full">
          {/* Bento grid — map + coverage/reach cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* Map — large cell, spans 2 columns and both rows */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden">
              <img
                src="/aire-claro-banner.png"
                alt="Aire Claro — mapa de sensores ciudadanos y estaciones SIMA en Monterrey"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Coverage — light card */}
            <div className="rounded-3xl bg-white border border-[#e0ddd8] p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "152", label: "Sensores Ciudadanos", ringed: false },
                  { value: "16", label: "Estaciones SIMA", ringed: true },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span
                      className={`inline-block w-3 h-3 rounded-full bg-[#0f172a] mb-2 ${stat.ringed ? "ring-2 ring-offset-2 ring-[#0f172a]" : ""}`}
                    />
                    <p className="text-2xl font-semibold text-[#0f172a] tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-[#888888]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reach — light card */}
            <div className="rounded-3xl bg-white border border-[#e0ddd8] p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-semibold text-[#0f172a] tracking-tight">
                  8,000
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#888888]">
                  Visitantes al año
                </p>
              </div>
            </div>
          </div>

          {/* Contact — full-width light card */}
          <div className="mt-4 md:mt-5 rounded-3xl bg-white border border-[#e0ddd8] px-8 py-12 md:py-16 text-center">
            <p className="text-base text-[#475569]">Hablemos de tu proyecto.</p>
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
