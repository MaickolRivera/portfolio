import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Contact(){
    return(
        <section 
        id="contact" 
        className="
        flex flex-col justify-center items-center gap-8 h-150 pb-40
        relative px-5">
            <StarBackground widthBackground={50} heightBackground={50} starCount={40} topOffset={50} />

            <h2 className="md:w-lg px-10 text-gradient text-4xl text-center font-semibold">
                DISPONIBLE PARA NUEVOS PROYECTOS
            </h2>
            <div className="flex gap-6 mt-1">
                <SocialButton text={"GITHUB"} href="https://github.com/maickolrivera" target="_black" Options="github" label="Look at my GitHub profile"></SocialButton>
                <SocialButton text={"LINKEDIN"} href="https://www.linkedin.com/in/maickol-rivera/" target="_black" Options="link" label="Look at my LinkedIn profile"></SocialButton>
            </div>
        </section>
    )
}