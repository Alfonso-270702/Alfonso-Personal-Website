import SectionHeader from "./SectionHeader";
import { stack } from "../data/stack";
import BracketRow from "./BracketRow";

const Stack = () => {
  return (
    <section className="flex flex-col mb-20">
      <SectionHeader label="§ 04 • STACK" meta="INVENTORY • 04 GROUPS" />
      {stack.map((stc, index) => (
        <div
          key={index}
          className="flex flex-row gap-2 border-b border-rule-soft py-7"
        >
          <div className="w-[30%] flex items-center">
            <BracketRow tag={stc.type} />
          </div>
          <div className="flex w-[70%]">
            <p className="text-[16px]">{stc.tools}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stack;
