import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section className="flex flex-col gap-5 mb-20">
      <SectionHeader label="§ 01 · ABOUT" meta="IDENTITY / TRACE" />
      <p className="pt-2.5">
        Alfonso is a frontend engineer based in Batam, Indonesia. Four years
        shipping React and TypeScript across cargo logistics at Cargo Community
        Network (Singapore) and agriculture fintech at CROWDE (Jakarta), with a
        cybersecurity engineering background at Politeknik Negeri Batam.
      </p>
      <p>
        Currently learning AI engineering — interested in building frontend
        interfaces for LLM-integrated products and agentic systems.
      </p>
    </section>
  );
};

export default About;
