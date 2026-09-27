export type Project = {
    title: string;
    description: string;
    img: string;
    /** Smaller variants of `img` for responsive loading, e.g. "/a-640.webp 640w, /a-1200.webp 1200w" */
    srcSet?: string;
    repository: string;
    link: string;
  };

export type ThemeKey = "light" | "dark";
export type LangKey = "es" | "en";