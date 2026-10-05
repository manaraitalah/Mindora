
export type CounselorCategory =
  | "Anxiety"
  | "Depression"
  | "Stress"
  | "CBT"
  | "Trauma"
  | "Mindfulness";

export const FILTER_CATEGORIES: CounselorCategory[] = [
  "Anxiety",
  "Depression",
  "Stress",
  "CBT",
  "Trauma",
];

export const DEFAULT_CATEGORY = "Best Match";

interface FilterChipsProps {
  active: CounselorCategory | "Best Match";
  onChange: (value: CounselorCategory | "Best Match") => void;
}

const FilterChips = ({
  active,
  onChange,
}: FilterChipsProps) => {
  const filters = [DEFAULT_CATEGORY, ...FILTER_CATEGORIES];

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {filters.map((item) => {
        const selected = active === item;

        return (
          <button
            key={item}
            onClick={() =>
              onChange(item as CounselorCategory | "Best Match")
            }
            className={`
              rounded-full
              border
              px-5
              py-2
              text-sm
              transition-all

              ${
                selected
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-border-subtle bg-background text-text-secondary hover:border-brand-primary"
              }
            `}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;
