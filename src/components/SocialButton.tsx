import { Arrow, Github, Link, Document } from "../assets/icons/UIIcons";

type Options = "github" | "link" | "arrow" | "document"

type SocialButtonProps = {
  text: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  Options?: Options;
  label?: string;
  className?: string;
};

export default function SocialButton({
  text = "",
  href = "#",
  download,
  target = "",
  Options = "arrow",
  label = "[read more...]",
  className = ""
}: SocialButtonProps) {
  return (
    <a
      href={href}
      className={` ${className} 
      items-center justify-between flex gap-3 flex-row text-xs px-4 py-2
      gradient-menu border rounded-full 
      
      border-edge 
      
      text-soft hover:text-main 
       `
      }
      target={target}
      rel="noopener noreferrer"
      aria-label={label}
      {...(download ? { download } : {})}
    >
      
        {
          Options === "arrow" ? (
            <Arrow  />
          ) : Options === "github" ? (
            <Github  />
          ) : Options === "link" ? (
            <Link  />
          ) : Options === "document" ? (
            <Document />
          ) : null
        }

      <p className="pt-0.5">
        {text}
      </p>
    </a>
  );
}
