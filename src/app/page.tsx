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
          <div className="rounded-2xl overflow-hidden border border-[#e0ddd8]">
            <img
              src="/aire-claro-banner.png"
              alt="Aire Claro — mapa de sensores ciudadanos y estaciones SIMA en Monterrey"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#0f172a] tracking-tight">
                Aire Claro
              </h2>
              <p className="mt-3 text-base text-[#475569] leading-relaxed max-w-xl">
                Las estaciones oficiales de SIMA son pocas y no reflejan lo que respira cada colonia. Diseñamos, construimos y operamos esta plataforma para el Observatorio Ciudadano de la Calidad del Aire (OCCAMM), combinando sensores ciudadanos con datos oficiales en un solo mapa en tiempo real, con recomendaciones de salud para población general, niños, adultos mayores, mujeres embarazadas y personas con condiciones cardiovasculares o respiratorias.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
                {[
                  { value: "152", label: "sensores Purple Air" },
                  { value: "16", label: "estaciones SIMA" },
                  { value: "16,475", label: "visitantes" },
                  { value: "41,201", label: "vistas" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-semibold text-[#0f172a]">{stat.value}</p>
                    <p className="text-xs text-[#888888] mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://www.aireclaro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-border inline-flex items-center gap-3 text-[#0f172a] font-medium text-base border-b-2 pb-1 shrink-0"
            >
              Ver aireclaro.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
