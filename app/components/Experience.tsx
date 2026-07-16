import SectionHeader from "./SectionHeader";
import { experience } from "../data/experience";
import ManifestedRow from "./ManifestRow";

const Experience = () => {
  return (
    <section className="flex flex-col mb-20">
      <SectionHeader label="§ 02 · EXPERIENCE" meta="MANIFEST · 02 ENTRIES" />
      {experience.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 md:flex-row md:gap-6 border-b border-rule-soft py-7"
        >
          <div className="w-full md:w-32 shrink-0 flex items-start">
            <ManifestedRow
              trackingNumber={exp.id}
              year={exp.year}
              status={exp.status.toUpperCase()}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-tight">
              {exp.title}
            </h3>
            <p className="text-[13px]">{exp.role}</p>
            <p className="font-mono text-[11px] text-muted">{exp.stack}</p>
            <p className="font-mono text-[11px] font-medium text-ink">
              {exp.impact}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
