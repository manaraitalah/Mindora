import { FiCalendar, FiCheck } from "react-icons/fi";

import { BookingForm } from "../page";
import Button from "@/components/ui/buttons/primary-button";

type ConfirmationStepProps = {
  booking: BookingForm;
  counselorName?: string;
  onClose?: () => void;
  onAddToCalendar?: () => void;
  onViewSessions?: () => void;
};

export function ConfirmationStep({
  booking,
  counselorName = "Dr. Sarah Lin",
  onClose,
  onAddToCalendar,
  onViewSessions,
}: ConfirmationStepProps) {
  return (
    <section className="flex justify-center p-4">
      <div
        className="
          relative
          flex
          min-h-[520px]
          w-full
          flex-col
          items-center
          overflow-hidden
          rounded-[22px]
          bg-background
          px-6
          pb-6
          pt-8
          text-center
        "
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32">
          <span className="absolute left-5 top-3 h-5 w-2 rotate-[-30deg] rounded-full bg-surface-soft" />
          <span className="absolute left-12 top-16 h-2 w-2 rounded-full bg-surface-active" />
          <span className="absolute right-10 top-8 h-4 w-2 rotate-[35deg] rounded-full bg-surface-active" />
          <span className="absolute right-5 top-20 h-2 w-2 rounded-full bg-surface-soft" />
          <span className="absolute left-6 top-28 h-2 w-2 rounded-full bg-surface-soft" />
        </div>

        <div
          className="
            relative
            z-10
            mt-3
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-chart-green
            text-white
            shadow-[0_5px_18px_rgba(53,104,76,0.18)]
          "
        >
          <FiCheck size={34} strokeWidth={2.3} />
        </div>

        <h1 className="relative z-10 mt-6 text-[24px] font-semibold text-text-primary">
          You're all set!
        </h1>

        <p className="relative z-10 mt-3 max-w-[240px] text-sm leading-6 text-text-secondary">
          Your session with {counselorName} is confirmed.
        </p>

        <div className="relative z-10 mt-7">
          <p className="text-sm font-medium text-text-secondary">
            Fri, May 16, 2025
          </p>

          <p className="mt-2 text-sm font-medium text-text-secondary">
            1:00 PM - 2:00 PM (60 min)
          </p>
        </div>

        <div className="mt-auto w-full space-y-3 pt-8">
          <Button
            type="button"
            variant="primary"
            onClick={onAddToCalendar}
            leftIcon={<FiCalendar size={17} />}
          >
            Add to Calendar
          </Button>

          <Button type="button" variant="outline" onClick={onViewSessions}>
            View My Sessions
          </Button>
        </div>
      </div>
    </section>
  );
}
