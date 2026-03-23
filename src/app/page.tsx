import Logo from "@/components/Logo";
import GrainOverlay from "@/components/GrainOverlay";
import ProjectImage from "@/components/ProjectImage";

const projects = [
  {
    number: "01",
    tags: "Visualización de datos · Calidad del Aire",
    title: "OCCAMM",
    subtitle: "Observatorio Ciudadano de la Calidad del Aire",
    client: "OCCAMM",
    description:
      "Plataforma web que visualiza y comunica datos de calidad del aire a través de dashboards, infografías y artículos de investigación.",
    stats: [
      { value: "+5,200", label: "visitantes" },
      { value: "90,000+", label: "mediciones" },
    ],
    href: "https://www.observatoriodelaire.com/",
    images: [
      { src: "/occamm-1.png", alt: "OCCAMM — días insalubres por mes" },
      { src: "/occamm-2.png", alt: "OCCAMM — disponibilidad de datos Monterrey Obispado" },
    ],
  },
];

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
            className="w-full h-full object-cover object-[10%_center]"
          />
          <p className="absolute bottom-3 right-3 text-[10px] text-black/40 tracking-wide">
            © Equipo de documentación LABNL
          </p>
        </div>

      </div>

      {/* Projects */}
      <section className="py-32">
        <h2 className="text-5xl md:text-6xl font-semibold text-[#0f172a] tracking-tight mb-24 px-6 md:px-10 text-center">Nuestro trabajo</h2>
        <div className="flex flex-col gap-32 px-6 md:px-32">
          {projects.map((project, i) => {
            const isEven = i % 2 === 1;
            const isExternal = project.href.startsWith("http");
            return (
              <div
                key={project.number}
                className={`flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden shadow-sm min-h-[560px] ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto shrink-0">
                  <ProjectImage images={project.images} />
                </div>

                {/* Text */}
                <div
                  className="relative w-full md:w-1/2 flex flex-col justify-center px-8 md:px-10 py-10"
                  style={{
                    background: "radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(139,92,246,0.14) 0%, transparent 55%), #f9f7f4",
                  }}
                >
                  <GrainOverlay />
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight leading-tight">
                    {project.title}
                  </h2>
                  <p className="mt-1.5 text-base text-[#888888]">{project.subtitle}</p>
                  <p className="mt-6 text-base text-[#475569] leading-relaxed">{project.description}</p>
                  <div className="mt-8">
                    <a
                      href={project.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="cta-border inline-flex items-center gap-2 text-[#0f172a] font-medium text-sm border-b-2 pb-1"
                    >
                      Ver proyecto
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
