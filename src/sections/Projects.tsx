import { useState } from "react";
import ProjectsCode from "../assets/icons/ProjectsCode";
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
        <section className="px-5 w-full relative flex items-center mt-35 flex-col gap-5 pb-70">
            <div className="flex flex-row items-center gap-5 ">
                <ProjectsCode color="gray"/>
                <h2 className="text-gradient text-3xl text-center max-w-[28rem]">
                    PROYECTOS
                </h2>
            </div>
            <p className="max-w-[28rem] text-sm text-gradient text-center opacity-80 md:text-base/5">
                Desarrollando productos como landing pages, apps multiplataforma, experiencias 3D interactivas, integraciones de encriptación y visualizacion de algoritmos. 
            </p>

            <div className="flex md:gap-5 md:flex-row justify-between w-full mt-10 max-w-[20rem] md:max-w-[41rem]">
                <div className="flex flex-row items-center gap-5">
                    <SwitchOption
                        selectedValue={typeList}
                        setSelectedValue={setTypeList}
                        options={[
                            <SliderListIcon className="text-LIGHT-text dark:text-DARK-text" size={15}/>,
                            <ColumnsListIcon className="text-LIGHT-text dark:text-DARK-text" size={15}/>
                        ]}
                        values={["SLIDER", "COLUMNS"]}
                    />
                    <p className="text-sm font-semibold text-LIGHT-subtext dark:text-DARK-subtext hidden md:block">LISTA DE PROYECTOS</p>
                </div>
                {/* <button className="text-xs cursor-pointer gradient-menu rounded-lg px-4 border-1
                text-LIGHT-subtext hover:text-LIGHT-text border-LIGHT-text/10
                dark:text-DARK-subtext dark:hover:text-DARK-text dark:border-DARK-text/10">
                    VER TODOS +
                </button> */}
            </div>

            {typeList == "SLIDER" ? <SliderList/> : <ColumnList/>}
            <StarBackground widthBackground={60} heightBackground={50} starCount={40} topOffset={150} />

        </section>
    )
}