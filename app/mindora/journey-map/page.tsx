"use client";

import { useMemo, useState } from "react";

import JourneyChart, { JourneyEventType } from "./components/journey-charts";
import JourneyHeader from "./components/journey-header";
import JourneyLegend from "./components/journey-legand";
import MoodStreakCard from "./components/mood-streak-card";
import ProgressCard from "./components/progress-card";
import TimelineTabs from "./components/timeline-tab";
import MotivationCard from "./components/motivation-card";
import TimelineCard from "./components/timeline.card";

export type JourneyTab =
  | "All"
  | "Sessions"
  | "Check-ins"
  | "Journal"
  | "Activities"
  | "Milestones";

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: JourneyEventType;
  icon: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: "1",
    date: "May 10",
    title: "Check-in",
    description: "Felt anxious but used breathing",
    type: "check-in",
    icon: "🙂",
  },
  {
    id: "2",
    date: "May 12",
    title: "Journal Entry",
    description: "Wrote about a challenging situation",
    type: "journal",
    icon: "📖",
  },
  {
    id: "3",
    date: "May 14",
    title: "Gratitude Practice",
    description: "Completed 7-min activity",
    type: "activity",
    icon: "✓",
  },
  {
    id: "4",
    date: "May 16",
    title: "Counseling Session",
    description: "Identified thought patterns",
    type: "session",
    icon: "👩",
  },
  {
    id: "5",
    date: "May 18",
    title: "Milestone",
    description: "Handled a difficult conversation",
    type: "milestone",
    icon: "⚑",
  },
];

const TAB_TYPE_MAP: Partial<Record<JourneyTab, JourneyEventType>> = {
  Sessions: "session",
  "Check-ins": "check-in",
  Journal: "journal",
  Activities: "activity",
  Milestones: "milestone",
};

const Page = () => {
  const [activeTab, setActiveTab] = useState<JourneyTab>("All");

  const filteredTimelineItems = useMemo(() => {
    if (activeTab === "All") {
      return timelineItems;
    }

    const eventType = TAB_TYPE_MAP[activeTab];

    if (!eventType) {
      return timelineItems;
    }

    return timelineItems.filter((item) => item.type === eventType);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-surface p-6">
      <JourneyHeader />

      {/* ==================== TOP SECTION ==================== */}
      <section className="mt-6 grid grid-cols-[250px_minmax(0,1fr)] gap-6">
        {/* Left Column */}
        <aside className="flex w-[250px] flex-col gap-5">
          <ProgressCard />

          <JourneyLegend />
        </aside>

        {/* Main Content */}
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_250px] gap-6">
          {/* Chart */}
          <div className="min-w-0">
            <JourneyChart />
          </div>

          {/* Insights */}
          <aside className="flex w-[250px] flex-col gap-5">
            {/* JourneyInsights */}
            <div className="flex flex-col gap-3 min-h-[180px] rounded-2xl border border-border-subtle bg-background p-5">
              <h1 className="text-base font-bold text-text-primary">
                Journey insights
              </h1>
              <p className=" text-text-secondary text-sm">Top Mood this Month</p>
              <p>Good 🙂</p>
            </div>

            <MotivationCard />
          </aside>
        </div>
      </section>

      {/* ==================== BOTTOM SECTION ==================== */}
      <section className="mt-6 grid grid-cols-[250px_minmax(0,1fr)] gap-6">
        {/* Left */}
        <div className="w-[250px]">
          <MoodStreakCard />
        </div>

        {/* Timeline */}
        <div className="min-w-0">
          <TimelineTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className=" mt-[34px]">
            <TimelineCard items={filteredTimelineItems} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;