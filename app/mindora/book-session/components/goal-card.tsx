type GoalChipProps = {
  label: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function GoalChip({
  label,
  selected,
  disabled = false,
  onClick,
}: GoalChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        px-3.5
        py-2
        text-sm
        font-normal
        transition

        ${
          selected
            ? "border-brand-primary bg-surface-soft text-brand-dark shadow-[0_0_0_1px_rgba(44,101,70,0.06)]"
            : "border-border-subtle bg-background text-text-secondary hover:border-brand-primary/40"
        }

        ${disabled ? "cursor-not-allowed opacity-40" : ""}
      `}
    >
      <span
        className={`
          flex
          h-4
          w-4
          items-center
          justify-center
          rounded-full
          border
          ${selected ? "border-brand-primary" : "border-text-muted"}
        `}
      >
        {selected && (
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
        )}
      </span>

      {label}
    </button>
  );
}
