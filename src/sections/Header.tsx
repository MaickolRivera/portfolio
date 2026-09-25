import { useEffect, useState, type ReactNode } from "react";
import { navItems } from "./sub_sections/NavItems";
import Moon from "../assets/icons/switch_icons/Moon";
import Sun from "../assets/icons/switch_icons/Sun";
import { HomeIcon, BriefcaseIcon, GridIcon, UserIcon, MailIcon } from "../assets/icons/nav_icons/NavIcons";
import type { ThemeKey, LangKey } from "../types";


const navIcons: Record<string, ReactNode> = {
    "home": <HomeIcon size={15} />,
    "experience": <BriefcaseIcon size={15} />,
    "projects": <GridIcon size={15} />,
    "about-me": <UserIcon size={15} />,
    "contact": <MailIcon size={15} />,
};

export default function Header(){

    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState<ThemeKey>("dark");
    const [lang, setLang] = useState<LangKey>("es");

    useEffect(() => {
        const storageTheme = (localStorage.getItem("theme") || "dark") as ThemeKey;
        setTheme(storageTheme);
        document.documentElement.classList.toggle("dark", storageTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme: ThemeKey = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    const toggleLang = () => {
        setLang(lang === "es" ? "en" : "es");
    };

    useEffect(()=> {
        const handleScroll = () =>{
            const sections = ['home', 'experience', 'projects', 'about-me', 'contact']
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections){
                const element = document.getElementById(section);
                if(element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if(scrollPosition >= offsetTop && scrollPosition < offsetBottom){
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return(
        <header className="
        w-screen flex justify-center items-center
        fixed top-0 left-0 z-50 py-2 pointer-events-none">

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[calc(100%+1.5rem)] -z-10
                bg-linear-to-b from-LIGHT-background via-LIGHT-background/80 to-transparent
                dark:from-DARK-background dark:via-DARK-background/80
                backdrop-blur-[2px]
                mask-[linear-gradient(to_bottom,black_10%,transparent)]"
            />

            <nav className="pointer-events-auto
            flex items-center gap-1 py-1 px-1.5
            border rounded-full backdrop-blur-md
            bg-LIGHT-button/70 border-DARK-text/10
            dark:bg-DARK-button/80 dark:border-DARK-border
            shadow-lg shadow-black/20">
                <ul className="flex items-center gap-0.5 md:gap-1">
                    {
                        navItems.map((item) => {
                            const isHome = item.id === "home";
                            const isActive = activeSection === item.id;
                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center gap-2 rounded-full text-xs md:text-sm
                                        transition-colors duration-200 cursor-pointer
                                        ${isHome ? 'p-2' : 'p-2 md:px-3 md:py-1.5'}
                                        ${isActive
                                            ? 'bg-LIGHT-selected/70 text-LIGHT-text dark:bg-DARK-text/10 dark:text-DARK-text'
                                            : 'text-LIGHT-text/60 dark:text-DARK-unselected hover:text-LIGHT-text dark:hover:text-DARK-text'
                                        }`}
                                        aria-label={item.label}
                                        title={item.title}
                                    >
                                        {navIcons[item.id]}
                                        {!isHome && (
                                            <span className="hidden md:inline pt-0.5">
                                                {item.title}
                                            </span>
                                        )}
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>

                <span className="w-px h-5 mx-1 bg-LIGHT-text/15 dark:bg-DARK-border" aria-hidden="true" />

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full cursor-pointer transition-colors duration-200
                    text-LIGHT-text/60 hover:text-LIGHT-text dark:text-DARK-unselected dark:hover:text-DARK-text"
                    aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
                >
                    {theme === "dark" ? <Sun size={15} /> : <Moon size={14} />}
                </button>

                <button
                    onClick={toggleLang}
                    className="flex items-center pl-1 pr-3 rounded-full cursor-pointer transition-colors duration-200
                    text-xs font-semibold uppercase
                    text-LIGHT-text/60 hover:text-LIGHT-text dark:text-DARK-unselected dark:hover:text-DARK-text"
                    aria-label="Cambiar idioma"
                    title="Change Language"
                >
                    {lang}
                </button>
            </nav>
        </header>
    )
}