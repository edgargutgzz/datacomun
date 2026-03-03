const projects = [
  {
    number: "01",
    tags: "Visualización de datos · Salud pública",
    title: "Observatorio del Aire",
    client: "OCCAMM · Monterrey, México",
    description:
      "Los datos de calidad del aire en Monterrey eran públicos pero ilegibles. Construimos un dashboard interactivo que traduce más de 90,000 mediciones históricas de SINAICA en algo que cualquier ciudadano puede entender: ¿cuántos días al año respiras aire insalubre?",
    stats: [
      { value: "+5,200", label: "visitantes" },
      { value: "15", label: "estaciones" },
      { value: "90,000+", label: "mediciones" },
    ],
    href: "https://www.observatoriodelaire.com/datos",
    image: "/observatorio-del-aire.png",
    imageAlt: "Observatorio del Aire — gráfica de días insalubres por mes",
  },
  // {
  //   number: "02",
  //   tags: "Mapa interactivo · Tiempo real",
  //   title: "Aire Claro",
  //   description:
  //     "Mapa en tiempo real de sensores de calidad del aire en Monterrey. Integración de datos de Purple Air con visualización geoespacial y recomendaciones de salud.",
  //   href: "https://www.aireclaro.com/",
  //   image: "/aire-claro.png",
  //   imageAlt: "Aire Claro — mapa de sensores de calidad del aire en Monterrey",
  // },
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
        <div className="border-t border-[#e0ddd8] mb-16" />

        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-[#e0ddd8] rounded-2xl overflow-hidden hover:border-[#c8c4be] transition-colors duration-300"
            >
              <div className="grid md:grid-cols-2">

                {/* Image */}
                <div className="overflow-hidden aspect-[4/3] border-b md:border-b-0 md:border-r border-[#e0ddd8]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
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
                    <div className="mt-6 flex items-center gap-2 text-sm text-[#111111]">
                      <span className="group-hover:underline underline-offset-4">Ver proyecto</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
