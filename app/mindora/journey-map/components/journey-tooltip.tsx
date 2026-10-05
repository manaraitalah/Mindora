export type JourneyEventType =
  | "session"
  | "check-in"
  | "journal"
  | "activity"
  | "milestone";

export interface JourneyChartPoint {
  id: string;
  date: string;
  x: number;
  y: number;
  type: JourneyEventType;
  title: string;
  description: string;
}

interface JourneyTooltipProps {
  point: JourneyChartPoint;
  position: {
    x: number;
    y: number;
  };
}

const JourneyTooltip = ({
  point,
  position,
}: JourneyTooltipProps) => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        z-30
        w-[220px]
        -translate-x-1/2
        -translate-y-full
        rounded-xl
        border
        border-border-subtle
        bg-background
        p-4
        shadow-xl
      "
      style={{
        left: position.x,
        top: position.y - 15,
      }}
    >
      <p className="text-[11px] font-medium text-text-muted">
        {point.date}
      </p>

      <h4 className="mt-1 text-sm font-semibold text-text-primary">
        {point.title}
      </h4>

      <p className="mt-1 text-xs leading-5 text-text-secondary">
        {point.description}
      </p>

      <div
        className="
          absolute
          -bottom-1.5
          left-1/2
          h-3
          w-3
          -translate-x-1/2
          rotate-45
          border-b
          border-r
          border-border-subtle
          bg-background
        "
      />
    </div>
  );
};

export default JourneyTooltip;