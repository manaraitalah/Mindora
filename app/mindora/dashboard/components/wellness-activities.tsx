"use client";



import {
  BrainCircuit,
  Flower2,
  Wind,
} from "lucide-react";
import ActivityRow, { Activity } from "./activity-row";
import BasicBorderCard from "@/components/ui/cards/basic-border-card";

const activities: Activity[] = [
  {
    id: 1,
    title: "5-Minute Breathing",
    duration: "5 min",
    icon: Wind,
    iconContainerClass: "bg-mood-low-bg",
    iconClass: "text-mood-low",
  },
  {
    id: 2,
    title: "Gratitude Practice",
    duration: "7 min",
    icon: Flower2,
    iconContainerClass: "bg-mood-neutral-bg",
    iconClass: "text-mood-neutral",
  },
  {
    id: 3,
    title: "Thought Reframe",
    duration: "10 min",
    icon: BrainCircuit,
    iconContainerClass: "bg-mood-low-bg",
    iconClass: "text-mood-low",
  },
];

type WellnessActivitiesProps = {
  onViewAll?: () => void;
  onStart?: (activity: Activity) => void;
};

export default function WellnessActivities({
  onViewAll,
  onStart,
}: WellnessActivitiesProps) {
  return (
    <BasicBorderCard
      title="Wellness activities"
      className="w-full rounded-[28px] px-7 py-7 sm:px-8"
      headerRight={
        <button
          type="button"
          onClick={onViewAll}
          className="
            text-sm
            font-semibold
            text-text-secondary
            transition-colors
            hover:text-text-primary
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-icon-secondary/30
            focus-visible:ring-offset-2
          "
        >
          View all
        </button>
      }
    >
      <p className="mb-2 text-sm text-text-muted">
        Recommended for you
      </p>

      <div>
        {activities.map((activity, index) => (
          <ActivityRow
            key={activity.id}
            activity={activity}
            isLast={index === activities.length - 1}
            onStart={onStart}
          />
        ))}
      </div>
    </BasicBorderCard>
  );
}