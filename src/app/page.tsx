import Image from "next/image";
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
                Una plataforma de datos abiertos para transformar tu <span className="logo-comun">comunidad</span>
              </h1>
            </div>
            <p className="mt-8 md:mt-16 text-base text-[#475569]">Hablemos.</p>
            <a
              href="mailto:edgar@datacomun.com"
              className="cta-border mt-2 inline-flex w-fit items-center gap-3 text-[#0f172a] font-medium text-base border-b-2 pb-1"
            >
              edgar@datacomun.com
            </a>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative overflow-hidden rounded-b-3xl md:rounded-bl-none md:rounded-tr-3xl min-h-[50vh] md:min-h-[calc(100vh-2.5rem)]">
          <Image
            src="/hero.jpg"
            alt="datacomun — taller de datos con la comunidad"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover object-[45%_center]"
          />
          <div className="absolute inset-x-0 bottom-3 px-5 flex items-center justify-between gap-3 text-[10px] text-black/40 tracking-wide">
            <p className="truncate">Edgar Gutiérrez · datacomun</p>
            <p className="truncate text-right">Fotografía: Equipo de documentación LABNL</p>
          </div>
        </div>

      </div>

      {/* Everything below the hero stays contained — full-bleed text on a wide
          monitor reads as unanchored, "floating" content */}
      <div className="max-w-6xl mx-auto">

        {/* Trust line — method + proof, plain and factual */}
        <div className="px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 text-sm text-[#475569]">
          <p>La misma persona lo diseña, lo construye y lo opera. No hay traspasos.</p>
          <p className="text-[#94a3b8]">3 años operando · +16,000 personas al año · Monterrey</p>
        </div>

        {/* Caso: Observatorio del Aire */}
        <section className="px-4 md:px-6 pt-6 pb-14 md:pb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Image
              src="/observatorio-del-aire-logo.png"
              alt="Observatorio del Aire"
              width={1633}
              height={302}
              className="h-6 md:h-7 w-auto"
            />
            <a
              href="https://www.observatoriodelaire.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#475569] border-b border-[#475569]/40 hover:border-[#475569] transition-colors pb-0.5"
            >
              observatoriodelaire.com →
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#e0ddd8]">
            <Image
              src="/occamm-mapa.png"
              alt="Observatorio del Aire — mapa en tiempo real con panel de calidad del aire y tendencia de 48 horas"
              width={2000}
              height={1087}
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 mt-10">
            <div>
              <p className="text-xs uppercase tracking-wide text-[#94a3b8] mb-2">Qué hace</p>
              <p className="text-[#0f172a]">
                Reconcilia 152 sensores ciudadanos y 16 estaciones oficiales del SIMA en un mapa de calidad del aire en tiempo real, con histórico, análisis y descargas.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#94a3b8] mb-2">Desde cuándo</p>
              <p className="text-[#0f172a]">
                En operación continua desde 2023. Sin interrupciones, sin traspasos.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#94a3b8] mb-2">Quién lo usa</p>
              <p className="text-[#0f172a]">
                ~16,500 visitantes al año, ~41,000 vistas. Enlazado por sitios municipales, citado por medios locales.
              </p>
            </div>
          </div>

          {/* Cómo empezamos — una línea, no un diagrama */}
          <p className="mt-10 md:mt-14 text-sm text-[#94a3b8]">
            Los proyectos empiezan con una primera versión en vivo, en unas semanas.
          </p>
        </section>

      </div>

    </div>
  );
}
