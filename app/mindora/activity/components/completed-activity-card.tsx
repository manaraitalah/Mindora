import { Activity } from "./activity-card";

interface Props {
  activity: Activity;
}

const CompletedActivityCard = ({ activity }: Props) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border-subtle bg-background p-4">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mood-good-bg">
          ✓
        </div>

        <div>
          <h3 className="text-sm font-semibold text-text-primary">
            {activity.title}
          </h3>

          <p className="mt-1 text-xs text-text-secondary">
            {activity.duration}
          </p>
        </div>
      </div>

      <div className="text-sm font-medium text-text-muted">Completed</div>
    </div>
  );
};

export default CompletedActivityCard;
