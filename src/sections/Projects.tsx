import { ProjectsIcon } from "../assets/icons/UIIcons";
import BuildTerminal from "../components/BuildTerminal";
import StarBackground from "../components/StarBackground";
import ColumnList from "./sub_sections/ColumnList";

export default function Projects(){

    return(
        <section 
        id="projects"
        className="
        flex items-center gap-10 flex-col px-5 w-full relative my-60">

            <StarBackground widthBackground={50} heightBackground={80} starCount={80} topOffset={10}/>

            <div className="flex flex-row items-center gap-4">
                    <ProjectsIcon className="text-subtext/80"/>
                    <h2 className="text-2xl text-center mt-1 text-gradient font-semibold">
                        PROYECTOS
                    </h2>
            </div>

            <BuildTerminal></BuildTerminal>

            <ColumnList/>
        </section>
    )
}