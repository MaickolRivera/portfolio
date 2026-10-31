import {
    ReactIcon, TypeScriptIcon, TailwindIcon, RadixIcon,
    ThreeJSIcon, NextIcon, PythonIcon, FastAPIIcon, SupabaseIcon,
    OnnxIcon, DotNetIcon, PostgreSQLIcon, DockerIcon, JWTIcon, CSharpIcon,
} from "../../assets/icons/SkillIcons";
import { Github } from "../../assets/icons/UIIcons";

// Icons for the skills used in projects (ProjectsItems `stack`), looked up by name
export const SKILL_ICONS: Record<string, React.ReactNode> = {
    "REACT": <ReactIcon />,
    "TYPESCRIPT": <TypeScriptIcon />,
    "TAILWIND": <TailwindIcon />,
    "RADIX UI": <RadixIcon />,
    "THREE JS": <ThreeJSIcon />,
    "PYTHON": <PythonIcon />,
    "FASTAPI": <FastAPIIcon />,
    "ONNX": <OnnxIcon />,
    "NEXT.JS": <NextIcon />,
    "SUPABASE": <SupabaseIcon />,
    "GITHUB ACTIONS": <Github className="" />,
    ".NET": <DotNetIcon />,
    "C#": <CSharpIcon />,
    "POSTGRESQL": <PostgreSQLIcon />,
    "DOCKER": <DockerIcon />,
    "JWT": <JWTIcon />,
}
