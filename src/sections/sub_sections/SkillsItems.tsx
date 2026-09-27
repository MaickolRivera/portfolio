import {
    ReactIcon, TypeScriptIcon, JavaScriptIcon, TailwindIcon, RadixIcon,
    AstroIcon, ThreeJSIcon, PythonIcon, FastAPIIcon,
} from "../../assets/icons/SkillIcons";

// Icons for the skills used in projects (ProjectsItems `stack`), looked up by name
export const SKILL_ICONS: Record<string, React.ReactNode> = {
    "REACT": <ReactIcon />,
    "TYPESCRIPT": <TypeScriptIcon />,
    "JAVASCRIPT": <JavaScriptIcon />,
    "TAILWIND": <TailwindIcon />,
    "RADIX UI": <RadixIcon />,
    "ASTRO": <AstroIcon />,
    "THREE JS": <ThreeJSIcon />,
    "REACT THREE FIBER": <ThreeJSIcon />,
    "PYTHON": <PythonIcon />,
    "FASTAPI": <FastAPIIcon />,
}
