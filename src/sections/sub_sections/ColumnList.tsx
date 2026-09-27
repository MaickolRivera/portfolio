import { useState } from "react";
import RadialGradient from "../../components/RadialGradient";
import SkillsPill from "../../components/SkillsPill";
import { Arrow, Github, Link } from "../../assets/icons/UIIcons";
import { projectsItems } from "./ProjectsItems";
import { SKILL_ICONS } from "./SkillsItems";
import type { Project } from "../../types";

  export default function ColumnList() {
    return (
      <div className="relative flex flex-col items-center gap-5">
        {projectsItems.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    );
  }

  function ProjectCard({ title, description, img, srcSet, repository, link, stack }: Project) {
    const [showStack, setShowStack] = useState(false);
    const stackId = `stack-${title.replace(/\s+/g, "-").toLowerCase()}`;

    return (
      <div className="flex flex-col w-full max-w-100 md:max-w-180">
        <div className="
        flex flex-col gap-5
        relative w-full h-full overflow-hidden border rounded-xl px-2 py-2
        md:h-75 md:px-6
        border-line bg-surface">

          <img
            src={img}
            srcSet={srcSet}
            sizes="(min-width: 768px) 580px, 100vw"
            width={1200}
            height={631}
            loading="lazy"
            decoding="async"
            alt={title}
            className="
            right-0 top-0 w-full rounded-lg
            md:absolute md:-right-50 md:top-10 md:w-145"
          />

          <div className="
          flex flex-col gap-3
          w-full h-full px-4 pb-5
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
              className="
              flex flex-row items-center gap-3 border rounded-lg py-2 px-3.5
              bg-chip border-main/10
              opacity-70 hover:opacity-100">
                <Github
                  className="py-0.5 text-main"
                  size={16}>
                </Github>
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

              <button
                type="button"
                onClick={() => setShowStack(!showStack)}
                aria-expanded={showStack}
                aria-controls={stackId}
                className="z-100
                  flex flex-row items-center gap-3 cursor-pointer
                  border rounded-lg py-2 px-3.5
                  bg-chip border-main/10
                  opacity-70 hover:opacity-100">

                  <p className="text-sm text-soft">Stack</p>
                  <Arrow
                    size="10"
                    className={`text-main transition-transform duration-300 ${showStack ? 'rotate-180' : ''}`}
                  />
              </button>
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

        <div
          id={stackId}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out
            ${showStack ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden" inert={!showStack}>
            <div className="flex flex-wrap gap-2 py-2">
              {stack.map((skill) => (
                <SkillsPill key={skill} icon={SKILL_ICONS[skill]} text={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
