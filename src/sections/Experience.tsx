import ExperienceIcon from "../assets/icons/section_icons/ExperienceIcon";
import RadialGradient from "../components/RadialGradient";
import StarBackground from "../components/StarBackground";
import { experienceItems } from "./sub_sections/ExperienceItems";

export default function Experience(){
    return(
        <section className="relative flex flex-col justify-center items-center gap-5 my-80">
            <StarBackground 
                widthBackground={50} 
                heightBackground={50} 
                starCount={80} 
                topOffset={220} 
                className="rotate-270 left-[80rem] rounded-b-none"
            />
            
            <div className="flex flex-col justify-center items-center gap-12">
                
                <div className="flex flex-col items-center gap-3">
                    <ExperienceIcon color="gray"></ExperienceIcon>
                    <h2 className="text-2xl text-center text-gradient font-semibold">
                        EXPERIENCIA
                    </h2>
                </div>

                <ul className="flex flex-col gap-12">
                    {
                        experienceItems.map((item, index) => (
                            <li key={index} className="flex justify-center border-l-2 pl-6 border-DARK-unselected">
                                
                                <div className="flex flex-col w-[40.5rem]">
                                    <p className="text-xs dark:text-DARK-unselected">{item.date}</p>
                                    <p className="text-lg dark:text-DARK-text font-semibold mt-1">{item.title}</p>

                                    <div className="text-base text-LIGHT-subtext dark:text-DARK-subtext mt-3 text-pretty">
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

            <div className="
                absolute pointer-events-none
                right-0 top-[10%] md:top-[20%] md:right-[77%] ">
                    <RadialGradient
                        size="600"
                        gradient="gradient-radial-project"
                    />
            </div>
            

        </section>
    )
}