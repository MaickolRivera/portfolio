import { UserIcon } from "../assets/icons/NavIcons";
import StarBackground from "../components/StarBackground";
import AboutGrid from "./sub_sections/AboutGrid";

export default function About(){
    return(
        <section 
        id="about-me"
        className="
        flex items-center flex-col gap-12
        w-full px-5 relative my-60">

            <div className="flex flex-row items-center gap-4">
                <UserIcon size={25} className="text-subtext/80"/>
                <h2 className="text-2xl mt-1 text-center text-gradient font-semibold">
                    SOBRE MI
                </h2>
            </div>

            <AboutGrid></AboutGrid>

            <StarBackground widthBackground={60} heightBackground={60} starCount={40} topOffset={80} />

        </section>
    )
}