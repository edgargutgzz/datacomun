const projects = [
  {
    number: "01",
    tags: "Visualización de datos · Salud pública",
    title: "Observatorio del Aire",
    description:
      "Dashboard interactivo de calidad del aire para la Zona Metropolitana de Monterrey. Monitoreo de PM2.5, días insalubres y tendencias por estación.",
    href: "https://www.observatoriodelaire.com/datos",
    image: "/observatorio-del-aire.png",
    imageAlt: "Observatorio del Aire — gráfica de días insalubres por mes",
  },
  {
    number: "02",
    tags: "Mapa interactivo · Tiempo real",
    title: "Aire Claro",
    description:
      "Mapa en tiempo real de sensores de calidad del aire en Monterrey. Integración de datos de Purple Air con visualización geoespacial y recomendaciones de salud.",
    href: "https://www.aireclaro.com/",
    image: "/aire-claro.png",
    imageAlt: "Aire Claro — mapa de sensores de calidad del aire en Monterrey",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f7f4]">

      {/* Header */}
      <header className="flex items-center justify-between px-8 pt-8">
        <span className="text-sm tracking-widest text-[#111111]">data comun</span>
        <a
          href="mailto:hola@datacomun.com"
          className="text-sm tracking-widest text-[#888888] hover:text-[#111111] transition-colors"
        >
          hola@datacomun.com
        </a>
      </header>

      {/* Hero */}
      <section className="flex flex-col justify-end min-h-[80vh] px-8 pb-20">
        <h1 className="text-5xl md:text-8xl font-light text-[#111111] leading-none tracking-tight max-w-4xl">
          Visualizamos datos<br />para el bien<br />común.
        </h1>
        <p className="mt-6 text-sm text-[#888888] tracking-wide">
          Diseño de datos para ciudades, organizaciones y territorios.
        </p>
      </section>

      {/* Work */}
      <section className="px-8 pb-32">
        <div className="flex items-center justify-between border-t border-[#e0ddd8] pt-8 mb-16">
          <span className="text-xs tracking-widest text-[#888888] uppercase">Trabajo reciente</span>
        </div>

        <div className="space-y-24">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl bg-white border border-[#e0ddd8] aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Meta */}
              <div className="flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs tracking-widest text-[#888888] uppercase">{project.tags}</p>
                    <span className="text-xs text-[#888888]">{project.number}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-[#111111] leading-tight">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-sm text-[#111111]">
                  <span className="group-hover:underline underline-offset-4">Ver proyecto</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
