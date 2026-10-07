import { FiCreditCard, FiPlusCircle, FiShield } from "react-icons/fi";

type PaymentOptionProps = {
  type: "insurance" | "card" | "add";
  title: string;
  subtitle?: string;
  selected?: boolean;
  badge?: string;
  onClick?: () => void;
};

const icons = {
  insurance: FiShield,
  card: FiCreditCard,
  add: FiPlusCircle,
};

export function PaymentOption({
  type,
  title,
  subtitle,
  selected = false,
  badge,
  onClick,
}: PaymentOptionProps) {
  const Icon = icons[type];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        border
        p-4
        text-left
        transition
        ${
          selected
            ? "border-brand-primary bg-surface-muted shadow-[0_0_0_2px_rgba(44,101,70,0.06)]"
            : "border-border-subtle bg-background hover:border-brand-primary/40"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-lg
            ${
              selected
                ? "bg-surface-soft text-brand-primary"
                : "bg-surface-muted text-text-muted"
            }
          `}
        >
          <Icon size={17} strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-text-primary">{title}</h3>

            {badge && (
              <span className="rounded-full bg-surface-soft px-2.5 py-1 text-[10px] font-medium text-brand-primary">
                {badge}
              </span>
            )}
          </div>

          {subtitle && (
            <p className="mt-1 text-xs text-text-secondary">{subtitle}</p>
          )}
        </div>

        {type !== "add" && (
          <span
            className={`
              flex
              h-4
              w-4
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              ${
                selected
                  ? "border-brand-dark bg-brand-dark"
                  : "border-text-muted"
              }
            `}
          >
            {selected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
          </span>
        )}
      </div>
    </button>
  );
}
