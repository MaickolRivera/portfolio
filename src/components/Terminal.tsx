type TerminalLine = {
  label: string;
  value: string;
};

type TerminalProps = {
  user?: string;
  command?: string;
  lines: TerminalLine[];
  className?: string;
};

export default function Terminal({ user = "maickol@portfolio", command = "neofetch", lines, className = "" }: TerminalProps) {
  return (
    <div className={`${className}
      w-full overflow-hidden border rounded-xl font-mono text-xs md:text-sm
      border-line bg-surface
    `}>
      <div className="flex items-center gap-2 px-4 py-3 border-b
        border-line">
        <span className="text-muted">&gt;_</span>
        <p className="font-semibold text-main">{user}</p>
      </div>

      <div className="flex flex-col gap-2 px-4 py-4 text-left">
        <p className="text-soft">
          <span className="text-muted">{user}:~$ </span>
          {command}
        </p>

        {lines.map((line) => (
          <p key={line.label} className="text-soft">
            <span className="text-muted">{line.label}: </span>
            {line.value}
          </p>
        ))}
      </div>
    </div>
  );
}
