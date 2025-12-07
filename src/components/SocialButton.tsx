import Arrow from "../assets/icons/Arrow";
import Github from "../assets/icons/GitHub";
import Link from "../assets/icons/Link";
import Document from "../assets/icons/Document";

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
      items-center justify-between flex gap-3 flex-row text-sm py-2 px-5
      gradient-menu border-1 rounded-xl border-DARK-text/10 dark:border-DARK-border 
      
      text-LIGHT-text hover:text-LIGHT-subtext 
      dark:text-DARK-unselected dark:hover:text-DARK-text 
      
      hover:text-LIGHT-subtext text-LIGHT-text 
      dark:hover:text-DARK-subtext dark:text-DARK-unselected
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

      {text}
    </a>
  );
}
