import ExperienceIcon from "../assets/icons/section_icons/ExperienceIcon";
import StarBackground from "../components/StarBackground";
import { experienceItems } from "./sub_sections/ExperienceItems";

export default function Experience(){
    return(
        <section id="experience" className="relative flex flex-col justify-center items-center gap-5 mt-35">
            <StarBackground widthBackground={50} heightBackground={50} starCount={40} topOffset={0} />
            
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col items-center gap-2.5">
                    <ExperienceIcon color="white"></ExperienceIcon>
                    <h2 className="text-2xl text-center text-DARK-subtext font-semibold">
                        EXPERIENCIA
                    </h2>
                </div>

                <ul className="flex flex-col gap-12">
                    {
                        experienceItems.map((item, index) => (
                            <li key={index} className="flex justify-center">
                                <div className="flex flex-col w-[40.5rem]">
                                    <p className="text-sm text-DARK-unselected">{item.date}</p>
                                    <p className="text-lg text-DARK-text font-semibold">{item.title}</p>

                                    <div className="text-base text-DARK-subtext mt-3 text-pretty">
                                        {item.description.map((paragraph, i) => (
                                            <p key={i} className="mb-2">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div>
            

        </section>
    )
}