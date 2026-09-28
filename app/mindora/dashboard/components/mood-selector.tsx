import { ReactNode } from "react";

interface Mood {
  id: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
}

interface MoodSelectorProps {
  moods: Mood[];
  streakText?: string;
  streakDescription?: string;
}

export default function MoodSelector({
  moods,
  streakText,
  streakDescription,
}: MoodSelectorProps) {
  return (
    <div>
      <div className="flex justify-between">
        {moods.map((mood) => (
          <button
            key={mood.id}
            type="button"
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                mood.active
                  ? "border-brand-primary ring-2 ring-brand-primary"
                  : "border-border-subtle"
              }`}
            >
              {mood.icon}
            </div>

            <span className="text-xs text-text-secondary">
              {mood.label}
            </span>
          </button>
        ))}
      </div>

      {(streakText || streakDescription) && (
        <div className="mt-6">
          {streakText && (
            <p className="text-sm text-text-secondary">
              {streakText}
            </p>
          )}

          {streakDescription && (
            <p className="text-sm font-medium text-text-primary">
              {streakDescription}
            </p>
          )}
        </div>
      )}
    </div>
  );
}