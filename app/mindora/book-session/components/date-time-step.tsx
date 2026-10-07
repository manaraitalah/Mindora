"use client";

import { useMemo, useState } from "react";

import DayPicker from "@/components/ui/inputs/day-picker";
import { BookingForm } from "../page";
import Button from "@/components/ui/buttons/primary-button";

type DateTimeStepProps = {
  booking: BookingForm;
  updateBooking: (data: Partial<BookingForm>) => void;
  onBack: () => void;
  onContinue: () => void;
};

const availableTimes = ["9:00 AM", "11:00 AM", "1:00 PM"];

const initialDate = new Date(2025, 4, 16);

export function DateTimeStep({
  booking,
  updateBooking,
  onBack,
  onContinue,
}: DateTimeStepProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(
    booking.date ? new Date(booking.date) : initialDate,
  );

  const formattedDate = useMemo(() => {
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }, [selectedDate]);

  const handleDateChange = (date?: Date) => {
    if (!date) return;

    setSelectedDate(date);

    updateBooking({
      date: date.toISOString(),
      time: undefined,
    });
  };

  const handleTimeChange = (time: string) => {
    updateBooking({
      time,
    });
  };

  const canContinue = Boolean(booking.date && booking.time);

  return (
    <section className="flex min-h-[600px] flex-col p-6">
      <div className="flex-1">
        <DayPicker
          variant="inline"
          mode="single"
          selected={selectedDate}
          onSelect={handleDateChange}
          defaultMonth={initialDate}
          className="p-0"
        />

        <div className="mt-4 text-center">
          <p className="text-base font-semibold text-text-primary">
            {formattedDate}
          </p>
        </div>

        <div className="mt-4 flex gap-3">
          {availableTimes.map((time) => {
            const isSelected = booking.time === time;

            return (
              <button
                key={time}
                type="button"
                onClick={() => handleTimeChange(time)}
                className={`
                  h-10
                  w-full
                  rounded-lg
                  border
                  text-[11px]
                  font-medium
                  transition-colors
                  ${
                    isSelected
                      ? "border-brand-primary bg-brand-dark text-white"
                      : "border-border-subtle bg-background text-text-primary hover:bg-surface-active"
                  }
                `}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
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
          disabled={!canContinue}
          className="h-11"
        >
          Continue
        </Button>
      </div>
    </section>
  );
}
