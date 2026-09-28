type MoodType = "good" | "neutral" | "low";

interface MoodIconProps {
  type: MoodType;
}

const moodConfig = {
  good: {
    background: "bg-mood-good-bg",
    foreground: "text-mood-good",
  },
  neutral: {
    background: "bg-mood-neutral-bg",
    foreground: "text-mood-neutral",
  },
  low: {
    background: "bg-mood-low-bg",
    foreground: "text-mood-low",
  },
};

export default function MoodIcon({
  type,
}: MoodIconProps) {
  const config = moodConfig[type];

  return (
    <div
      aria-hidden="true"
      className={`
        grid size-7 place-items-center
        rounded-full
        shadow-sm
        ${config.background}
      `}
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-[18px] ${config.foreground}`}
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="8.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="9"
          cy="10"
          r="1"
          fill="currentColor"
        />

        <circle
          cx="15"
          cy="10"
          r="1"
          fill="currentColor"
        />

        {type === "good" && (
          <path
            d="M8.5 14c1 1.5 2.1 2.2 3.5 2.2s2.5-.7 3.5-2.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        )}

        {type === "neutral" && (
          <path
            d="M9 15h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        )}

        {type === "low" && (
          <path
            d="M8.5 16c1-1.5 2.1-2.2 3.5-2.2s2.5.7 3.5 2.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}