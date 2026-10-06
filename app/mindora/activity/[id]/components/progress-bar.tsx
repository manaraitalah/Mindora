type ProgressBarProps = {
  value: number;
  max: number;
  onChange?: (value: number) => void;
};

export function ProgressBar({ value, max, onChange }: ProgressBarProps) {
  const safeMax = max > 0 ? max : 1;

  const percentage = Math.min(100, Math.max(0, (value / safeMax) * 100));

  return (
    <div className="relative w-full">
      <input
        type="range"
        min={0}
        max={safeMax}
        step={0.1}
        value={Math.min(value, safeMax)}
        onChange={(event) => onChange?.(Number(event.target.value))}
        aria-label="Activity progress"
        className="absolute inset-0 z-10 h-4 w-full cursor-pointer opacity-0"
      />

      <div className="relative h-[3px] w-full rounded-full bg-chart-grid">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-chart-green-dark"
          style={{
            width: `${percentage}%`,
          }}
        />

        <div
          className="absolute top-1/2 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-green-dark"
          style={{
            left: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}
