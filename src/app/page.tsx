import Logo from "@/components/Logo";
import GrainOverlay from "@/components/GrainOverlay";
import DotPictogram from "@/components/DotPictogram";

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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-semibold text-[#0f172a] tracking-tight">
            Aire Claro
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#475569]">
            Datos para mejorar la calidad del aire en Nuevo León.
          </p>
          <a
            href="https://www.aireclaro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[#0f172a] text-sm font-medium border-b border-[#0f172a]/40 pb-0.5 hover:border-[#0f172a] transition-colors"
          >
            Ver aireclaro.com →
          </a>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mt-16 rounded-3xl overflow-hidden">
            <img
              src="/aire-claro-banner.png"
              alt="Aire Claro — mapa de sensores ciudadanos y estaciones SIMA en Monterrey"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Coverage pictogram — sensores vs estaciones, drawn to the same scale */}
          <div className="mt-24">
            <DotPictogram
              stats={[
                { value: "152", label: "Sensores Ciudadanos", dots: 76, color: "#06b6d4" },
                { value: "16", label: "Estaciones SIMA", dots: 8, color: "#8b5cf6" },
              ]}
            />
          </div>

          {/* Reach */}
          <div className="mt-16 grid grid-cols-2 divide-x divide-[#e0ddd8] max-w-xs mx-auto">
            {[
              { value: "16,475", label: "Visitantes" },
              { value: "41,201", label: "Vistas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-6">
                <p className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#888888]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About me */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
          <img
            src="/edgar.jpg"
            alt="Edgar Gutiérrez"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shrink-0"
          />
          <div>
            <p className="text-lg md:text-xl text-[#0f172a] leading-relaxed">
              Soy Edgar Gutiérrez. Hago mapas desde Monterrey.
            </p>
            <p className="mt-3 text-base md:text-lg text-[#475569] italic leading-relaxed">
              Llevo tres años construyendo y operando la plataforma del Observatorio del Aire. Todo lo que ves aquí lo hice yo: el diseño, el código y el sistema que corre cada hora detrás del mapa.
            </p>
            <p className="mt-3 text-base md:text-lg text-[#475569] italic leading-relaxed">
              Si trabajas conmigo, trabajas conmigo — no hay equipo intermedio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-10 pb-24 md:pb-32 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto pt-10 border-t border-[#e0ddd8]">
          <p className="text-base text-[#475569]">Hablemos de tu proyecto.</p>
          <a
            href="mailto:edgar@datacomun.com"
            className="cta-border mt-2 inline-flex items-center gap-3 text-[#0f172a] font-medium text-base border-b-2 pb-1"
          >
            edgar@datacomun.com
          </a>
        </div>
      </section>

    </div>
  );
}
