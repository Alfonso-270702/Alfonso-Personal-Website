import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";
import ManifestedRow from "./ManifestRow";

const Projects = () => {
  return (
    <section className="flex flex-col mb-20">
      <SectionHeader label="§ 03 • PROJECTS" meta="LAB / 03 BUILDS" />
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-row gap-2 border-b border-rule-soft py-7"
        >
          <div className="w-[30%] flex items-center">
            <ManifestedRow
              trackingNumber={project.id}
              year={project.year}
              status={project.status.toUpperCase()}
            />
          </div>
          <div className="flex flex-col gap-1 w-[70%]">
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <p className="text-[16px]">{project.desc}</p>
            <p className="text-[12px] text-soft">{project.stack}</p>
            <p className="text-[16px]">{project.impact}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
