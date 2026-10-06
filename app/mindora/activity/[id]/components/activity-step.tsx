import { ChevronRight } from "lucide-react";

type BreathingStep = {
  id: number;
  title: string;
  duration: number;
};
type ActivityStepsProps = {
  steps: BreathingStep[];
  activeStep: number;
  onStepChange?: (step: number) => void;
};

export function ActivitySteps({
  steps,
  activeStep,
  onStepChange,
}: ActivityStepsProps) {
  return (
    <aside className="w-full rounded-2xl border border-[#E8EBE9] bg-white p-4 ">
      <div className="mb-3 flex items-center gap-1">
        <h2 className="text-sm font-semibold text-[#29332E]">Steps</h2>

        <ChevronRight size={14} strokeWidth={1.8} className="text-[#7A827E]" />
      </div>

      <div>
        {steps.map((step) => {
          const isActive = activeStep === step.id;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onStepChange?.(step.id)}
              className={[
                "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left",
                "transition-colors duration-200",
                isActive ? "bg-[#F4F3F0]" : "hover:bg-[#F8F9F8]",
              ].join(" ")}
            >
              <span className="w-3 text-xs font-medium text-[#53605A]">
                {step.id}
              </span>

              <span
                className={[
                  "text-sm",
                  isActive
                    ? "font-medium text-[#26312B]"
                    : "font-normal text-[#66706B]",
                ].join(" ")}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
