type ToggleProps = {
  enabled: boolean;
  onClick: () => void;
};

export function Toggle({ enabled, onClick }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={onClick}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200 ${
        enabled ? "bg-[#185d40]" : "bg-[#c7cbc8]"
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-200 ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}
