import { BriefcaseIcon } from "../assets/icons/nav_icons/NavIcons";
import RadialGradient from "../components/RadialGradient";
import StarBackground from "../components/StarBackground";
import { experienceItems } from "./sub_sections/ExperienceItems";

export default function Experience(){
    return(
        <section 
        id="experience" 
        className="
        w-screen relative flex flex-col justify-center items-center gap-5 
        pt-20 my-0 md:pt-35 md:my-55">
        
            <StarBackground 
                widthBackground={50} 
                heightBackground={50} 
                starCount={80} 
                topOffset={220} 
                className="rotate-270 left-320 rounded-b-none"
            />
            
            <div  className="flex flex-col justify-center items-center gap-12">
                
                <div  className="flex flex-row items-center gap-3">
                    <BriefcaseIcon size={25} className="text-subtext"></BriefcaseIcon>
                    <h2 className="text-2xl mt-1 text-center text-gradient font-semibold">
                        EXPERIENCIA
                    </h2>
                </div> 

                <ol className="flex flex-col w-full max-w-210">
                    {
                        experienceItems.map((item, index) => {
                            const isCurrent = index === 0;
                            const isLast = index === experienceItems.length - 1;
                            return (
                                <li
                                    key={index}
                                    className="grid grid-cols-[auto_1fr] gap-x-4 md:grid-cols-[6rem_auto_1fr] md:gap-x-6">

                                    <p className="hidden md:block text-xs/5 text-muted text-right">
                                        {item.start}<br />{item.end}
                                    </p>

                                    <div className="relative flex justify-center">
                                        <span className={`relative z-10 mt-0.5 size-4 rounded-full border-2
                                            ${isCurrent ? 'border-main bg-background' : 'border-edge bg-selected'}`}
                                        />
                                        {!isLast && (
                                            <span className={`absolute top-4.5 bottom-0 w-px
                                                ${isCurrent ? 'bg-main' : 'bg-edge'}`}
                                            />
                                        )}
                                    </div>

                                    <div className={isLast ? '' : 'pb-12'}>
                                        <p className="md:hidden text-xs text-muted mb-1">{item.start} – {item.end}</p>
                                        <h3 className="text-base/5 md:text-lg/5 font-semibold text-main">{item.role}</h3>
                                        <p className="text-sm text-muted mt-1">{item.company}</p>

                                        <ul className="
                                        flex flex-col gap-1.5 mt-3 pl-4
                                        list-disc marker:text-muted
                                        text-sm text-subtext text-pretty">
                                            {item.description.map((paragraph, i) => (
                                                <li key={i}>{paragraph}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ol>
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