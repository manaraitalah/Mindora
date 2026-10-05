
interface MatchBadgeProps {
  score: number;
}

const MatchBadge = ({ score }: MatchBadgeProps) => {
  return (
    <div
      className="
        rounded-2xl
        bg-surface-soft
        px-5
        py-4
        text-center
      "
    >
      <h3
        className="
          text-xl
          font-semibold
          text-brand-dark
        "
      >
        {score}% Match
      </h3>

      <button
        className="
          mt-1
          text-xs
          font-medium
          text-brand-primary
          underline
        "
      >
        Why this match?
      </button>
    </div>
  );
};

export default MatchBadge;
