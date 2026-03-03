import type { Clearing } from "../../../types/clearings";

interface TableFooterProps {
  filtered: Clearing[];
}

export default function TableFooter({ filtered }: TableFooterProps) {
  const totalPlatformFees = filtered.reduce(
    (s, i) => s + i.totalPlatformFees,
    0,
  );
  const totalServiceFees = filtered.reduce((s, i) => s + i.totalServiceFees, 0);
  const numberOfTransactions = filtered.reduce(
    (s, i) => s + (i.transactionIds?.length ?? 0),
    0,
  );

  const stats = [
    {
      label: "Total Transaction Costs",
      value: `ANG ${totalPlatformFees.toLocaleString("de-DE", { minimumFractionDigits: 2 })}`,
    },
    {
      label: "Total Service Costs",
      value: `ANG ${totalServiceFees.toLocaleString("de-DE", { minimumFractionDigits: 2 })}`,
    },
    { label: "Number of Tickets", value: filtered.length },
    { label: "Number of Transactions", value: numberOfTransactions },
  ];

  return (
    <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center gap-1 text-center"
        >
          <span className="text-[10px] text-gray-500 uppercase tracking-wider">
            {s.label}
          </span>
          <span className="text-white font-bold font-mono text-sm">
            {s.value}
          </span>
        </div>
      ))}
    </div>
  );
}
