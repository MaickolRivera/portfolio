import Line from "../assets/icons/Line";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Contact(){
    return(
        <section id="contact" className="relative flex flex-col justify-center items-center gap-8 pb-95">
            <StarBackground widthBackground={50} heightBackground={50} starCount={40} topOffset={0} />
            
            <div className="flex flex-row items-center gap-5">
                <Line classList="mb-0.5"></Line>
                <p className="text-xs text-gradient text-center">
                    Desarrollado con ❤️ por Maickol Rivera
                </p>
                <Line classList="mb-0.5 rotate-180"></Line>
            </div>

            <h2 className="max-w-[35rem] md:w-[25rem] text-gradient text-4xl text-center font-semibold">
                HABLAME DE TU PROXIMO PROYECTO
            </h2>
            <div className="flex gap-6 mt-1">
                <SocialButton text={"GITHUB"} href="https://github.com/m4icol" target="_black" Options="github" label="Look at my GitHub profile"></SocialButton>
                <SocialButton text={"LINKEDIN"} href="https://www.linkedin.com/in/maickol-rivera/" target="_black" Options="link" label="Look at my LinkedIn profile"></SocialButton>
            </div>
        </section>
    )
}