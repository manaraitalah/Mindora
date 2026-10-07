import { FiHeart, FiUser, FiUsers } from "react-icons/fi";

type SessionTypeCardProps = {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  selected?: boolean;
  type: "individual" | "couples" | "family";
  onSelect: (id: string) => void;
};

const icons = {
  individual: FiUser,
  couples: FiHeart,
  family: FiUsers,
};

export function SessionTypeCard({
  id,
  title,
  description,
  duration,
  price,
  selected = false,
  type,
  onSelect,
}: SessionTypeCardProps) {
  const Icon = icons[type];

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`
        w-full
        rounded-2xl
        border
        p-4
        text-left
        transition
        ${
          selected
            ? "border-brand-primary bg-surface-muted shadow-[0_0_0_2px_rgba(44,101,70,0.08)]"
            : "border-border-subtle bg-background hover:border-brand-primary/40"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            ${
              selected
                ? "bg-surface-soft text-brand-primary"
                : "bg-surface-muted text-text-muted"
            }
          `}
        >
          <Icon size={22} strokeWidth={1.7} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-text-primary">{title}</h3>

          <p className="mt-1 text-xs leading-5 text-text-secondary">
            {description}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-text-secondary">{duration} min</span>

            <span className="text-xs font-semibold text-text-primary">
              ${price}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
