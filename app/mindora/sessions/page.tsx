"use client";

import { FiCalendar } from "react-icons/fi";

import { PreparationTip } from "./components/prepration-tip";
import { UpcomingSessionCard } from "./components/upcoming-session-card";
import Button from "@/components/ui/buttons/primary-button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeviceCheckCard from "./components/join-session";

export const upcomingSessions = [
  {
    id: "session-1",
    month: "MAY",
    day: "16",
    date: "Fri, May 16, 2025",
    time: "1:00 PM",
    counselorName: "Dr. Sarah Lin",
    sessionType: "Individual Therapy",
    duration: 60,
    status: "confirmed",
    canJoin: true,
  },
  {
    id: "session-2",
    month: "MAY",
    day: "30",
    date: "Fri, May 30, 2025",
    time: "11:00 AM",
    counselorName: "Dr. Sarah Lin",
    sessionType: "Individual Therapy",
    duration: 60,
    status: "confirmed",
    canJoin: false,
  },
];

export default function Page() {
  const router = useRouter();
  const [isShowJoinSession, setIsShowSession] = useState<boolean>(false);
  const handleJoin = (id: string) => {
    setIsShowSession(true);
    console.log("Join session:", id);
  };

  const handleReschedule = (id: string) => {
    console.log("Reschedule:", id);
  };

  const handleCancel = (id: string) => {
    console.log("Cancel session:", id);
  };

  const handleCreateNewSession = () => {
    router.push("/mindora/book-session");
  };

  return (
    <main
      className={`bg-mindora-background ${isShowJoinSession ? "" : "p-4 sm:p-6 lg:p-8 min-h-screen"} `}
    >
      {isShowJoinSession ? (
        <DeviceCheckCard />
      ) : (
        <section
          className="
          mx-auto
          max-w-[1300px]
          rounded-[26px]
          border
          border-border-subtle
          bg-background
          p-5
          sm:p-7
          lg:p-10
        "
        >
          <header
            className="
    flex
    flex-col
    gap-5
    sm:flex-row
    sm:items-start
    sm:justify-between
  "
          >
            <div>
              <h1
                className="
        text-[27px]
        font-semibold
        tracking-[-0.02em]
        text-text-primary
      "
              >
                Upcoming Sessions
              </h1>

              <p className="mt-2 text-sm text-text-secondary">
                You have {upcomingSessions.length} upcoming sessions
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleCreateNewSession}
              leftIcon={<FiCalendar size={17} />}
              className="w-auto self-start px-5 sm:max-w-[300px]"
            >
              Create New Session
            </Button>
          </header>

          <div
            className="
            mt-8
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[minmax(0,1fr)_300px]
          "
          >
            <section className="space-y-5">
              {upcomingSessions.map((session) => (
                <UpcomingSessionCard
                  key={session.id}
                  session={session}
                  onJoin={handleJoin}
                  onReschedule={handleReschedule}
                  onCancel={handleCancel}
                />
              ))}
            </section>

            <PreparationTip />
          </div>
        </section>
      )}
    </main>
  );
}
