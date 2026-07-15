interface SectionHeaderProps {
  label: string;
  meta: string;
}

const SectionHeader = ({ label, meta }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col text-center">
      <div className="flex justify-between pb-4">
        <p className="text-muted text-[12px]">{label}</p>
        <p className="text-muted text-[12px]">{meta}</p>
      </div>
      <hr className="border-rule" />
    </div>
  );
};

export default SectionHeader;
