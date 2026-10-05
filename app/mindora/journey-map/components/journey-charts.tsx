"use client";

import {
MouseEvent,
useMemo,
useRef,
useState,
} from "react";

import JourneyTooltip, {
JourneyChartPoint,
} from "./journey-tooltip";

export const chartPoints: JourneyChartPoint[] = [
  {
    id: "session-1",
    date: "Mar 5",
    x: 80,
    y: 180,
    type: "session",
    title: "Counseling Session",
    description: "Completed a counseling session.",
  },
  {
    id: "check-in-1",
    date: "Mar 12",
    x: 180,
    y: 160,
    type: "check-in",
    title: "Mood Check-in",
    description: "You checked in with your mood.",
  },
  {
    id: "journal-1",
    date: "Apr 2",
    x: 300,
    y: 145,
    type: "journal",
    title: "Journal Entry",
    description: "Added a new journal entry.",
  },
  {
    id: "activity-1",
    date: "Apr 18",
    x: 420,
    y: 120,
    type: "activity",
    title: "Wellness Activity",
    description: "Completed a wellness activity.",
  },
  {
    id: "milestone-1",
    date: "May 10",
    x: 560,
    y: 95,
    type: "milestone",
    title: "Milestone",
    description: "Reached an important milestone.",
  },
];
export type JourneyEventType =
| "session"
| "check-in"
| "journal"
| "activity"
| "milestone";

interface TooltipState {
point: JourneyChartPoint;
x: number;
y: number;
}

const EVENT_COLORS: Record<JourneyEventType, string> = {
session: "var(--chart-purple)",
"check-in": "var(--chart-green)",
journal: "var(--mood-low)",
activity: "var(--chart-blue)",
milestone: "var(--chart-green-dark)",
};

const EVENT_LABELS: Record<JourneyEventType, string> = {
session: "Counseling Session",
"check-in": "Mood Check-in",
journal: "Journal Entry",
activity: "Wellness Activity",
milestone: "Milestone",
};

const MONTHS = ["Mar", "Apr", "May", "Jun"];

const JourneyChart = () => {
const containerRef = useRef<HTMLDivElement>(null);

const [tooltip, setTooltip] =
useState<TooltipState | null>(null);

const path = useMemo(() => {
if (chartPoints.length === 0) {
return "";
}

if (chartPoints.length === 1) {
  const point = chartPoints[0];

  return `M ${point.x} ${point.y}`;
}

return chartPoints.reduce((currentPath, point, index) => {
  if (index === 0) {
    return `M ${point.x} ${point.y}`;
  }

  const previousPoint = chartPoints[index - 1];

  const controlPointX =
    (previousPoint.x + point.x) / 2;

  return `
    ${currentPath}
    C
    ${controlPointX} ${previousPoint.y},
    ${controlPointX} ${point.y},
    ${point.x} ${point.y}
  `;
}, "");


}, []);

const handleMouseEnter = (
event: MouseEvent<SVGGElement>,
point: JourneyChartPoint,
) => {
if (!containerRef.current) {
return;
}

const containerRect =
  containerRef.current.getBoundingClientRect();

const targetRect =
  event.currentTarget.getBoundingClientRect();

setTooltip({
  point,
  x:
    targetRect.left -
    containerRect.left +
    targetRect.width / 2,
  y:
    targetRect.top -
    containerRect.top,
});


};

const handleMouseLeave = () => {
setTooltip(null);
};

return (
<div className=" rounded-2xl border border-border-subtle bg-background " >
{/* Header */}

  <div
    className="
      flex
      flex-col
      gap-4
      border-b
      border-border-subtle
      px-6
      py-5
      sm:flex-row
      sm:items-center
      sm:justify-between
    "
  >
    <div>
      <h2
        className="
          text-base
          font-semibold
          text-text-primary
        "
      >
        Your Journey
      </h2>

      <p
        className="
          mt-1
          text-xs
          text-text-secondary
        "
      >
        Your progress over time
      </p>
    </div>

    <div className="flex items-center gap-2">
      <span
        className="
          h-2
          w-2
          rounded-full
          bg-chart-green
        "
      />

      <span
        className="
          text-xs
          font-medium
          text-text-secondary
        "
      >
        Progress
      </span>
    </div>
  </div>

  {/* Chart */}

  <div
    ref={containerRef}
    className="
      relative
      overflow-x-auto
      px-4
      pb-2
      pt-6
      sm:px-6
    "
  >
    <div className="min-w-[760px]">
      <svg
        viewBox="0 0 900 270"
        className="h-[280px] w-full"
        role="img"
        aria-label="Journey progress chart"
      >
        <defs>
          <linearGradient
            id="journeyAreaGradient"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="var(--chart-green)"
              stopOpacity="0.12"
            />

            <stop
              offset="100%"
              stopColor="var(--chart-green)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Horizontal grid */}

        {[45, 95, 145, 195].map((y) => (
          <line
            key={y}
            x1="40"
            y1={y}
            x2="860"
            y2={y}
            stroke="var(--chart-grid)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        ))}

        {/* Month separators */}

        {[130, 340, 550, 760].map((x) => (
          <line
            key={x}
            x1={x}
            y1="30"
            x2={x}
            y2="215"
            stroke="var(--color-border-subtle)"
            strokeWidth="1"
            opacity="0.6"
          />
        ))}

        {/* Area under curve */}

        {path && (
          <path
            d={`${path} L 760 215 L 80 215 Z`}
            fill="url(#journeyAreaGradient)"
          />
        )}

        {/* Main curve */}

        <path
          d={path}
          fill="none"
          stroke="var(--chart-green)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Events */}

        {chartPoints.map((point) => {
          const color = EVENT_COLORS[point.type];

          return (
            <g
              key={point.id}
              className="cursor-pointer"
              onMouseEnter={(event) =>
                handleMouseEnter(event, point)
              }
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
              role="button"
              aria-label={`${EVENT_LABELS[point.type]} on ${point.date}`}
            >
              {/* Outer glow */}

              <circle
                cx={point.x}
                cy={point.y}
                r="15"
                fill={color}
                opacity="0.1"
              />

              {/* White border */}

              <circle
                cx={point.x}
                cy={point.y}
                r="9"
                fill="var(--color-background)"
                stroke={color}
                strokeWidth="3"
              />

              {/* Inner point */}

              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={color}
              />
            </g>
          );
        })}

        {/* Month labels */}

        {MONTHS.map((month, index) => (
          <text
            key={month}
            x={130 + index * 210}
            y="250"
            textAnchor="middle"
            fill="var(--chart-muted)"
            fontSize="12"
          >
            {month}
          </text>
        ))}
      </svg>
    </div>

    {tooltip && (
      <JourneyTooltip
        point={tooltip.point}
        position={{
          x: tooltip.x,
          y: tooltip.y,
        }}
      />
    )}
  </div>
</div>


);
};

export default JourneyChart;