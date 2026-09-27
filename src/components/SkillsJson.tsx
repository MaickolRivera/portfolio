type SkillsJsonProps = {
  groups: Record<string, string[]>;
};

export default function SkillsJson({ groups }: SkillsJsonProps) {
  const entries = Object.entries(groups);

  return (
    <div className="text-muted">
      <p>{"{"}</p>
      {entries.map(([key, values], i) => (
        <div key={key} className="pl-4 md:pl-6">
          <p>
            <span className="text-muted">"{key}"</span>: [
          </p>
          <p className="pl-4 md:pl-6">
            {values.map((value, j) => (
              <span key={value}>
                <span className="text-main">"{value}"</span>
                {j < values.length - 1 && ", "}
              </span>
            ))}
          </p>
          <p>]{i < entries.length - 1 && ","}</p>
          <br className="block md:hidden"/>
        </div>
      ))}
      <p>{"}"}</p>
    </div>
  );
}
