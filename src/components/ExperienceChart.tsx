type ChartItem = {
  label: string;
  from: [number, number];
  to?: [number, number];
};

type ExperienceChartProps = {
  items: ChartItem[];
  className?: string;
};

const toValue = ([year, month]: [number, number]) => year + (month - 1) / 12;

export default function ExperienceChart({ items, className = "" }: ExperienceChartProps) {
  const now = new Date();
  const today = now.getFullYear() + (now.getMonth() + 1) / 12;

  const rows = items.map((item) => ({
    ...item,
    start: toValue(item.from),
    end: item.to ? toValue(item.to) + 1 / 12 : today,
    ongoing: !item.to,
  }));

  const minYear = Math.floor(Math.min(...rows.map((r) => r.start)));
  const maxYear = Math.floor(Math.max(...rows.map((r) => r.end))) + 1;
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
  const pct = (value: number) => ((value - minYear) / (maxYear - minYear)) * 100;

  return (
    <div className={`${className}
      w-full overflow-x-auto
    `}>
      <div className="relative border-b border-t border-edge min-w-xl p-5 my-20 font-mono text-xs">

        <ul className="flex flex-col gap-1 mt-4">
          {rows.map((row) => {
            const left = pct(row.start);
            const right = pct(row.end);

            return (
              <li key={row.label} className="relative h-7">
                <span
                  className={`absolute top-1/2 -translate-y-1/2 h-3 rounded-sm border border-edge
                    ${row.ongoing ? 'bg-linear-to-r from-muted/40 to-muted/10' : 'bg-muted/30'}`}
                  style={{ left: `${left}%`, width: `${right - left}%` }}
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-soft"
                  style={{ right: `calc(${100 - left}% + 8px)` }}
                >
                  {row.label}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="relative my-4 h-8 border-t border-muted">
          {years.map((year) => (
            <div
              key={year}
              className="absolute top-0 flex flex-col items-center -translate-x-1/2"
              style={{ left: `${pct(year)}%` }}
            >
              <span className="w-px h-2 bg-muted" />
              <span className="mt-1 text-muted">{year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
