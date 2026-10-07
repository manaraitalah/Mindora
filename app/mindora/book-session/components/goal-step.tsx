import Button from "@/components/ui/buttons/primary-button";
import { BookingForm } from "../page";
import { GoalChip } from "./goal-card";

type GoalsStepProps = {
  booking: BookingForm;
  updateBooking: (data: Partial<BookingForm>) => void;
  onBack: () => void;
  onContinue: () => void;
};

const goals = [
  "Anxiety & Stress",
  "Depression",
  "Self-esteem",
  "Relationships",
  "Grief & Loss",
  "Life Transitions",
  "Trauma Recovery",
  "Mindfulness",
];

const MAX_GOALS = 3;

export function GoalsStep({
  booking,
  updateBooking,
  onBack,
  onContinue,
}: GoalsStepProps) {
  const handleGoalToggle = (goal: string) => {
    const isSelected = booking.goals.includes(goal);

    if (isSelected) {
      updateBooking({
        goals: booking.goals.filter((item) => item !== goal),
      });

      return;
    }

    if (booking.goals.length >= MAX_GOALS) {
      return;
    }

    updateBooking({
      goals: [...booking.goals, goal],
    });
  };

  return (
    <section className="flex justify-center p-4">
      <div
        className="
          flex
          min-h-[560px]
          w-full
          flex-col
          rounded-[22px]
          bg-background
          p-5
          shadow-[0_8px_30px_rgba(40,70,55,0.04)]
        "
      >
        <div>
          <h1 className="text-[18px] font-semibold leading-6 text-text-primary">
            What would you like to focus on?
          </h1>

          <p className="mt-2 text-sm leading-5 text-text-secondary">
            Choose up to 3 goals for this upcoming session.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {goals.map((goal) => {
            const selected = booking.goals.includes(goal);
            const disabled = !selected && booking.goals.length >= MAX_GOALS;

            return (
              <GoalChip
                key={goal}
                label={goal}
                selected={selected}
                disabled={disabled}
                onClick={() => handleGoalToggle(goal)}
              />
            );
          })}
        </div>

        <p className="mt-8 text-xs text-text-muted">
          You can always update your goals later.
        </p>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="h-11"
          >
            Back
          </Button>

          <Button
            type="button"
            variant="primary"
            onClick={onContinue}
            disabled={booking.goals.length === 0}
            className="h-11"
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}
