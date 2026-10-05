// src/components/journey-map/ProgressCard.tsx

export const journeyProgress = {
  title: "Calm & Confidence Path",
  phase: "Phase 3: Building Momentum",
  percentage: 68,
};

const ProgressCard = () => {
  const { title, phase, percentage } = journeyProgress;

  return (
    <div
      className="
        bg-mood-low-bg
        rounded-2xl
        border
        border-border-subtle
        p-5
        w-[250px]
      "
    >
      <h3
        className="
          font-semibold
          text-text-primary
        "
      >
        {title}
      </h3>

      <p
        className="
          text-xs
          text-text-secondary
          mt-2
        "
      >
        {phase}
      </p>

      <div
        className="
          mt-5
          flex
          justify-between
          items-center
        "
      >
        <span
          className="
            text-sm
            text-text-secondary
          "
        >
          Progress
        </span>

        <span
          className="
            font-semibold
            text-text-primary
          "
        >
          {percentage}%
        </span>
      </div>

      <div
        className="
          h-2
          bg-surface-muted
          rounded-full
          overflow-hidden
          mt-3
        "
      >
        <div
          className="
            h-full
            bg-chart-green
            rounded-full
            transition-all
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressCard;
