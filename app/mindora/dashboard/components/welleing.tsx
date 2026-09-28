"use client";

import BasicBorderCard from "@/components/ui/cards/basic-border-card";
import StatBlock from "./state-block";
import WellbeingChart from "./wellbeing-charts";
import Dropdown, { DropdownOption } from "@/components/ui/dropdown/drop-down";



interface WellbeingCardProps {
  className?: string;
  moodAverage?: string;
  moodChange?: string;
  checkIns?: string;
  checkInsChange?: string;
  period?: string;
  onPeriodChange?: (value: string) => void;
}

const periodOptions: DropdownOption[] = [
  {
    label: "This week",
    value: "this-week",
  },
  {
    label: "Last week",
    value: "last-week",
  },
  {
    label: "This month",
    value: "this-month",
  },
  {
    label: "Last month",
    value: "last-month",
  },
];

export default function WellbeingCard({
  className = "",
  moodAverage = "Good",
  moodChange = "12% vs last week",
  checkIns = "6 / 7",
  checkInsChange = "1 from last week",
  period = "this-week",
  onPeriodChange,
}: WellbeingCardProps) {
  return (
    <BasicBorderCard
      title="This week's wellbeing"
      className={`w-full max-w-[720px] sm:p-7 md:p-8 ${className}`}
      headerRight={
        <Dropdown
          value={period}
          options={periodOptions}
          onChange={
            onPeriodChange ?? (() => {})
          }
        />
      }
    >
      <div className="grid grid-cols-2 divide-x divide-border-subtle">
        <div className="pr-5 sm:pr-8">
          <StatBlock
            label="Mood average"
            value={moodAverage}
            change={moodChange}
          />
        </div>

        <div className="pl-5 sm:pl-8">
          <StatBlock
            label="Check-ins"
            value={checkIns}
            change={checkInsChange}
          />
        </div>
      </div>

      <WellbeingChart />
    </BasicBorderCard>
  );
}