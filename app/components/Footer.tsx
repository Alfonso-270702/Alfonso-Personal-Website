"use client";

const Footer = () => {
  return (
    <section className="flex flex-col">
      <hr className="border-rule" />
      <div className="flex justify-between py-4">
        <p className="text-[12px] text-soft">
          © ALFONSO SIRAIT · 2026 · BUILT WITH REACT + TYPESCRIPT
        </p>
        <button
          className="text-[12px] text-soft cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ RETURN TO ORIGIN
        </button>
      </div>
    </section>
  );
};

export default Footer;
