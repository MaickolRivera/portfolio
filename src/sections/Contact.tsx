import { useTranslation } from "react-i18next";
import SocialButton from "../components/SocialButton";
import StarBackground from "../components/StarBackground";

export default function Contact(){

    const { t } = useTranslation()
    
    return(
        <section 
        id="contact" 
        className="
        flex flex-col justify-center items-center gap-8 h-150 pb-50
        relative px-5">
            <StarBackground widthBackground={50} heightBackground={50} starCount={40} topOffset={50} />

            <h2 className="md:w-lg px-16 text-gradient text-4xl text-center font-semibold">
                {t("contact.title")}
            </h2>
            <div className="flex gap-6">
                <SocialButton text={"GITHUB"} href="https://github.com/maickolrivera" target="_black" Options="github" label={t("contact.githubLabel")}></SocialButton>
                <SocialButton text={"LINKEDIN"} href="https://www.linkedin.com/in/maickol-rivera/" target="_black" Options="link" label={t("contact.githubLabel")}></SocialButton>
            </div>
        </section>
    )
}