import { FiAward, FiCheck } from "react-icons/fi";

export interface UnlockedMilestone {
  title: string;
  description: string;
  date: string;
}

export const unlockedMilestone: UnlockedMilestone = {
  title: "10 Journal Entries",
  description: "You wrote 10 private journal entries",
  date: "May 12, 2025",
};

type UnlockedMilestoneCardProps = {
  milestone: UnlockedMilestone;
  onShare?: () => void;
};

export function UnlockedMilestoneCard({
  milestone,
  onShare,
}: UnlockedMilestoneCardProps) {
  return (
    <aside
      className="
        flex
        h-full
        min-h-[370px]
        flex-col
        items-center
        rounded-[26px]
        bg-surface-active
        px-7
        py-6
        text-center
      "
    >
      <h2 className="text-[18px] font-semibold text-text-primary">
        Milestone Unlocked!
      </h2>

      <div className="relative mt-6">
        <div
          className="
            flex
            h-[105px]
            w-[105px]
            items-center
            justify-center
            rounded-full
            bg-chart-yellow
            shadow-[inset_0_0_0_8px_rgba(255,255,255,0.22)]
          "
        >
          <div
            className="
              flex
              h-[76px]
              w-[76px]
              items-center
              justify-center
              rounded-full
              bg-chart-green-dark
            "
          >
            <FiCheck size={37} strokeWidth={3} className="text-chart-yellow" />
          </div>
        </div>

        <div
          className="
            absolute
            -bottom-7
            left-[18px]
            h-10
            w-7
            -rotate-12
            bg-chart-green-dark
            [clip-path:polygon(0_0,100%_0,100%_100%,50%_75%,0_100%)]
          "
        />

        <div
          className="
            absolute
            -bottom-7
            right-[18px]
            h-10
            w-7
            rotate-12
            bg-chart-green-dark
            [clip-path:polygon(0_0,100%_0,100%_100%,50%_75%,0_100%)]
          "
        />
      </div>

      <div className="mt-12">
        <h3 className="text-[22px] font-semibold text-text-primary">
          {milestone.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-text-secondary">
          {milestone.description}
        </p>

        <p className="mt-3 text-sm font-medium text-text-secondary">
          {milestone.date}
        </p>
      </div>

      <button
        type="button"
        onClick={onShare}
        className="
          mt-auto
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-brand-dark
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-brand-primary
          focus:outline-none
          focus:ring-2
          focus:ring-brand-dark
          focus:ring-offset-2
        "
      >
        <FiAward size={17} />
        Share
      </button>
    </aside>
  );
}
