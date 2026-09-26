import { Arrow } from "../assets/icons/UIIcons";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";
import Terminal from "../components/Terminal";
import { navItems } from "./sub_sections/NavItems";

export default function Home(){

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return(
        <section 
        id="home"
        className="
        flex items-center flex-col gap-4 pb-75
        relative w-screen h-full md:px-5 md:pb-100">

            <StarBackground 
                widthBackground={60} 
                heightBackground={60} 
                starCount={100} 
                topOffset={80} 
            />
            
            <div className="
            w-full max-w-6xl px-6 mt-25 z-10
            flex flex-col gap-5 md:gap-15 lg:gap-40
            md:flex-row md:items-center md:justify-center md:mt-55">

                <div className="flex flex-col items-start gap-5">
                    <div className="
                    flex items-center gap-2 py-1 px-1
                    border rounded-full backdrop-blur-md text-xs
                    bg-glass border-edge text-soft">
                        <span className="relative flex size-2 ml-1.5">
                            <span className="absolute inline-flex size-full rounded-full bg-green-300 opacity-75 animate-ping" />
                            <span className="relative inline-flex size-2 rounded-full bg-green-300" />
                        </span>
                        <p className="pr-2 py-0.5 mt-0.5">Disponible para trabajar</p>
                    </div>

                    <div className="flex flex-col items-start">
                        <h1 className="
                        text-3xl font-semibold 
                        md:text-5xl">
                            MAICKOL RIVERA
                        </h1>

                        <h2 className="
                        typewriter mx-0! font-semibold text-2xl
                        md:text-3xl/11">
                            Desarrollador Web ‎ 
                        </h2>

                        <p className="
                        mt-4 text-subtext text-sm max-w-[20rem] md:max-w-100">
                            Desarrollo aplicaciones web de alto rendimiento con frameworks modernos y sistemas backend limpios — mejorados con experiencia real en datos e IA
                        </p>
                    </div>

                    <SocialButton Options="document" text={"Descargar CV"} href="/CV_MAICKOL_RIVERA.pdf" download/>
                </div>

                <Terminal
                    className="md:max-w-lg mt-5 md:mt-0"
                    lines={[
                        { label: "Correo", value: "msrivera.msro@gmail.com" },
                        { label: "Ubicación", value: "Bogotá D.C. - Colombia" },
                        { label: "Estudiando", value: "Ingeniería de Software" },
                        { label: "Experiencia", value: "Data e Inteligencia Artificial (RAG, LLM)" },
                    ]}
                />
            </div>

            <button 
            className="arrow absolute bottom-50 md:bottom-12 z-10 cursor-pointer"
            onClick={() => scrollToSection(navItems[1].id)}>
                <Arrow size="20" className="opacity-50"/>
            </button>

            <svg 
            width="1642" height="353" viewBox="0 0 1642 353" fill="none" xmlns="http://www.w3.org/2000/svg" 
            className="absolute -bottom-25">
                <ellipse cx="821.5" cy="994.5" rx="996.5" ry="994.5" 
                fill="url(#paint0_linear_553_670)" fillOpacity="0.1"/>
                <defs>
                    <linearGradient id="paint0_linear_553_670" x1="821.5" y1="-29.9661" x2="821.5" y2="1989" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#010101"/>
                        <stop offset="0.0001" stopColor="#DFDBFF"/>
                        <stop offset="0.125" stopColor="#010101" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </section>
    )
}