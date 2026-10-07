import Button from "@/components/ui/buttons/primary-button";

export type UpcomingSession = {
  id: string;
  date: string;
  month: string;
  day: string;
  time: string;
  counselorName: string;
  sessionType: string;
  duration: number;
  status: string;
  canJoin?: boolean;
};

type UpcomingSessionCardProps = {
  session: UpcomingSession;
  onJoin?: (id: string) => void;
  onReschedule?: (id: string) => void;
  onCancel?: (id: string) => void;
};

export function UpcomingSessionCard({
  session,
  onJoin,
  onReschedule,
  onCancel,
}: UpcomingSessionCardProps) {
  return (
    <article
      className="
        rounded-[20px]
        border
        border-border-subtle
        bg-background
        p-4
        sm:p-5
      "
    >
      <div className="flex gap-4 sm:gap-5">
        {/* Date box */}
        <div
          className="
            flex
            h-[100px]
            w-[82px]
            shrink-0
            flex-col
            items-center
            justify-center
            rounded-2xl
            bg-surface-muted
          "
        >
          <span className="text-sm font-medium tracking-wide text-text-secondary">
            {session.month}
          </span>

          <span className="mt-1 text-[34px] font-medium leading-none text-text-primary">
            {session.day}
          </span>
        </div>

        {/* Session info */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm text-text-secondary">
                {session.date} • {session.time}
              </p>

              <h2 className="mt-2 text-[18px] font-semibold text-text-primary">
                {session.counselorName}
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                {session.sessionType} • {session.duration} min
              </p>
            </div>

            <span
              className="
                w-fit
                rounded-full
                bg-surface-soft
                px-4
                py-1.5
                text-xs
                font-medium
                text-brand-primary
              "
            >
              Confirmed
            </span>
          </div>

          {/* Actions */}
          <div
            className="
              mt-5
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:justify-end
            "
          >
            {session.canJoin && (
              <Button
                type="button"
                variant="secondary"
                onClick={() => onJoin?.(session.id)}
                className="min-w-[160px] sm:w-auto"
              >
                Join Session
              </Button>
            )}

            <Button
              type="button"
              variant="outline"
              onClick={() => onReschedule?.(session.id)}
              className="min-w-[150px] sm:w-auto"
            >
              Reschedule
            </Button>

            <button
              type="button"
              onClick={() => onCancel?.(session.id)}
              className="
                min-w-[140px]
                rounded-xl
                border
                border-[#F1C9C5]
                bg-background
                px-5
                py-2.5
                text-sm
                font-medium
                text-[#D96D65]
                transition
                hover:bg-[#FFF8F7]
                sm:w-auto
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
