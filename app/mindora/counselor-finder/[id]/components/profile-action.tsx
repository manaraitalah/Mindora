
const ProfileActions = () => {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-3
      "
    >
      <button
        className="
          rounded-xl
          bg-chart-green-dark
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

      <button
        className="
          rounded-xl
          border
          border-border-subtle
          bg-background
          py-3
          text-sm
          font-medium
          text-text-secondary
          transition
          hover:bg-surface-muted
        "
      >
        Message
      </button>

      <button
        className="
          rounded-xl
          border
          border-border-subtle
          bg-background
          py-3
          text-sm
          font-medium
          text-text-secondary
          transition
          hover:bg-surface-muted
        "
      >
        Save
      </button>
    </div>
  );
};

export default ProfileActions;
