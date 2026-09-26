import RadialGradient from "../../components/RadialGradient";
import GitHub from "../../assets/icons/GitHub";
import Link from "../../assets/icons/Link";
import { projectsItems } from "./ProjectsItems";

  export default function ColumnList() {
    return (
      <div className="relative flex flex-col items-center gap-5">
        {
          projectsItems.map(({ title, description, img, repository, link }) => (
              <div className="
              flex flex-col gap-5 
              relative max-w-100 h-full overflow-hidden border rounded-xl px-2 py-2
              md:max-w-180 md:h-80 md:px-6

              border-line bg-surface">

              <img
                src={img}
                alt={title}
                className="
                right-0 top-0 w-full rounded-lg
                md:absolute md:-right-50 md:top-10 md:w-145"
              />

              <div className="
              flex flex-col gap-3
              w-full h-full px-5 pb-5
              md:max-w-[45%] md:justify-center md:pb-0 md:pt-2">
                
                <p className="text-lg font-semibold text-main">{title}</p>
                <p className="text-sm/5 text-muted">{description}</p> 

                <div className="
                flex flex-row gap-2 items-center
                mt-2
                md:my-2">

                  <a 
                  href={repository} 
                  aria-label="Look at the repository project" 
                  target="_blank" 
                  className="opacity-70 hover:opacity-100 flex flex-row items-center gap-3 border-1 rounded-lg py-2 px-3.5
                    bg-chip border-main/10">
                    
                    <GitHub 
                      className="py-0.5 text-main" 
                      size={16}>
                    </GitHub>
                  </a>

                  <a 
                  href={link} 
                  aria-label="Look at the project" 
                  target="_blank" 

                  className="
                    flex flex-row items-center gap-3
                    opacity-70 border rounded-lg py-2 px-3.5

                    bg-chip border-main/10
                    hover:opacity-100
                    ">
                    
                    <Link className="text-main" size={15}></Link>
                    <p className="text-sm text-soft">Visitar</p>

                  </a>
                </div>
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
          ))
        }
      </div>
    );
  }
  