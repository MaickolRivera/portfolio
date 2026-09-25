import ExperienceIcon from "../assets/icons/section_icons/ExperienceIcon";
import RadialGradient from "../components/RadialGradient";
import StarBackground from "../components/StarBackground";
import { experienceItems } from "./sub_sections/ExperienceItems";

export default function Experience(){
    return(
        <section 
        id="experience" 
        className="
        w-screen relative flex flex-col justify-center items-center gap-5 
        pt-25 my-50 md:pt-35 md:my-55">
        
            <StarBackground 
                widthBackground={50} 
                heightBackground={50} 
                starCount={80} 
                topOffset={220} 
                className="rotate-270 left-320 rounded-b-none"
            />
            
            <div  className="flex flex-col justify-center items-center gap-12">
                
                <div  className="flex flex-col items-center gap-3">
                    <ExperienceIcon color="gray"></ExperienceIcon>
                    <h2 className="text-2xl text-center text-gradient font-semibold">
                        EXPERIENCIA
                    </h2>
                </div> 

                <ul className="flex flex-col gap-12 px-8 md:px-0">
                    {
                        experienceItems.map((item, index) => (
                            <li key={index} className="flex justify-center border-l-2 pl-6 border-muted">
                                
                                <div className="flex flex-col md:w-162">
                                    <p className="text-xs text-muted">{item.date}</p>
                                    <p className="text-base md:text-lg text-main font-semibold mt-1">{item.title}</p>

                                    <div className="text-sm md:text-base text-subtext mt-3 text-pretty">
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
                absolute pointer-events-none opacity-50
                right-0 top-[10%] md:top-[20%] md:right-[77%] ">
                    <RadialGradient
                        size="800"
                        gradient="gradient-radial-project"
                    />
            </div>
            

        </section>
    )
}