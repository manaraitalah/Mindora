"use client"
import { useState } from "react";

export const TIME_FILTERS = ["All time", "3M", "6M", "1Y"];

const JourneyHeader = () => {
    const [activeFilter, setActiveFilter] = useState("All time");


  return (
    <header
      className="
        flex
        flex-col
        md:flex-row
        justify-between
        md:items-center
        gap-5
      "
    >
      <div>
        <h1
          className="
            text-xl
            font-semibold
            text-text-primary
          "
        >
          Journey Map
        </h1>

        <p
          className="
            text-sm
            text-text-secondary
            mt-1
          "
        >
          Your path is unique. Here's your full journey at a glance.
        </p>
      </div>

      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <button
          className="
            bg-background
            border
            border-border-subtle
            rounded-xl
            px-5
            py-2
            text-sm
            text-text-primary
            shadow-sm
            hover:bg-surface
            transition-colors
          "
        >
          Filter
        </button>

        <div
          className="
            bg-background
            border
            border-border-subtle
            rounded-xl
            p-1
            flex
          "
        >
          {TIME_FILTERS.map((filter, index) => (
            <button
              key={filter}
                          onClick={() => setActiveFilter(filter)}

              className={`
                px-4
                py-2
                rounded-lg
                text-sm
                transition-colors
                 ${
                activeFilter === filter
                  ? "bg-brand-dark text-white"
                  : "text-text-secondary hover:bg-surface-active"
              }
              `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default JourneyHeader;
