import React from "react";
import MoodSelector from "./mood-selector";
import Button from "@/components/ui/buttons/primary-button";
import { Frown, Meh, Smile, Laugh } from "lucide-react";

const DailyCheckIn = () => {
  const moods = [
    {
      id: "very-low",
      label: "Very low",
      icon: <Frown size={22} strokeWidth={1.7} />,
    },
    {
      id: "low",
      label: "Low",
      icon: <Frown size={22} strokeWidth={1.7} />,
    },
    {
      id: "okay",
      label: "Okay",
      icon: <Meh size={22} strokeWidth={1.7} />,
    },
    {
      id: "good",
      label: "Good",
      icon: <Smile size={22} strokeWidth={1.7} />,
      active: true,
    },
    {
      id: "great",
      label: "Great",
      icon: <Laugh size={22} strokeWidth={1.7} />,
    },
  ];
  return (
    <div>
      <p className="text-sm text-text-primary">How are you feeling today?</p>
      <MoodSelector
        moods={moods}
        streakText="You've checked in 20 days in a row"
        streakDescription="Great consistency!"
      />
      <Button type="submit" className="mt-2" variant="secondary">
        View Check-in History
      </Button>
    </div>
  );
};

export default DailyCheckIn;
