import SectionHeader from "./SectionHeader";
import { signal } from "../data/signal";
import BracketRow from "./BracketRow";

const Signal = () => {
  return (
    <section className="flex flex-col mb-5">
      <SectionHeader label="§ 05 • SIGNAL" meta="TRANSMIT/ ESTABLISH CHANNEL" />
      {signal.map((sig, index) => (
        <div
          key={index}
          className={`flex flex-row gap-2 ${index < signal.length - 1 ? "border-b border-rule-soft" : ""} py-7`}
        >
          <div className="w-[30%] flex items-center">
            <BracketRow tag={sig.type.toUpperCase()} />
          </div>
          <div className="flex w-[70%]">
            {sig.type === "status" ? (
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-signal"></div>
                <p className="text-[16px]">{sig.value}</p>
              </span>
            ) : (
              <p className="text-[16px]">{sig.value}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Signal;
