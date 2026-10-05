// src/components/journey-map/components/timeline.card.tsx

import { JourneyEventType } from "./journey-tooltip";


export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: JourneyEventType;
  icon?: string;
}

interface TimelineCardProps {
  items: TimelineItem[];
}

const TYPE_STYLES: Record<
  JourneyEventType,
  {
    title: string;
    iconBackground: string;
    iconColor: string;
  }
> = {
  session: {
    title: "text-chart-green-dark",
    iconBackground: "bg-surface-muted",
    iconColor: "text-icon-secondary",
  },

  "check-in": {
    title: "text-chart-green",
    iconBackground: "bg-mood-good-bg",
    iconColor: "text-mood-good",
  },

  journal: {
    title: "text-chart-purple",
    iconBackground: "bg-mood-low-bg",
    iconColor: "text-mood-low",
  },

  activity: {
    title: "text-chart-yellow",
    iconBackground: "bg-mood-neutral-bg",
    iconColor: "text-mood-neutral",
  },

  milestone: {
    title: "text-brand-primary",
    iconBackground: "bg-surface-soft",
    iconColor: "text-icon-primary",
  },
};

const TimelineCard = ({ items }: TimelineCardProps) => {
  if (!items.length) {
    return (
      <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-border-subtle bg-background p-8">
        <div className="text-center">
          <div className="text-3xl">🌱</div>

          <h3 className="mt-3 font-semibold text-text-primary">
            No journey events
          </h3>

          <p className="mt-1 text-sm text-text-muted">
            There are no events available for this filter.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-[850px] gap-4">
        {items.map((item) => {
          const styles = TYPE_STYLES[item.type];

          return (
            <article
              key={item.id}
              className="
                relative
                min-w-[250px]
                min-h-[155px]
                rounded-2xl
                border
                border-border-subtle
                bg-background
                p-5
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-brand-primary
                hover:shadow-md
              "
            >
              {/* Date */}
              <span className="block text-xs font-semibold text-text-muted">
                {item.date}
              </span>

              {/* Content */}
              <div className="pr-10">
                <h3
                  className={`
                    mt-4
                    text-sm
                    font-semibold
                    ${styles.title}
                  `}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-text-secondary">
                  {item.description}
                </p>
              </div>

              {/* Icon */}
              <div
                className={`
                  absolute
                  bottom-5
                  right-5
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${styles.iconBackground}
                  ${styles.iconColor}
                `}
              >
                <span className="text-base">
                  {item.icon ?? "•"}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineCard;