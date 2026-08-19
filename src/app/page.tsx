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
                Mapas para organizaciones que transforman su <span className="logo-comun">comunidad</span>
              </h1>
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

      {/* Aire Claro */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[21/9]">
            <img
              src="/aire-claro-banner.png"
              alt="Aire Claro — mapa de sensores ciudadanos y estaciones SIMA en Monterrey"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
                Aire Claro
              </h2>
              <p className="mt-2 text-base md:text-lg text-white/85">
                Calidad del aire en tiempo real para Monterrey.
              </p>
              <a
                href="https://www.aireclaro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-white text-sm font-medium border-b border-white/50 pb-0.5 w-fit hover:border-white transition-colors"
              >
                Ver aireclaro.com →
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "152", label: "sensores Purple Air" },
              { value: "16", label: "estaciones SIMA" },
              { value: "16,475", label: "visitantes" },
              { value: "41,201", label: "vistas" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-[#0f172a]">{stat.value}</p>
                <p className="text-xs text-[#888888] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[#e0ddd8]">
            <p className="text-base text-[#475569]">¿Quieres algo así para tu organización?</p>
            <a
              href="mailto:edgar@datacomun.com"
              className="cta-border mt-2 inline-flex items-center gap-3 text-[#0f172a] font-medium text-base border-b-2 pb-1"
            >
              edgar@datacomun.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
