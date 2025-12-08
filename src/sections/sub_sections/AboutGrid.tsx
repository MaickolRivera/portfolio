import { SmallBox, MainBox, BoxContainer } from "../../components/BoxContainer";
import RadialGradient from "../../components/RadialGradient";
import SkillsPill from "../../components/SkillsPill";
import { BACKEND, FRONTEND, OTHER_SKILLS } from "./SkillsItems";

export default function AboutGrid(){
    return(
        <div className="
grid grid-cols-2 gap-3 h-auto auto-rows-auto
relative px-2 w-full mt-12 max-w-[20rem] 
md:max-w-[65rem] md:px-0 md:grid-cols-4 md:grid-rows-4  
">
    <MainBox 
    className="
    col-span-2 row-start-1
    md:col-start-2 md:row-start-1 md:row-span-2"
    />

    <BoxContainer 
    className="
    col-span-2 row-start-2
    md:col-span-1 md:col-start-1 md:row-start-2 md:row-span-3"
    title="FRONTEND">
        <div className="grid grid-cols-2 gap-2">
            {FRONTEND.map((skill, index) => (
                <SkillsPill 
                    key={index} 
                    icon={skill.icon} 
                    text={skill.text}
                    span={skill.text.length > 5 ? 2 : 1}
                />
            ))}
        </div>
    </BoxContainer>

    <BoxContainer 
    className="
    col-span-2 row-start-3
    md:col-span-1 md:col-start-2 md:row-start-3 md:row-span-2"
    title="BACKEND">
        <div className="grid grid-cols-2 gap-2">
            {BACKEND.map((skill, index) => (
                <SkillsPill 
                    key={index} 
                    icon={skill.icon} 
                    text={skill.text}
                    span={skill.text.length > 7 ? 2 : 1}
                />
            ))}
        </div>
    </BoxContainer>

    <BoxContainer 
    className="
    col-span-2 row-start-4
    md:col-span-1 md:col-start-3 md:row-start-3 md:row-span-2"
    title="OTRAS SKILLS">
        <div className="grid grid-cols-2 gap-2">
            {OTHER_SKILLS.map((skill, index) => (
                <SkillsPill 
                    key={index} 
                    icon={skill.icon} 
                    text={skill.text}
                    span={skill.text.length > 6 ? 2 : 1}
                />
            ))}
        </div>
    </BoxContainer>

    <SmallBox 
    className="
    col-start-1 row-start-5
    md:col-start-1 md:row-start-1"
    title="+5">
        <p className="font-normal text-LIGHT-subtext dark:text-DARK-unselected">
            Proyectos
        </p>
    </SmallBox>

    <SmallBox 
    className="
    col-start-2 row-start-5
    md:col-start-4 md:row-start-1"
    title="+9">
        <p className="w-36 text-center text-base/4.5 font-normal text-LIGHT-subtext dark:text-DARK-unselected">
            Meses de Experiencia
        </p>
    </SmallBox>

    <SmallBox 
    className="
    col-start-1 row-start-6
    md:col-start-4 md:row-start-2"
    title="+2">
        <p className="w-36 text-center text-base/4.5 font-normal text-LIGHT-subtext dark:text-DARK-unselected">    
            Años Desarrollando
        </p>
    </SmallBox>

    <SmallBox 
    className="
    col-start-2 row-start-6
    md:col-start-4 md:row-start-3" 
    title="B1">
        <p className="font-normal text-LIGHT-subtext dark:text-DARK-unselected">
            Nivel de Ingles
        </p>
    </SmallBox>

    <a 
    href="" 
    className="
    relative overflow-hidden 
    col-span-2 row-start-7
    md:col-span-1 md:col-start-4 md:row-start-4">
        <SmallBox title="3">
            <p className="font-normal text-LIGHT-subtext dark:text-DARK-unselected">
               Contribuciones
            </p>
        </SmallBox>
        
        <RadialGradient
            size="300"
            top="20"
            left="-40"
            gradient="gradient-radial-project absolute"
        />
    </a>

    <div className="
    absolute pointer-events-none
    right-0 top-[10%] md:top-[0%] md:right-[70%] ">
        <RadialGradient
            size="400"
            gradient="gradient-radial-project"
        />
    </div>
</div>
    )
}