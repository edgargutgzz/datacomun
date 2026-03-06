import Logo from "@/components/Logo";
import GrainOverlay from "@/components/GrainOverlay";

const projects = [
  {
    number: "01",
    tags: "Visualización de datos · Calidad del Aire",
    title: "Observatorio del Aire",
    client: "OCCAMM · Monterrey, México",
    description:
      "Los datos de calidad del aire en Monterrey eran públicos pero ilegibles. Desarrollamos la plataforma completa — sitio web, secciones de proyectos y publicaciones, y un dashboard de datos que traduce más de 90,000 mediciones de SINAICA en algo legible para cualquier ciudadano: ¿cuántos días al año respiras aire insalubre?",
    stats: [
      { value: "+5,200", label: "visitantes" },
      { value: "15", label: "estaciones" },
      { value: "90,000+", label: "mediciones" },
    ],
    href: "https://www.observatoriodelaire.com/datos",
    external: true,
    image: "/observatorio-del-aire.png",
    imageAlt: "Observatorio del Aire — gráfica de días insalubres por mes",
  },
  {
    number: "02",
    tags: "Mapa interactivo · Tiempo real",
    title: "Aire Claro",
    client: "OCCAMM · Monterrey, México",
    description:
      "Las estaciones oficiales miden el historial — pero no te dicen qué hacer ahora. Aire Claro es un mapa en tiempo real de más de 50 sensores ciudadanos Purple Air distribuidos por la ZMM, con recomendaciones de salud basadas en el Índice de Calidad del Aire.",
    stats: [
      { value: "+9,500", label: "visitantes" },
      { value: "50+", label: "sensores" },
      { value: "2M+", label: "mediciones" },
    ],
    href: "https://www.aireclaro.com/",
    external: true,
    image: "/aire-claro.png",
    imageAlt: "Aire Claro — mapa de sensores de calidad del aire en Monterrey",
  },
  {
    number: "03",
    tags: "Cartografía · Género y territorio",
    title: "Territoria",
    client: "Georregias · Monterrey, México",
    description:
      "Los reportes oficiales de violencia de género en Monterrey no reflejaban lo que las mujeres vivían en la calle. Construimos un mapa interactivo con 4 capas de datos — reportes 911, encuestas ciudadanas, zonas de riesgo y zonas seguras — para comparar el dato oficial con la experiencia real de quienes transitan la ciudad.",
    stats: [
      { value: "4", label: "capas de datos" },
      { value: "2", label: "fuentes" },
      { value: "ZMM", label: "cobertura" },
    ],
    href: "/georregias",
    external: true,
    image: "/georregias.jpg",
    imageAlt: "Georregias — presentación del mapa Datos + Territorio",
  },
];

export default function Home() {
  return (
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
              Somos un estudio de visualización de datos y cartografía que convierte información compleja en herramientas claras y accionables.
            </p>
          </div>
          <div className="mt-12 md:mt-16">
            <p className="text-xs text-[#888888] uppercase tracking-widest mb-2">¿Trabajamos juntos?</p>
            <a
              href="mailto:hola@datacomun.com"
              className="cta-border group inline-flex items-center gap-3 text-[#0f172a] font-medium text-base md:text-lg border-b-2 pb-1 hover:tracking-wide transition-all duration-300"
            >
              hola@datacomun.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right column — image */}
      <div className="overflow-hidden min-h-[50vh] md:min-h-screen">
        <img
          src="/hero.jpg"
          alt="Datacomun — taller de datos con la comunidad"
          className="w-full h-full object-cover object-[10%_center]"
        />
      </div>

    </div>
  );
}
