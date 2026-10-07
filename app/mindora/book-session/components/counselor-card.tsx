import { FiStar } from "react-icons/fi";

export interface Counselor {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  specialties: string[];
  price: number;
  image: string;
  topMatch?: boolean;
}

type CounselorCardProps = {
  counselor: Counselor;
  selected?: boolean;
  onSelect?: (id: string) => void;
};

export function CounselorCard({
  counselor,
  selected = false,
  onSelect,
}: CounselorCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(counselor.id)}
      className={`
        w-full
        rounded-[14px]
        border
        bg-background
        p-3
        text-left
        transition
        ${
          selected
            ? "border-brand-primary shadow-[0_0_0_2px_rgba(77,128,99,0.08)]"
            : "border-border-subtle hover:border-brand-primary/40"
        }
      `}
    >
      <div className="flex items-start gap-3">
        <img
          src={counselor.image}
          alt={counselor.name}
          className="
            h-[72px]
            w-[72px]
            shrink-0
            rounded-xl
            object-cover
          "
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-text-primary">
                {counselor.name}
              </h3>

              <p className="mt-0.5 text-xs text-text-secondary">
                {counselor.title}
              </p>
            </div>

            {counselor.topMatch && (
              <span
                className="
                  shrink-0
                  rounded-full
                  bg-surface-soft
                  px-3
                  py-1
                  text-[10px]
                  font-medium
                  text-brand-primary
                "
              >
                Top match
              </span>
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            <div className="flex items-center gap-1">
              <FiStar
                size={13}
                className="fill-chart-yellow text-chart-yellow"
              />

              <span className="text-[11px] font-medium text-text-primary">
                {counselor.rating}
              </span>

              <span className="text-[11px] text-text-muted">
                ({counselor.reviews})
              </span>
            </div>

            <span className="text-[10px] text-text-muted">•</span>

            <div className="flex flex-wrap gap-x-1 text-[11px] text-text-secondary">
              {counselor.specialties.map((item, index) => (
                <span key={item}>
                  {item}
                  {index < counselor.specialties.length - 1 && " · "}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-2 text-[11px] font-medium text-text-secondary">
            ${counselor.price} / session
          </p>
        </div>
      </div>
    </button>
  );
}
