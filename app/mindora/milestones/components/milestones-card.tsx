import {
  Brain,
  Flower2,
  HeartPulse,
  Leaf,
  LucideIcon,
  Medal,
  Sparkles,
} from "lucide-react";

export interface JourneyPhase {
  id: number;
  title: string;
  status: "completed" | "inProgress";
  icon: LucideIcon;
  progress: number;
  progressLabel: string;
}

export const milestones: JourneyPhase[] = [
  {
    id: 1,
    title: "7-Day Check-in Streak",
    status: "inProgress",
    icon: HeartPulse,
    progress: 71,
    progressLabel: "Day 5 of 7",
  },
  {
    id: 2,
    title: "First Counseling Session",
    status: "completed",
    icon: Leaf,
    progress: 90,
    progressLabel: "90%",
  },
  {
    id: 3,
    title: "Mindful Month",
    status: "inProgress",
    icon: Brain,
    progress: 45,
    progressLabel: "10 of 30 days",
  },
  {
    id: 4,
    title: "30-Day Wellness Streak",
    status: "inProgress",
    icon: Medal,
    progress: 55,
    progressLabel: "Day 16 of 30",
  },
  {
    id: 5,
    title: "Calm & Confidence Phase",
    status: "completed",
    icon: Sparkles,
    progress: 100,
    progressLabel: "100%",
  },
  {
    id: 6,
    title: "First Personal Breakthrough",
    status: "completed",
    icon: Flower2,
    progress: 100,
    progressLabel: "100%",
  },
];

type MilestoneCardProps = {
  milestone: JourneyPhase;
};

const statusLabel: Record<JourneyPhase["status"], string> = {
  inProgress: "In progress",
  completed: "Completed",
};

export function MilestoneCard({ milestone }: MilestoneCardProps) {
  const Icon = milestone.icon;

  return (
    <article
      className="
        max-h-[165px]
        rounded-[22px]
        border
        border-border-subtle
        bg-background
        p-5
        transition
        duration-200
        hover:-translate-y-0.5
        hover:border-border-subtle
        hover:shadow-[0_8px_25px_rgba(32,65,48,0.05)]
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            text-icon-secondary
          "
        >
          <Icon size={38} strokeWidth={1.5} />
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className="
              text-[15px]
              font-semibold
              leading-5
              text-text-primary
            "
          >
            {milestone.title}
          </h3>

          <p
            className={`mt-1.5 text-[13px] font-medium ${
              milestone.status === "completed"
                ? "text-brand-primary"
                : "text-text-secondary"
            }`}
          >
            {statusLabel[milestone.status]}
          </p>
        </div>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-4">
          <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-chart-grid">
            <div
              className="
                h-full
                rounded-full
                bg-chart-green-dark
                transition-all
                duration-500
              "
              style={{
                width: `${milestone.progress}%`,
              }}
            />
          </div>

          {milestone.progressLabel && (
            <span
              className="
                shrink-0
                text-xs
                font-medium
                text-text-secondary
              "
            >
              {milestone.progressLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
