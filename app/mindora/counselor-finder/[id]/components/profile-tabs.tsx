
import { useState } from "react";

const tabs = [
  "About",
  "Approach",
  "Reviews",
  "Availability",
  "Insurance",
  "FAQ",
];

const ProfileTabs = () => {
  const [active, setActive] = useState("About");

  return (
    <div
      className="
        overflow-x-auto
        rounded-2xl
        border
        border-border-subtle
        bg-background
      "
    >
      <div
        className="
          flex
          min-w-max
          gap-6
          px-5
        "
      >
        {tabs.map((tab) => {
          const isActive = active === tab;

          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                relative
                py-4
                text-sm
                transition

                ${
                  isActive
                    ? "font-semibold text-chart-green-dark"
                    : "text-text-muted hover:text-text-secondary"
                }
              `}
            >
              {tab}

              {isActive && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-chart-green-dark
                  "
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTabs;