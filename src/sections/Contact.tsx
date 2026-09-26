import { Line } from "../assets/icons/UIIcons";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Contact(){
    return(
        <section 
        id="contact" 
        className="
        flex flex-col justify-center items-center gap-8 
        relative pb-95 pt-80 px-5 
        md:pt-100">
            <StarBackground widthBackground={50} heightBackground={50} starCount={40} topOffset={0} />
            
            <div className="flex flex-row items-center gap-2 md:gap-5">
                <Line classList="mb-0.5 w-10 md:w-auto"></Line>
                <p className="text-xs text-gradient text-center">
                    Desarrollado con ❤️ por Maickol Rivera
                </p>
                <Line classList="mb-0.5 w-10 md:w-auto rotate-180"></Line>
            </div>

            <h2 className="md:w-[32rem] px-10 text-gradient text-4xl text-center font-semibold">
                HABLAME DE TU PROXIMO PROYECTO
            </h2>
            <div className="flex gap-6 mt-1">
                <SocialButton text={"GITHUB"} href="https://github.com/m4icol" target="_black" Options="github" label="Look at my GitHub profile"></SocialButton>
                <SocialButton text={"LINKEDIN"} href="https://www.linkedin.com/in/maickol-rivera/" target="_black" Options="link" label="Look at my LinkedIn profile"></SocialButton>
            </div>
        </section>
    )
}