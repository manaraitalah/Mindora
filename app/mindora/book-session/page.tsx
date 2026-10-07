"use client";
import { Stepper } from "@/components/ui/stepper/stepper";
import { useState } from "react";
import { CounselorStep } from "./components/counselor-step";
import { DateTimeStep } from "./components/date-time-step";
import { SessionTypeStep } from "./components/session-type-step";
import { GoalsStep } from "./components/goal-step";
import { PaymentStep } from "./components/payment-step";
import { ConfirmationStep } from "./components/confirmation-step";

export type BookingForm = {
  counselorId?: string;

  date?: string;
  time?: string;

  sessionTypeId?: string;

  goals: string[];

  paymentMethodId?: string;
};

const steps = [
  {
    id: 1,
    label: "Counselor",
  },
  {
    id: 2,
    label: "Date & Time",
  },
  {
    id: 3,
    label: "Session Type",
  },
  {
    id: 4,
    label: "Goals",
  },
  {
    id: 5,
    label: "Payment",
  },
  {
    id: 6,
    label: "Confirm",
  },
];
export default function Page() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [booking, setBooking] = useState<BookingForm>({
    goals: [],
  });

  const nextStep = () => {
    setCurrentStep((current) => Math.min(current + 1, 6));
  };

  const previousStep = () => {
    setCurrentStep((current) => Math.max(current - 1, 1));
  };

  const updateBooking = (data: Partial<BookingForm>) => {
    setBooking((current) => ({
      ...current,
      ...data,
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CounselorStep
            booking={booking}
            updateBooking={updateBooking}
            onContinue={nextStep}
          />
        );

      case 2:
        return (
          <DateTimeStep
            booking={booking}
            updateBooking={updateBooking}
            onBack={previousStep}
            onContinue={nextStep}
          />
        );

      case 3:
        return (
          <SessionTypeStep
            booking={booking}
            updateBooking={updateBooking}
            onBack={previousStep}
            onContinue={nextStep}
          />
        );

      case 4:
        return (
          <GoalsStep
            booking={booking}
            updateBooking={updateBooking}
            onBack={previousStep}
            onContinue={nextStep}
          />
        );

      case 5:
        return (
          <PaymentStep
            booking={booking}
            updateBooking={updateBooking}
            onBack={previousStep}
            onContinue={nextStep}
          />
        );

      case 6:
        return (
          <ConfirmationStep
            booking={booking}
            counselorName="Dr. Sarah Lin"
            onClose={() => {
              console.log("Close");
            }}
            onAddToCalendar={() => {
              console.log("Add to calendar");
            }}
            onViewSessions={() => {
              console.log("View sessions");
            }}
          />
        );

      //   default:
      //     return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFBFA] p-4">
      <div
        className="
          mx-auto
          max-w-[1450px]
          overflow-hidden
          rounded-[24px]
          border
          border-[#E7EAE8]
          bg-white
        "
      >
        <Stepper steps={steps} currentStep={currentStep} />

        {renderStep()}
      </div>
    </main>
  );
}
