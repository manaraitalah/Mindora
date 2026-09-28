"use client";
import Header from "@/components/layout/header";
import Button from "@/components/ui/buttons/primary-button";
import BasicBorderCard from "@/components/ui/cards/basic-border-card";
import { Bell, CalendarDays, Heart } from "lucide-react";
import React, { useState } from "react";
import DailyCheckIn from "./components/daily-check-in";
import NextCounselingSession from "./components/next-counseling-session";
import { JourneyProgressCard } from "./components/journey-progress";
import WellnessActivities from "./components/wellness-activities";
import QuickActions from "./components/quick-action";
import ResourceCard from "./components/resource-card";
import WellbeingCard from "./components/welleing";
import RecommendedResources from "./components/recommended";
import Calendar from "@/components/ui/buttons/calender-button";
const Page = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

  const actions = [
    {
      id: "check-in",
      component: (
          <button
      type="button"
      className="flex items-center gap-2 rounded-full border border-border-subtle bg-background px-4 py-2.5 text-sm font-medium text-text-profile shadow-sm transition hover:bg-surface"
    >
      <Heart className="size-5" />
      <span>Quick Check-in</span>
    </button>
      ),
    },
    {
      id: "notification",
      component:   <button
      type="button"
      aria-label="Notifications"
      className="flex size-10 items-center justify-center rounded-full border border-border-subtle bg-background text-icon-secondary shadow-sm transition hover:bg-surface"
    >
      <Bell className="size-5" />
    </button>,
    },
    {
      id: "calendar",
      component:<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  triggerLabel="Select date"
/>,
    },
   
  ];

  return (
    <div className="flex flex-col gap-3 ">
     <Header
  title="Good morning, Jessica"
  description="You've taken 12 mindful actions this week."
  icon="🌱"
  actions={actions}
/>
      <div className="grid grid-cols-3 gap-4">
        <BasicBorderCard title="Daily emotional check-in">
          <DailyCheckIn />
        </BasicBorderCard>
        <BasicBorderCard title="Next counseling session">
          <NextCounselingSession />
        </BasicBorderCard>
        <WellbeingCard />
        <JourneyProgressCard
          pathName="Calm & Confidence Path"
          progress={68}
          currentPhase={3}
          totalPhases={5}
          phaseTitle="Building Momentum"
          onViewJourney={() => {
            console.log("View Journey Map clicked");
          }}
        />
        <WellnessActivities />
        <QuickActions />
      </div>
      <RecommendedResources />
    </div>
  );
};

export default Page;
