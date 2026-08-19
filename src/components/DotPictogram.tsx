interface Stat {
  value: string;
  label: string;
  dots: number;
  color: string;
}

export default function DotPictogram({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="flex flex-wrap content-start justify-center gap-1.5 h-[88px] max-w-md mx-auto">
            {Array.from({ length: stat.dots }).map((_, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: stat.color }}
              />
            ))}
          </div>
          <p className="mt-4 text-4xl font-semibold text-[#0f172a] tracking-tight">
            {stat.value}
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-[#888888]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
