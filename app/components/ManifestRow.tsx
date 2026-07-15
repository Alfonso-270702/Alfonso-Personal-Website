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
    <section className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <p>{trackingNumber}</p>
        <p className="text-soft text-[14px]">{year}</p>
      </div>
      {status === "ACTIVE" ? (
        <span className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-signal"></div>
          {status}
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full border"></div>
          {status}
        </span>
      )}
    </section>
  );
};

export default ManifestedRow;
