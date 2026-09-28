"use client";

import BasicBorderCard from "@/components/ui/cards/basic-border-card";
import { Progress } from "@/components/ui/generic-component/progress";

type JourneyProgressCardProps = {
  pathName: string;
  progress: number;
  currentPhase: number;
  totalPhases: number;
  phaseTitle: string;
  onViewJourney: () => void;
  className?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function JourneyProgressCard({
  pathName,
  progress,
  currentPhase,
  totalPhases,
  phaseTitle,
  onViewJourney,
  className = "",
}: JourneyProgressCardProps) {
  const safeProgress = clamp(progress, 0, 100);

  return (
    <BasicBorderCard
      title="Your journey progress"
      className={`relative w-full max-w-[560px] overflow-hidden rounded-[30px] px-6 py-7 sm:px-8 sm:py-8 ${className}`}
    >
      <div className="relative z-10 sm:max-w-[390px]">
        <div className="mt-3 flex items-end justify-between gap-5">
          <h3
            className="
              min-w-0
              text-base
              font-semibold
              tracking-[-0.03em]
              text-text-secondary
            "
          >
            {pathName}
          </h3>

          <span
            className="
              shrink-0
              text-[18px]
              font-semibold
              leading-none
              tracking-[-0.04em]
              text-brand-dark
            "
          >
            {Math.round(safeProgress)}%
          </span>
        </div>

        <Progress
          value={safeProgress}
          label={`${pathName} progress`}
          className="mt-5"
        />

        <p
          className="
            mt-7
            text-xs
            font-medium
            tracking-[-0.01em]
            text-text-secondary
          "
        >
          Phase {currentPhase} of {totalPhases}

          <span
            aria-hidden="true"
            className="mx-2 text-text-muted"
          >
            •
          </span>

          {phaseTitle}
        </p>
      </div>

      <button
        type="button"
        onClick={onViewJourney}
        className="
          relative
          z-10
          mt-14
          inline-flex
          items-center
          gap-3
          rounded-lg
          text-sm
          font-semibold
          text-brand-dark
          transition-colors
          hover:text-brand-primary
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-brand-primary/30
          focus-visible:ring-offset-4
        "
      >
        View Journey Map

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="size-5"
        >
          <path
            d="M4 10h11M11 6l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <img
        src="/illustrations/journey-leaves.svg"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
          pointer-events-none
          absolute
          bottom-0
          right-3
          hidden
          w-[145px]
          select-none
          object-contain
          sm:block
        "
      />
    </BasicBorderCard>
  );
}