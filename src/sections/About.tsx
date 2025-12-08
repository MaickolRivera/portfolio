import AboutCode from "../assets/icons/section_icons/AboutIcon";
import StarBackground from "../components/StarBackground";
import AboutGrid from "./sub_sections/AboutGrid";

export default function About(){
    return(
        <section className="flex items-center flex-col gap-3 w-full px-5 my-80 relative">

            <div className="flex flex-col items-center gap-3">
                <AboutCode color="gray"/>
                <h2 className="text-2xl text-center text-gradient font-semibold">
                    SOBRE MI
                </h2>
            </div>

             <p className="max-w-[20rem] md:max-w-[28rem] text-sm text-gradient text-center opacity-80 md:text-base/5">
                Comencé mi trayectoria con el Desarrollo de Software a los
                17 años, acumulando experiencia en diversos proyectos
            </p>

            <AboutGrid></AboutGrid>

            <StarBackground widthBackground={60} heightBackground={60} starCount={40} topOffset={80} />

        </section>
    )
}