import Arrow from "../assets/icons/Arrow";
import Line from "../assets/icons/Line";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Home(){


    return(
        <section className="px-5 relative w-screen h-full flex items-center mt-50 flex-col gap-6 pb-100">
            <StarBackground widthBackground={60} heightBackground={50} starCount={40} topOffset={-80}/>
            
            <div className="flex flex-row items-center gap-5">
                <Line classList="mb-0.5"></Line>
                <p className="text-sm text-gradient text-center block">BIENVENIDO SOY</p>
                <Line classList="mb-0.5 rotate-180"></Line>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-gradient md:text-5xl/12 text-center">
                    Maickol Rivera <br />
                </h1>
                <h2 className="typewriter text-gradient text-3xl md:text-4xl/12 text-center">
                    Desarrollador Web
                </h2>


                <p className="text-gradient text-center mt-5 opacity-80 text-sm md:text-lg/5 max-w-[20rem] md:max-w-[26rem]">
                    2 años de experiencia creando soluciones y productos de forma  independiente.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-1">
                <SocialButton Options="document" text={"DESCARGAR CV"} href="/CV_MAICKOL_RIVERA.pdf" download></SocialButton>
            </div>

            <a href="#projects" className="arrow absolute bottom-40" aria-label="projects section">
                <Arrow size="23" className="opacity-50"/>
            </a>
        </section>
    )
}