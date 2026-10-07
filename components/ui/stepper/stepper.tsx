import { FiCheck } from "react-icons/fi";

export interface Step {
  id: number;
  label: string;
}

type StepperProps = {
  currentStep: number;
  steps: Step[];
};

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="w-full border-b border-border-subtle px-6 py-5">
      <div className="mx-auto flex max-w-[1150px] items-start">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="flex flex-1 items-start">
              <div className="flex min-w-[70px] flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    isActive || isCompleted
                      ? "border-brand-dark bg-brand-dark text-white"
                      : "border-border-subtle bg-background text-text-secondary"
                  }`}
                >
                  {isCompleted ? <FiCheck size={15} /> : step.id}
                </div>

                <span
                  className={`mt-2 text-center text-xs font-medium ${
                    isActive ? "text-brand-dark" : "text-text-secondary"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div className="mt-4 h-px flex-1 bg-border-subtle">
                  <div
                    className={`h-full transition-all ${
                      isCompleted ? "w-full bg-brand-primary" : "w-0"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
