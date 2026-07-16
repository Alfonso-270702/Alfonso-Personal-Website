const Hero = () => {
  return (
    <section className="flex flex-col gap-5 py-8 mb-10">
      <div className="flex flex-wrap justify-between gap-y-1 font-mono text-[12px] tracking-wider text-muted">
        <p>TRK/AS · REV 2026.07</p>
        <p>01°26′N 104°06′E · BATAM/ID</p>
      </div>
      <hr className="border-rule" />

      <div className="flex flex-col gap-5 pb-10">
        <h1 className="text-[clamp(48px,8vw,72px)] font-extrabold tracking-[-0.04em] leading-none">
          Alfonso Sirait
        </h1>
        <div>
          <p className="text-[18px] font-medium">Frontend engineer</p>
          <p className="text-[18px] text-muted">
            shipping React & TypeScript for cargo logistics and fintech.
          </p>
        </div>
        <p className="text-muted">
          4 years of experience — currently at Cargo Community Network,
          Singapore.
        </p>
      </div>
      <hr className="border-rule-soft" />
      <div className="flex justify-between font-mono tracking-[0.05em]">
        <p className="text-[11px] text-muted">TRACE · CAREER</p>
        <p className="text-[11px] text-muted">03 WAYPOINTS</p>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="flex flex-col gap-5 md:hidden relative pl-6 pt-2">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-ink" />
        <div className="relative">
          <div className="absolute -left-[18px] top-2 h-px w-3 bg-ink" />
          <p className="text-[15px] font-medium text-ink">2020</p>
          <p className="mt-1 text-[12px] font-mono text-muted">
            Hacktiv8 · JS
          </p>
        </div>
        <div className="relative">
          <div className="absolute -left-[18px] top-2 h-px w-3 bg-ink" />
          <p className="text-[15px] font-medium text-ink">2021</p>
          <p className="mt-1 text-[12px] font-mono text-muted">
            CROWDE · small team lead FE
          </p>
        </div>
        <div className="relative">
          <div className="absolute -left-[22px] top-1 h-3.5 w-3.5 rounded-full bg-signal" />
          <p className="text-[15px] font-medium text-ink">2022 —</p>
          <p className="mt-1 text-[12px] font-mono text-signal">
            CCN · active
          </p>
        </div>
      </div>

      {/* Desktop: horizontal trace */}
      <div className="relative pt-8 pb-2 hidden md:block">
        <div className="absolute left-0 right-0 top-8 h-px bg-ink" />
        <div className="grid grid-cols-3">
          <div className="relative flex flex-col items-start">
            <div className="absolute -top-2 left-0 h-4 w-px bg-ink" />
            <p className="mt-6 text-[15px] font-medium text-ink">2020</p>
            <p className="mt-1 text-[12px] font-mono text-muted">
              Hacktiv8 · JS
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="absolute -top-2 h-4 w-px bg-ink" />
            <p className="mt-6 text-[15px] font-medium text-ink">2021</p>
            <p className="mt-1 text-[12px] font-mono text-muted">
              CROWDE · small team lead FE
            </p>
          </div>

          <div className="relative flex flex-col items-end">
            <div className="absolute -top-1.75 right-0 h-3.5 w-3.5 rounded-full bg-signal" />
            <p className="mt-6 text-[15px] font-medium text-ink">2022 —</p>
            <p className="mt-1 text-[12px] font-mono text-signal">
              CCN · active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
