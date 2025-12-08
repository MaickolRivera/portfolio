import { useEffect, useState } from "react";
import SocialButton from "../components/SocialButton";
import { navItems } from "./sub_sections/NavItems";

export default function Header(){

    const [activeSection, setActiveSection] = useState('home');
    const [showButton, setShowButton] = useState(false);

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

            const homeElement = document.getElementById('home');
            if(homeElement){
                const homeBottom = homeElement.offsetTop + homeElement.offsetHeight;
                setShowButton(window.scrollY > homeBottom - 100);
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
        w-[100vw] flex justify-center items-center
        fixed top-0 left-0 z-50 py-3 px-1 gradient-line
        bg-LIGHT-background dark:bg-DARK-background
        md:justify-around">

            <p className="text-sm font-semibold text-DARK-subtext hidden md:block md:w-40 text-center">
                Maickol R.
            </p>

            <ul className="
            flex items-center gap-5 md:gap-12 
            pt-1 pb-1 px-5 md:py-1.5 md:px-12 
            border-1 gradient-menu rounded-xl border-DARK-text/10 dark:border-DARK-border">
                {
                    navItems.map((item) => (
                        <li key={item.id}>
                            <button 
                                onClick={() => scrollToSection(item.id)}
                                className={`text-xs md:text-sm transition-colors duration-200
                                ${activeSection === item.id 
                                    ? 'text-LIGHT-text dark:text-DARK-text' 
                                    : 'text-LIGHT-text/60 dark:text-DARK-unselected'
                                }
                                hover:text-LIGHT-subtext dark:hover:text-DARK-subtext`}
                                aria-label={item.label}
                            >
                                {item.title}
                            </button>
                        </li>
                    ))
                }
            </ul>

            <div
                className={`transition-all duration-300 ${
                    showButton
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-4 pointer-events-none'
                }`}
            >
                <div className="hidden md:flex md:flex-row md:gap-5 md:w-40">
                    <SocialButton 
                        Options="document" 
                        text={"Descargar CV"} 
                        href="/CV_MAICKOL_RIVERA.pdf" 
                        download
                    />
                </div>
            </div>
        </header>
    )
}