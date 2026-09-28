import type { LucideIcon } from "lucide-react";

export type Activity = {
  id: number;
  title: string;
  duration: string;
  icon: LucideIcon;
  iconContainerClass: string;
  iconClass: string;
};

type ActivityRowProps = {
  activity: Activity;
  isLast: boolean;
  onStart?: (activity: Activity) => void;
};

export default function ActivityRow({
  activity,
  isLast,
  onStart,
}: ActivityRowProps) {
  const Icon = activity.icon;

  return (
    <div
      className={[
        "grid min-h-[86px] grid-cols-[48px_minmax(0,1fr)_auto] items-center gap-4",
        !isLast ? "border-b border-border-subtle" : "",
      ].join(" ")}
    >
      {/* Icon */}
      <div
        className={[
          "flex size-12 shrink-0 items-center justify-center rounded-[12px]",
          activity.iconContainerClass,
        ].join(" ")}
      >
        <Icon
          aria-hidden="true"
          strokeWidth={2}
          className={`size-5 ${activity.iconClass}`}
        />
      </div>

      {/* Info */}
      <div
        className="
          grid
          min-w-0
          grid-cols-1
          items-center
          gap-1
         
        "
      >
        <p className="truncate text-sm font-medium text-text-primary">
          {activity.title}
        </p>

        <span className="text-sm text-text-muted">{activity.duration}</span>
      </div>

      {/* Action */}
      <button
        type="button"
        onClick={() => onStart?.(activity)}
        aria-label={`Start ${activity.title}`}
        className="
          flex
          items-center
          justify-center
          rounded-[13px]
          bg-surface-active
          px-6
          py-2
          text-sm
          font-semibold
          text-text-primary

        "
      >
        Start
      </button>
    </div>
  );
}
