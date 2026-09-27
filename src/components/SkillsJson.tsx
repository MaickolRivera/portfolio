type SkillsJsonProps = {
  groups: Record<string, string[]>;
};

export default function SkillsJson({ groups }: SkillsJsonProps) {
  const entries = Object.entries(groups);

  return (
    <div className="text-muted">
      <p>{"{"}</p>
      {entries.map(([key, values], i) => (
        <p key={key} className="pl-4 md:pl-6">
          <span className="text-main">"{key}"</span>: [
          {values.map((value, j) => (
            <span key={value}>
              <span className="text-soft">"{value}"</span>
              {j < values.length - 1 && ", "}
            </span>
          ))}
          ]{i < entries.length - 1 && ","}
        </p>
      ))}
      <p>{"}"}</p>
    </div>
  );
}
