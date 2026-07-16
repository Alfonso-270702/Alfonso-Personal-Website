interface BracketRowProps {
  tag: string;
}

const BracketRow = ({ tag }: BracketRowProps) => {
  return (
    <div className="flex flex-row gap-2 font-mono text-[11px] tracking-widder">
      <span className="text-soft">[{tag}]</span>
    </div>
  );
};

export default BracketRow;
