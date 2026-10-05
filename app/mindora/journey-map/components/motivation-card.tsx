// src/components/journey-map/MotivationCard.tsx

const MotivationCard = () => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-surface-soft
        bg-surface
        p-5
      "
    >
      <div
        className="
          absolute
          -right-8
          -top-8
          h-24
          w-24
          rounded-full
          bg-surface-soft
          opacity-50
        "
      />

      <div
        className="
          absolute
          -bottom-10
          -left-10
          h-28
          w-28
          rounded-full
          bg-surface-soft
          opacity-40
        "
      />

      <div className="relative z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background shadow-sm">
          🌿
        </div>

        <h3 className="mt-5 font-semibold text-text-primary">
          Keep going, Jessica
        </h3>

        <p className="mt-2 text-sm leading-6 text-text-secondary">
          You&apos;ve been building momentum and that matters.
          Every small step is part of your progress.
        </p>

        <div className="mt-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-icon-primary" />

          <p className="text-xs font-medium text-icon-primary">
            You&apos;re making progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotivationCard;