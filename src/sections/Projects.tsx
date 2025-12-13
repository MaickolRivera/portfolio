import { useState } from "react";
import ProjectsCode from "../assets/icons/section_icons/ProjectsIcon";
import SwitchOption from "../components/SwitchOption";
import ColumnsListIcon from "../assets/icons/switch_icons/ColumnsListIcon";
import StarBackground from "../components/StarBackground";
import SliderListIcon from "../assets/icons/switch_icons/SliderListIcon";
import ColumnList from "./sub_sections/ColumnList";
import SliderList from "./sub_sections/SliderList";

export default function Projects(){

    type List = "SLIDER" | "COLUMNS";
    const [typeList, setTypeList] = useState<List>("SLIDER");

    return(
        <section 
        id="projects"
        className="
        flex items-center gap-5 flex-col 
        px-5 w-full relative pt-25 my-60
        md:pt-40">

            <div className="flex flex-col items-center gap-3">
                    <ProjectsCode color="gray"/>
                    <h2 className="text-2xl text-center text-gradient font-semibold">
                        PROYECTOS
                    </h2>
            </div>

            <p className="max-w-[20rem] md:max-w-[28rem] text-sm text-gradient text-center opacity-80 md:text-base/5">
                He desarrollando productos como landing pages, experiencias 3D interactivas, integraciones de encriptación, visualizacion de algoritmos y apps multiplataforma. 
            </p>

            <div className="
                flex justify-between 
                w-full mt-12 max-w-[20rem] 
                md:max-w-[45rem] md:gap-5 md:flex-row">

                <div className="flex flex-row items-center gap-5">
                    <SwitchOption
                        selectedValue={typeList}
                        setSelectedValue={setTypeList}
                        options={[
                            <SliderListIcon className="text-LIGHT-text dark:text-DARK-text" size={18}/>,
                            <ColumnsListIcon className="text-LIGHT-text dark:text-DARK-text" size={18}/>
                        ]}
                        values={["SLIDER", "COLUMNS"]}
                    />
                    <p className="
                        text-base font-semibold hidden  
                        dark:text-DARK-subtext text-LIGHT-subtext
                        md:block">
                            LISTA DE PROYECTOS
                    </p>

                </div>
                {/* <button className="text-xs cursor-pointer gradient-menu rounded-lg px-4 border-1
                text-LIGHT-subtext hover:text-LIGHT-text border-LIGHT-text/10
                dark:text-DARK-subtext dark:hover:text-DARK-text dark:border-DARK-text/10">
                    VER TODOS +
                </button> */}
            </div>

            {typeList == "SLIDER" ? <SliderList/> : <ColumnList/>}
            <StarBackground widthBackground={70} heightBackground={80} starCount={80} topOffset={220} />

        </section>
    )
}