
interface CounselorActionsProps {
  onSave?: () => void;
  onBook?: () => void;
}

const CounselorActions = ({
  onSave,
  onBook,
}: CounselorActionsProps) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={onSave}
        className="
          rounded-xl
          border
          border-border-subtle
          bg-background
          px-6
          py-3
          text-sm
          font-medium
          text-text-secondary
          transition
          hover:bg-surface-muted
        "
      >
        ♡<span className="ml-2">Save</span>
      </button>

      <button
        className="
          rounded-xl
          border
          border-border-subtle
          bg-background
          px-8
          py-3
          text-sm
          font-medium
          text-text-secondary
          transition
          hover:bg-surface-muted
        "
      >
        View Profile
      </button>

      <button
        onClick={onBook}
        className="
          flex-1
          rounded-xl
          bg-chart-green-dark
          px-8
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-brand-dark
        "
      >
        Book Session
      </button>
    </div>
  );
};

export default CounselorActions;

