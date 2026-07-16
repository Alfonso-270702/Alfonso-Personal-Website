import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";
import ManifestedRow from "./ManifestRow";

const Projects = () => {
  return (
    <section className="flex flex-col mb-20">
      <SectionHeader label="§ 03 · PROJECTS" meta="LAB / 03 BUILDS" />
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 md:flex-row md:gap-6 border-b border-rule-soft py-7"
        >
          <div className="w-full md:w-32 shrink-0 flex items-start">
            <ManifestedRow
              trackingNumber={project.id}
              year={project.year}
              status={project.status.toUpperCase()}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-tight">
              {project.title}
            </h3>
            <p className="text-[13px]">{project.desc}</p>
            <p className="font-mono text-[11px] text-muted">{project.stack}</p>
            <p className="font-mono text-[11px] font-medium text-ink">
              {project.impact}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
