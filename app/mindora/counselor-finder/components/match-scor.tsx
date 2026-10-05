interface MatchScoreProps {
  score: number;
}

const MatchScore = ({ score }: MatchScoreProps) => {
  return (
    <div className="text-left">
      <h3
        className="
          text-lg
          font-semibold
          text-brand-dark
        "
      >
        {score}% Match
      </h3>

      <p
        className="
          mt-1
          text-xs
          text-text-muted
        "
      >
        Based on your preferences
      </p>
    </div>
  );
};

export default MatchScore;
