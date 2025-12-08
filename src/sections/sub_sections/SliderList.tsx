import { useEffect, useState } from "react";
import Arrow from "../../assets/icons/Arrow";
import RadialGradient from "../../components/RadialGradient";
import GitHub from "../../assets/icons/GitHub";
import Link from "../../assets/icons/Link";
import { projectsItems } from "./ProjectsItems";

type SliderListProps = {
  autoPlay?: boolean;
  showButtons?: boolean;
};

export default function SliderList({ autoPlay = true}: SliderListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay && projectsItems.length > 0) {
      const interval = setInterval(() => {
        selectNewSlide(true);
      }, 2800);
      return () => clearInterval(interval);
    }
  });

  const selectNewSlide = (next = true) => {
    if (projectsItems.length === 0) return;

    setLoaded(false);
    const maxIndex = projectsItems.length - 1;
    const nextIndex = next
      ? selectedIndex < maxIndex ? selectedIndex + 1 : 0
      : selectedIndex > 0 ? selectedIndex - 1 : maxIndex;

    setTimeout(() => {
      setSelectedIndex(nextIndex);
      setLoaded(true);
    }, 500);
  };

  const current = projectsItems[selectedIndex];

  return (
    <div className="relative flex flex-col items-center">
      <div className="
      flex flex-col gap-5
      relative max-w-[20rem] h-full overflow-hidden border-1 rounded-xl px-2 py-2
      md:max-w-[45rem] md:h-[320px] md:px-6

      border-LIGHT-subtext/20 bg-LIGHT-selected/20
      dark:border-DARK-subtext/20 dark:bg-DARK-selected">
        
        <div className="
        right-0 top-0 w-full
        md:absolute md:right-[-200px] md:top-[40px] md:w-[580px]">

          {
            projectsItems.map((project, index) => (
              <img
                key={project.img}
                src={project.img}
                alt={project.title}
                className={`w-full absolute p-2 inset-0 object-cover transition-opacity duration-100 md:p-0 ${
                  index === selectedIndex && loaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => {
                  if (index === selectedIndex) setLoaded(true);
                }}
              />
            ))
          }
          
        </div>

        <div className="
        flex flex-col gap-3
        w-full h-full pt-41 px-5 pb-12
        md:max-w-[45%] md:justify-center md:pb-0 md:pt-2">

          <p className="text-lg font-semibold text-LIGHT-text dark:text-DARK-text">{current.title}</p>
          <p className="text-sm/5 text-LIGHT-subtext dark:text-DARK-unselected">{current.description}</p> 

          <div className="
          flex flex-row gap-2 items-center
          mt-2 z-20
          md:my-2">

            <a 
            href={current.repository} 
            aria-label="Look at the repository project" 
            target="_blank" 
            
            className="
              flex flex-row items-center gap-3
              opacity-70 border-1 rounded-lg py-2 px-3.5

              bg-LIGHT-selected/60 border-LIGHT-text/10
              dark:bg-DARK-selected dark:border-DARK-text/10
              hover:opacity-100
              ">
            
              <GitHub 
                className="py-0.5 text-LIGHT-text dark:text-DARK-text" 
                size={16}>
              </GitHub>
            </a>

            <a 
            href={current.link} 
            aria-label="Look at the project" 
            target="_blank" 
            
            className="
              flex flex-row items-center gap-3
              opacity-70 border-1 rounded-lg py-2 px-3.5
              
              bg-LIGHT-selected/60 border-LIGHT-text/10
              dark:bg-DARK-selected dark:border-DARK-text/10
              hover:opacity-100
              ">
            
              <Link className="text-LIGHT-text dark:text-DARK-text" size={15}></Link>
              <p className="text-sm text-LIGHT-text dark:text-DARK-subtext">Visitar</p>

            </a>
          </div>
        </div>

        <div className="
          flex flex-row gap-3
          h-1 w-3/4 absolute px-5 bottom-6.5 
          md:w-65">

          {[0, 1, 2].map((i) => (
            <div 
            key={i} 
            className="
            w-1/3 h-1 rounded-full overflow-hidden
            bg-LIGHT-text/30 dark:bg-DARK-text/30">
              
              <div
                className={`h-full rounded-full transition-all duration-500 4s ease-in-out ${
                  selectedIndex >= i ? "bg-LIGHT-text/80 dark:bg-DARK-text/80" : "bg-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>


        <RadialGradient
          size="700"
          top="-20"
          left="250"
          gradient="gradient-radial-project absolute"
        />

        <RadialGradient
          size="500"
          top="-350"
          left="-260"
          gradient="gradient-radial-project absolute"
        />
      </div>

        <div className="
          flex justify-between items-center
          w-screen px-3 absolute bottom-55 mt-4
          md:px-0 md:w-[820px] md:bottom-40">

          <button
            onClick={() => selectNewSlide(false)}
            className="rotate-90 transition cursor-pointer"
            aria-label="Previous slide"
          >
            <Arrow size="20" className="opacity-50 hover:opacity-100" />
          </button>

          <button
            onClick={() => selectNewSlide(true)}
            className="rotate-270 transition cursor-pointer"
            aria-label="Next slide"
          >
            <Arrow size="20" className="opacity-50 hover:opacity-100" />
          </button>
          
        </div>
    </div>
  );
}