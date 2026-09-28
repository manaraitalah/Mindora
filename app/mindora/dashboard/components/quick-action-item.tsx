import type { LucideIcon } from "lucide-react";

export type QuickAction = {
  id: string;
  label: string;
  icon: LucideIcon;
  iconClassName?: string;
};

type QuickActionItemProps = {
  action: QuickAction;
  onClick?: (action: QuickAction) => void;
};

export default function QuickActionItem({
  action,
  onClick,
}: QuickActionItemProps) {
  const Icon = action.icon;

  return (
    <button
      type="button"
      onClick={() => onClick?.(action)}
      className="
        group
        flex
        min-w-0
        flex-col
        items-center
        focus-visible:outline-none
      "
    >
      <span
        className="
          flex
          items-center
          justify-center
          rounded-full
          border
          border-border-subtle
          bg-background
          shadow-sm
          transition-all
          duration-200
          size-20
        "
      >
        <Icon
          aria-hidden="true"
          strokeWidth={2}
          className={`size-8 ${
            action.iconClassName ?? "text-icon-secondary"
          }`}
        />
      </span>

      <span
        className="
          mt-4
          max-w-[105px]
          text-center
          text-sm
          font-semibold
          leading-[1.55]
          text-text-primary
        "
      >
        {action.label}
      </span>
    </button>
  );
}