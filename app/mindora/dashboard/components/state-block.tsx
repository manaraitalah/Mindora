interface StatBlockProps {
  label: string;
  value: string;
  change: string;
}

export default function StatBlock({
  label,
  value,
  change,
}: StatBlockProps) {
  return (
    <div className="min-w-0">
      <p className="text-sm font-medium text-text-secondary">
        {label}
      </p>

      <p className="mt-2 text-[16px] font-semibold leading-none tracking-[-0.03em] text-text-primary">
        {value}
      </p>

      <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-icon-primary">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="size-4 shrink-0"
          fill="none"
        >
          <path
            d="M8 13V3M8 3L4.5 6.5M8 3l3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className=" text-xs">{change}</span>
      </div>
    </div>
  );
}