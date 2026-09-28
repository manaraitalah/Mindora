// src/components/ui/Progress.tsx

import * as ProgressPrimitive from "@radix-ui/react-progress";

type ProgressProps = {
  value: number;
  max?: number;
  label?: string;
  className?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function Progress({
  value,
  max = 100,
  label = "Progress",
  className = "",
}: ProgressProps) {
  const safeMax = max > 0 ? max : 100;
  const safeValue = clamp(value, 0, safeMax);
  const percentage = (safeValue / safeMax) * 100;

  return (
    <ProgressPrimitive.Root
      value={safeValue}
      max={safeMax}
      aria-label={label}
      className={[
        "h-2 w-full overflow-hidden rounded-full bg-[#E5E6E1]",
        className,
      ].join(" ")}
    >
      <ProgressPrimitive.Indicator
        className="
          h-full
          rounded-[inherit]
          bg-[#397B58]
          transition-transform
          duration-500
          ease-out
          motion-reduce:transition-none
        "
        style={{
          transform: `translateX(-${100 - percentage}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}