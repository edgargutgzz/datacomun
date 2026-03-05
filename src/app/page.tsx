

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
    <div className="min-h-screen bg-[#f9f7f4]">
      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-10 py-7">
        <span className="text-lg tracking-tight">
          <span className="font-bold" style={{color:"#0f172a"}}>data</span><span className="font-bold" style={{color:"#06b6d4"}}>comun</span>
        </span>
        <nav className="flex items-center gap-10">
          <a href="#work" className="text-sm text-[#888888] hover:text-[#111111] transition-colors">Proyectos</a>
          <a href="/about" className="text-sm text-[#888888] hover:text-[#111111] transition-colors">Nosotros</a>
          <a href="mailto:hola@datacomun.com" className="text-sm text-[#111111] font-medium hover:text-[#06b6d4] transition-colors">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="w-full grid md:grid-cols-[1fr_1.1fr]" style={{minHeight: "calc(100vh - 73px)"}}>

        {/* Left — copy */}
        <div className="flex flex-col justify-center px-10 py-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#0f172a] leading-[1.1] tracking-tight max-w-md">
            Plataformas de datos para organizaciones con impacto social
          </h1>
          <p className="mt-6 text-base text-[#64748b] leading-relaxed max-w-sm">
            Diseñamos plataformas de datos, mapas interactivos y dashboards para organizaciones civiles y de gobierno en México.
          </p>
          <a href="#work" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#0f172a] hover:text-[#06b6d4] transition-colors group">
            Ver proyectos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right — image */}
        <div className="overflow-hidden" style={{maxHeight: "calc(100vh - 73px)"}}>
          <img
            src="/hero.jpg"
            alt="Datacomun — taller de datos con la comunidad"
            className="w-full h-full object-cover object-left"
          />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-8 pb-32">
        <div className="border-t border-[#e0ddd8] mb-16" />

        <div className="space-y-28">
          {projects.map((project) => (
            <div
              key={project.number}
              className="bg-white border border-[#e0ddd8] rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">

                {/* Image */}
                <div className="overflow-hidden aspect-[4/3] border-b md:border-b-0 md:border-r border-[#e0ddd8]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Meta */}
                <div className="flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-xs tracking-widest text-[#888888] uppercase">{project.tags}</p>
                      <span className="text-xs text-[#888888]">{project.number}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light text-[#111111] leading-tight">
                      {project.title}
                    </h2>
                    {"client" in project && (
                      <p className="mt-2 text-xs text-[#888888] tracking-wide">{project.client}</p>
                    )}
                    <p className="mt-5 text-sm text-[#888888] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {"stats" in project && (
                      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#e0ddd8]">
                        {(project.stats as { value: string; label: string }[]).map((stat) => (
                          <div key={stat.label}>
                            <p className="text-xl font-light text-[#111111]">{stat.value}</p>
                            <p className="text-xs text-[#888888] mt-0.5">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-6">
                      {project.href ? (
                        <a
                          href={project.href}
                          {...(project.external && { target: "_blank", rel: "noopener noreferrer" })}
                          className="group/link inline-flex items-center gap-2 text-sm text-[#111111] hover:underline underline-offset-4"
                        >
                          Ver proyecto
                          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm text-[#111111]">
                          Ver proyecto →
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
