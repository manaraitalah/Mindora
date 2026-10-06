"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import { MilestoneCard, milestones } from "./components/milestones-card";
import {
  unlockedMilestone,
  UnlockedMilestoneCard,
} from "./components/unlocked-milestone-card";

type Filter = "all" | "inProgress" | "completed";

const filters: {
  label: string;
  value: Filter;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "In Progress",
    value: "inProgress",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

export default function MilestonesPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredMilestones =
    activeFilter === "all"
      ? milestones
      : milestones.filter((milestone) => milestone.status === activeFilter);

  const handleShare = () => {
    console.log("Share milestone");
  };

  const handleCreateMilestone = () => {
    console.log("Create milestone");
  };

  return (
    <main className="min-h-screen bg-mindora-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1450px]">
        <header className="flex flex-col gap-5 border-b border-border-subtle pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-[23px] font-semibold tracking-[0.01em] text-text-primary">
              RESPONSIVE – MILESTONES
            </h1>

            <nav
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Milestone filters"
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-surface-active text-text-primary"
                        : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <button
            type="button"
            onClick={handleCreateMilestone}
            className="inline-flex h-11 items-center justify-center gap-2 self-start rounded-xl bg-brand-dark px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary sm:self-auto"
          >
            <FiPlus size={17} />
            New Milestone
          </button>
        </header>

        <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredMilestones.map((milestone) => (
              <MilestoneCard key={milestone.id} milestone={milestone} />
            ))}

            {filteredMilestones.length === 0 && (
              <div className="col-span-full flex min-h-[250px] items-center justify-center rounded-2xl border border-dashed border-border-subtle bg-background text-sm text-text-secondary">
                No milestones found.
              </div>
            )}
          </section>

          <UnlockedMilestoneCard
            milestone={unlockedMilestone}
            onShare={handleShare}
          />
        </div>
      </div>
    </main>
  );
}
