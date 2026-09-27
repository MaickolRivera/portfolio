import { SmallBox, MainBox } from "../../components/BoxContainer";
import RadialGradient from "../../components/RadialGradient";
import Terminal from "../../components/Terminal";
import SkillsJson from "../../components/SkillsJson";
import skillsJson from "./skills.json";

export default function AboutGrid(){
    return(
        <div className="
        grid grid-cols-2 gap-3 h-auto auto-rows-auto
        relative w-full max-w-100
        md:max-w-210 md:px-0 md:grid-cols-4
        ">
    <MainBox 
    className="
    col-span-2
    md:col-start-2 md:row-start-1 md:row-span-2"
    />

    <SmallBox 
    className="md:col-start-1 md:row-start-1"
    title="+1">
        <p className="w-30 text-center text-base/4.5 font-normal text-muted">
            Año de Experiencia
        </p>
    </SmallBox>

    <SmallBox 
    className="md:col-start-4 md:row-start-1" 
    title="B2">
        <p className="font-normal text-muted">
            Nivel de Ingles
        </p>
    </SmallBox>

    <SmallBox 
    className="md:col-start-1 md:row-start-2"
    title="+5">
        <p className="font-normal text-muted">
            Proyectos
        </p>
    </SmallBox>

    <SmallBox 
    className="md:col-start-4 md:row-start-2"
    title="+7">
        <p className="w-36 text-center text-base/4.5 font-normal text-muted">    
            Certificaciones
        </p>
    </SmallBox>

    <Terminal
        className="col-span-2 md:col-span-4 md:row-start-3"
        command="cat skills.json">
        <SkillsJson groups={skillsJson} />
    </Terminal>

    <div className="
    absolute pointer-events-none
    right-0 top-[10%] md:top-[15%] md:right-[77%] ">
        <RadialGradient
            size="500"
            gradient="gradient-radial-project"
        />
    </div>
</div>
    )
}
