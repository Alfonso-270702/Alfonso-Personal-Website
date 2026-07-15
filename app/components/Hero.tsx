const Hero = () => {
  return (
    <section className="flex flex-col gap-5 py-8 mb-10">
      <div className="flex justify-between font-mono text-[12px] tracking-wider text-muted">
        <p>TRK/AS · REV 2026.07</p>
        <p>01°26′N 104°06′E · BATAM/ID</p>
      </div>
      <hr className="border-rule" />

      <div className="flex flex-col gap-5 pb-10">
        <h1 className="text-7xl font-bold">Alfonso Sirait</h1>
        <div>
          <p className="text-lg font-bold">Frontend Engineer</p>
          <p className="text-lg">
            shipping React & TypeScript for cargo logistics and fintech.
          </p>
        </div>
        <p className="text-muted">
          4 years of experience - currently at Cargo Community Network.
          Singapore.
        </p>
      </div>
      <hr className="border-rule-soft" />
      <div className="flex justify-between">
        <p className="text-[12px] text-muted">TRACE · CAREER</p>
        <p className="text-[12px] text-muted">03 WAYPOINTS</p>
      </div>

      <div className="relative pt-8 pb-2">
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
