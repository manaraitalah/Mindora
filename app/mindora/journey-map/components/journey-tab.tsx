"use client";

import { JourneyTab } from "../page";

export const JOURNEY_TABS: JourneyTab[] = [
  "All",
  "Sessions",
  "Check-ins",
  "Journal",
  "Activities",
  "Milestones",
];

interface TimelineTabsProps {
  activeTab: JourneyTab;
  onChange: (tab: JourneyTab) => void;
}

const TimelineTabs = ({
  activeTab,
  onChange,
}: TimelineTabsProps) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max items-center gap-2 rounded-2xl border border-border-subtle bg-background p-2">
        {JOURNEY_TABS.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onChange(tab)}
              className={`
                rounded-xl
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  isActive
                    ? "bg-brand-dark text-white shadow-sm"
                    : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineTabs;