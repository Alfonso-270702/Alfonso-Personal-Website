"use client";

import SectionHeader from "./SectionHeader";
import { signal } from "../data/signal";
import BracketRow from "./BracketRow";

const Signal = () => {
  return (
    <section className="flex flex-col mb-5">
      <SectionHeader
        label="§ 05 · SIGNAL"
        meta="TRANSMIT / ESTABLISH CHANNEL"
      />
      {signal.map((sig, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 md:flex-row md:items-center md:gap-6 ${index < signal.length - 1 ? "border-b border-rule-soft" : ""} py-5`}
        >
          <div className="w-full md:w-32 shrink-0 flex items-center">
            <BracketRow tag={sig.type.toUpperCase()} />
          </div>
          <div className="flex flex-1 items-center justify-between">
            {sig.type === "status" ? (
              <span className="flex items-center gap-2 font-mono text-[13px] text-signal">
                <p>● {sig.value}</p>
              </span>
            ) : sig.href ? (
              <a
                href={sig.href}
                target={sig.type === "linkedin" ? "_blank" : undefined}
                rel={
                  sig.type === "linkedin" ? "noopener noreferrer" : undefined
                }
                className="text-[14px] hover:underline"
              >
                {sig.value}
              </a>
            ) : (
              <p className="text-[14px]">{sig.value}</p>
            )}
            {sig.href && (
              <span
                className="font-mono text-[12px] text-muted cursor-pointer"
                onClick={() => window.location.assign(sig.href)}
              >
                ↗
              </span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Signal;
