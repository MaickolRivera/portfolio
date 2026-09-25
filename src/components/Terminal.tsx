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
      border-LIGHT-subtext/20 bg-LIGHT-selected/20
      dark:border-DARK-subtext/20 dark:bg-DARK-selected/40
    `}>
      <div className="flex items-center gap-2 px-4 py-3 border-b
        border-LIGHT-subtext/20 dark:border-DARK-subtext/20">
        <span className="text-LIGHT-subtext dark:text-DARK-unselected">&gt;_</span>
        <p className="font-semibold text-LIGHT-text dark:text-DARK-text">{user}</p>
      </div>

      <div className="flex flex-col gap-2 px-4 py-4 text-left">
        <p className="text-LIGHT-text dark:text-DARK-subtext">
          <span className="text-LIGHT-subtext dark:text-DARK-unselected">{user}:~$ </span>
          {command}
        </p>

        {lines.map((line) => (
          <p key={line.label} className="text-LIGHT-text dark:text-DARK-subtext">
            <span className="text-LIGHT-subtext dark:text-DARK-unselected">{line.label}: </span>
            {line.value}
          </p>
        ))}
      </div>
    </div>
  );
}
