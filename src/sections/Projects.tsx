import ProjectsCode from "../assets/icons/section_icons/ProjectsIcon";
import StarBackground from "../components/StarBackground";
import ColumnList from "./sub_sections/ColumnList";

export default function Projects(){

    return(
        <section 
        id="projects"
        className="
        flex items-center gap-10 flex-col 
        px-5 w-full relative pt-25 my-60
        md:pt-40">

            <div className="flex flex-row items-center gap-4">
                    <ProjectsCode className="text-subtext/80"/>
                    <h2 className="text-2xl text-center mt-1 text-gradient font-semibold">
                        PROYECTOS
                    </h2>
            </div>

            <ColumnList/>
            <StarBackground widthBackground={70} heightBackground={80} starCount={80} topOffset={220} />

        </section>
    )
}