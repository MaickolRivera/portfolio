import {
    ReactIcon, TypeScriptIcon, JavaScriptIcon, TailwindIcon, RadixIcon,
    AstroIcon, ThreeJSIcon, NextIcon, PythonIcon, FastAPIIcon, SupabaseIcon,
    OnnxIcon,
} from "../../assets/icons/SkillIcons";
import { Github } from "../../assets/icons/UIIcons";

// Icons for the skills used in projects (ProjectsItems `stack`), looked up by name
export const SKILL_ICONS: Record<string, React.ReactNode> = {
    "REACT": <ReactIcon />,
    "TYPESCRIPT": <TypeScriptIcon />,
    "JAVASCRIPT": <JavaScriptIcon />,
    "TAILWIND": <TailwindIcon />,
    "RADIX UI": <RadixIcon />,
    "ASTRO": <AstroIcon />,
    "THREE JS": <ThreeJSIcon />,
    "PYTHON": <PythonIcon />,
    "FASTAPI": <FastAPIIcon />,
    "ONNX": <OnnxIcon />,
    "NEXT.JS": <NextIcon />,
    "SUPABASE": <SupabaseIcon />,
    "GITHUB ACTIONS": <Github className="" />,
}
