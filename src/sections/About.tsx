import { UserIcon } from "../assets/icons/nav_icons/NavIcons";
import StarBackground from "../components/StarBackground";
import AboutGrid from "./sub_sections/AboutGrid";

export default function About(){
    return(
        <section 
        id="about-me"
        className="
        flex items-center flex-col gap-3
        w-full px-5 relative pt-25 my-60
        md:pt-30">

            <div className="flex flex-row items-center gap-4">
                <UserIcon size={25} className="text-subtext/80"/>
                <h2 className="text-2xl mt-1 text-center text-gradient font-semibold">
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