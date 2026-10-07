import Button from "@/components/ui/buttons/primary-button";
import { BookingForm } from "../page";
import { SessionTypeCard } from "./session-type-card";

type SessionTypeStepProps = {
  booking: BookingForm;
  updateBooking: (data: Partial<BookingForm>) => void;
  onBack: () => void;
  onContinue: () => void;
};

const sessionTypes = [
  {
    id: "individual",
    title: "Individual Therapy",
    description: "One-on-one sessions focused on your personal growth.",
    duration: 60,
    price: 180,
    type: "individual" as const,
  },
  {
    id: "couples",
    title: "Couples Therapy",
    description: "Strengthen your relationship with guided support.",
    duration: 60,
    price: 300,
    type: "couples" as const,
  },
  {
    id: "family",
    title: "Family Therapy",
    description: "Support for the whole family to heal and grow.",
    duration: 60,
    price: 300,
    type: "family" as const,
  },
];

export function SessionTypeStep({
  booking,
  updateBooking,
  onBack,
  onContinue,
}: SessionTypeStepProps) {
  return (
    <section className="flex justify-end p-4">
      <div
        className="
          flex
          min-h-[560px]
          w-full
          flex-col
          rounded-[22px]
          bg-background
          p-5
        "
      >
        <div>
          <h1 className="text-[18px] font-semibold text-text-primary">
            Choose session type
          </h1>

          <p className="mt-1.5 text-sm leading-5 text-text-secondary">
            Select the type of session that best fits your needs.
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {sessionTypes.map((session) => (
            <SessionTypeCard
              key={session.id}
              {...session}
              selected={booking.sessionTypeId === session.id}
              onSelect={(id) =>
                updateBooking({
                  sessionTypeId: id,
                })
              }
            />
          ))}
        </div>

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
            disabled={!booking.sessionTypeId}
            className="h-11"
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}
