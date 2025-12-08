import Arrow from "../assets/icons/Arrow";
import Line from "../assets/icons/Line";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Home(){

    return(
        <section className="
        flex items-center flex-col gap-4
        relative w-screen h-full mt-55 px-5 pb-100">

            <StarBackground 
                widthBackground={60} 
                heightBackground={60} 
                starCount={160} 
                topOffset={-80} 
            />
            
            <div className="flex flex-row items-center gap-5">
                <Line></Line>
                <p className="text-lg text-gradient text-center block">
                    Bienvenido
                </p>
                <Line classList="rotate-180"></Line>
            </div>

            <div className="flex flex-col items-center">
                
                <h1 className="
                text-4xl tracking-wide font-semibold text-gradient text-center
                md:text-4xl">
                    MAICKOL RIVERA <br />
                </h1>
                
                <h2 className="
                typewriter text-center text-gradient text-3xl 
                md:text-4xl/11">
                    Desarrollador Web
                </h2>

                <p className="
                mt-4 opacity-80 text-gradient text-center text-sm max-w-[20rem] 
                md:text-md/6 md:max-w-[30rem]">
                    +2 años de experiencia creando Software. 
                    <br/> Especializado en el desarrollo de aplicaciones web.
                </p>
            </div>

            <div className="
            hidden 
            md:flex md:flex-row md:gap-5 md:w-40 md:mt-5">
                    <SocialButton 
                        Options="document" 
                        text={"Descargar CV"} 
                        href="/CV_MAICKOL_RIVERA.pdf"
                        className="py-2.5" 
                        download
                    />
            </div>

            <a 
            href="#projects" 
            aria-label="projects section"
            className="arrow absolute bottom-10"> 
                <Arrow 
                size="23" 
                className="opacity-50"/>
            </a>

            <svg 
            width="1642" height="353" viewBox="0 0 1642 353" fill="none" xmlns="http://www.w3.org/2000/svg" 
            className="absolute bottom-[-80px]">
                <ellipse cx="821.5" cy="994.5" rx="996.5" ry="994.5" 
                fill="url(#paint0_linear_553_670)" fill-opacity="0.1"/>
                <defs>
                    <linearGradient id="paint0_linear_553_670" x1="821.5" y1="-29.9661" x2="821.5" y2="1989" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#010101"/>
                        <stop offset="0.0001" stop-color="#DFDBFF"/>
                        <stop offset="0.125" stop-color="#010101" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </section>
    )
}