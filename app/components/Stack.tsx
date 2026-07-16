import SectionHeader from "./SectionHeader";
import { stack } from "../data/stack";
import BracketRow from "./BracketRow";

const Stack = () => {
  return (
    <section className="flex flex-col mb-20">
      <SectionHeader label="§ 04 · STACK" meta="INVENTORY · 04 GROUPS" />
      {stack.map((stc, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 md:flex-row md:gap-6 border-b border-rule-soft py-5"
        >
          <div className="w-full md:w-32 shrink-0 flex items-center">
            <BracketRow tag={stc.type} />
          </div>
          <div className="flex flex-1 items-center">
            <p className="text-[14px]">{stc.tools}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stack;
