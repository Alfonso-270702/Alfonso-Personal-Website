import SectionHeader from "./SectionHeader";
import { experience } from "../data/experience";
import ManifestedRow from "./ManifestRow";

const Experience = () => {
  return (
    <section className="flex flex-col mb-20">
      <SectionHeader label="§ 02 • EXPERIENCE" meta="MANIFEST • 02 ENTRIES" />
      {experience.map((exp, index) => (
        <div
          key={index}
          className="flex flex-row gap-2 border-b border-rule-soft py-7"
        >
          <div className="w-[30%] flex items-center">
            <ManifestedRow
              trackingNumber={exp.id}
              year={exp.year}
              status={exp.status.toUpperCase()}
            />
          </div>
          <div className="flex flex-col gap-1 w-[70%]">
            <h3 className="text-3xl font-bold">{exp.title}</h3>
            <p className="text-[16px]">{exp.role}</p>
            <p className="text-[12px] text-soft">{exp.stack}</p>
            <p className="text-[16px]">{exp.impact}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
