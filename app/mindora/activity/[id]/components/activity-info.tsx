import { Check } from "lucide-react";

type ActivityTip = {
  id: number;
  label: string;
};
type ActivityInfoProps = {
  tips: ActivityTip[];
};

export function ActivityInfo({ tips }: ActivityInfoProps) {
  return (
    <aside className="w-full rounded-2xl border border-[#E8EBE9] bg-white p-5 lg:w-[220px]">
      <section>
        <h2 className="text-base font-semibold text-[#28322D]">
          About this activity
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#727B76]">
          Calm your mind and reduce stress with slow, intentional breathing.
        </p>
      </section>

      <div className="my-5 h-px bg-[#ECEEED]" />

      <section>
        <h3 className="text-sm font-semibold text-[#2D3732]">Goal</h3>

        <p className="mt-2 text-sm text-[#727B76]">
          Relaxation & Stress relief
        </p>
      </section>

      <div className="my-5 h-px bg-[#ECEEED]" />

      <section>
        <h3 className="text-sm font-semibold text-[#2D3732]">Tips</h3>

        <div className="mt-3 space-y-3">
          {tips.map((tip) => (
            <div key={tip.id} className="flex items-center gap-2.5">
              <Check
                size={13}
                strokeWidth={2}
                className="shrink-0 text-[#55705E]"
              />

              <span className="text-xs text-[#707A74]">{tip.label}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
