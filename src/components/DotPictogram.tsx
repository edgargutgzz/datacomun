interface Stat {
  value: string;
  label: string;
  dots: number;
  color: string;
}

export default function DotPictogram({
  stats,
  dark = false,
}: {
  stats: Stat[];
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-10">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="flex flex-wrap content-start justify-center gap-1.5 h-[64px] max-w-xs mx-auto">
            {Array.from({ length: stat.dots }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: stat.color }}
              />
            ))}
          </div>
          <p
            className={`mt-3 text-3xl font-semibold tracking-tight ${dark ? "text-white" : "text-[#0f172a]"}`}
          >
            {stat.value}
          </p>
          <p
            className={`mt-1 text-xs uppercase tracking-widest ${dark ? "text-white/60" : "text-[#888888]"}`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
