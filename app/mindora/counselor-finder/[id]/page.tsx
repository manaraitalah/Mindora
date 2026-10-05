"use client";

import { useState } from "react";

import AboutSection from "./components/about-section";
import DayPicker from "./components/day-picker";
import ProfileActions from "./components/profile-action";
import ProfileHeader from "./components/profile-header";
import ProfileTabs from "./components/profile-tabs";
import VerificationCard from "./components/verfication-card";

export const counselorProfile = {
  id: "1",
  name: "Dr. Sarah Lin",
  verified: true,
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  title: "UCC • Licensed Professional Clinical Counselor",
  license: "Licensed Clinical Counselor",
  experience: "8 years experience • She/Her",
  rating: 4.9,
  reviews: 124,
  match: 94,
  about:
    "I help adults overcome anxiety, build self-esteem, and create lasting change through evidence-based approaches and compassionate care.",
  specialties: [
    {
      id: "1",
      name: "Anxiety",
    },
    {
      id: "2",
      name: "Depression",
    },
    {
      id: "3",
      name: "Stress",
    },
    {
      id: "4",
      name: "Self-esteem",
    },
    {
      id: "5",
      name: "Relationships",
    },
  ],
  approaches: [
    {
      id: "1",
      name: "Crt",
    },
    {
      id: "2",
      name: "Cognitive",
    },
  ],
  languages: ["Spanish", "English"],
};
export const availableTimes = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
];
const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(2026, 9, 5),
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <ProfileHeader profile={counselorProfile} />

        <ProfileActions />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_350px]">
          <div className="space-y-5">
            <ProfileTabs />

            <AboutSection profile={counselorProfile} />
          </div>

          <div className=" flex flex-col gap-4 border border-border-subtle rounded-lg p-4">
            <h1 className=" text-text-primary text-base font-bold">
              Check Availability
            </h1>
            <div>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {availableTimes.map((time) => (
                    <div
                      key={time}
                      className="
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background
                        px-4
                        py-3
                        text-center
                        text-sm
                        font-medium
                        text-text-primary
                        transition
                        hover:border-brand-primary
                        hover:bg-surface-muted
                        "
                    >
                      {time}
                    </div>
                  ))}
              </div>
            </div>

            <button className=" px-3 py-2 w-full rounded-lg text-mood-good bg-mood-good-bg">
              View All Availability
            </button>
            <VerificationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
