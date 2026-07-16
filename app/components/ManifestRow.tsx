interface ManifestedRowProps {
  trackingNumber: string;
  year: string;
  status: string | "ACTIVE" | "SHIPPED";
}

const ManifestedRow = ({
  trackingNumber,
  year,
  status,
}: ManifestedRowProps) => {
  return (
    <section className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:flex-col md:items-start md:gap-3 font-mono text-[11px] tracking-[0.05em]">
      <p className="text-ink">{trackingNumber}</p>
      <p className="text-muted">{year}</p>
      {status === "ACTIVE" ? (
        <span className="flex items-center gap-2 text-signal">
          <div className="h-2 w-2 rounded-full bg-signal"></div>
          {status}
        </span>
      ) : (
        <span className="flex items-center gap-2 text-muted">
          <div className="h-2 w-2 rounded-full border border-muted"></div>
          {status}
        </span>
      )}
    </section>
  );
};

export default ManifestedRow;
