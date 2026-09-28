"use client";

import { useId } from "react";
import MoodIcon from "./moon-icon";

type WellbeingPoint = {
  day: string;
  value: number;
};

const wellbeingData: WellbeingPoint[] = [
  { day: "Mon", value: 22 },
  { day: "Tue", value: 32 },
  { day: "Wed", value: 68 },
  { day: "Thu", value: 40 },
  { day: "Fri", value: 86 },
  { day: "Sat", value: 58 },
  { day: "Sun", value: 94 },
];

const SVG_WIDTH = 680;
const SVG_HEIGHT = 245;

const PLOT = {
  left: 60,
  right: 26,
  top: 18,
  bottom: 48,
};

const chartWidth = SVG_WIDTH - PLOT.left - PLOT.right;
const chartHeight = SVG_HEIGHT - PLOT.top - PLOT.bottom;
const baselineY = SVG_HEIGHT - PLOT.bottom;

function mapChartPoints(data: WellbeingPoint[]) {
  return data.map((point, index) => ({
    ...point,
    x:
      PLOT.left +
      (index / Math.max(data.length - 1, 1)) *
        chartWidth,
    y:
      PLOT.top +
      (1 - point.value / 100) *
        chartHeight,
  }));
}

type ChartPoint = ReturnType<
  typeof mapChartPoints
>[number];

function createSmoothPath(points: ChartPoint[]) {
  if (points.length === 0) return "";

  if (points.length === 1) {
    return `M ${points[0].x} ${points[0].y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (
    let index = 0;
    index < points.length - 1;
    index++
  ) {
    const previous =
      points[index - 1] ?? points[index];

    const current = points[index];
    const next = points[index + 1];
    const afterNext =
      points[index + 2] ?? next;

    const controlPoint1X =
      current.x +
      (next.x - previous.x) / 6;

    const controlPoint1Y =
      current.y +
      (next.y - previous.y) / 6;

    const controlPoint2X =
      next.x -
      (afterNext.x - current.x) / 6;

    const controlPoint2Y =
      next.y -
      (afterNext.y - current.y) / 6;

    path += `
      C
      ${controlPoint1X} ${controlPoint1Y},
      ${controlPoint2X} ${controlPoint2Y},
      ${next.x} ${next.y}
    `;
  }

  return path;
}

export default function WellbeingChart() {
  const gradientId = useId().replace(/:/g, "");

  const points = mapChartPoints(
    wellbeingData,
  );

  const introPoints = points.slice(0, 2);
  const primaryPoints = points.slice(1);

  const introPath =
    createSmoothPath(introPoints);

  const primaryPath =
    createSmoothPath(primaryPoints);

  const firstPrimaryPoint =
    primaryPoints[0];

  const lastPrimaryPoint =
    primaryPoints.at(-1);

  const areaPath =
    firstPrimaryPoint && lastPrimaryPoint
      ? `${primaryPath}
         L ${lastPrimaryPoint.x} ${baselineY}
         L ${firstPrimaryPoint.x} ${baselineY}
         Z`
      : "";

  const fridayIndex =
    wellbeingData.findIndex(
      ({ day }) => day === "Fri",
    );

  const fridayPoint = points[fridayIndex];

  const horizontalGridLines = [
    20,
    50,
    80,
  ].map(
    (value) =>
      PLOT.top +
      (1 - value / 100) *
        chartHeight,
  );

  return (
    <div className="relative mt-7 w-full">
      <div className="absolute bottom-[45px] left-0 top-[12px] z-10 flex w-8 flex-col justify-between">
        <MoodIcon type="good" />
        <MoodIcon type="neutral" />
        <MoodIcon type="low" />
      </div>

      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        role="img"
        aria-label="Weekly wellbeing mood chart from Monday to Sunday"
        className="block h-auto w-full overflow-visible"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="var(--chart-green)"
              stopOpacity="0.14"
            />

            <stop
              offset="100%"
              stopColor="var(--chart-green)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Horizontal grid */}
        {horizontalGridLines.map((y) => (
          <line
            key={y}
            x1={PLOT.left}
            y1={y}
            x2={SVG_WIDTH - PLOT.right}
            y2={y}
            stroke="var(--chart-grid)"
            strokeWidth="1"
          />
        ))}

        {/* Vertical day grid */}
        {points.map((point) => (
          <line
            key={`grid-${point.day}`}
            x1={point.x}
            y1={PLOT.top}
            x2={point.x}
            y2={baselineY}
            stroke="var(--chart-grid)"
            strokeWidth="1"
            opacity="0.65"
          />
        ))}

        {/* Filled area */}
        <path
          d={areaPath}
          fill={`url(#${gradientId})`}
          pointerEvents="none"
        />

        {/* Monday → Tuesday */}
        <path
          d={introPath}
          fill="none"
          stroke="var(--chart-purple)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Tuesday → Sunday */}
        <path
          d={primaryPath}
          fill="none"
          stroke="var(--chart-green)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Friday active guide */}
        {fridayPoint && (
          <line
            x1={fridayPoint.x}
            y1={fridayPoint.y + 10}
            x2={fridayPoint.x}
            y2={baselineY + 5}
            stroke="var(--chart-guide)"
            strokeWidth="2"
            strokeDasharray="4 5"
          />
        )}

        {/* Data points */}
        {points.slice(1).map(
          (point, index) => {
            const isTuesday =
              index === 0;

            const isFriday =
              point.day === "Fri";

            return (
              <circle
                key={point.day}
                cx={point.x}
                cy={point.y}
                r={isFriday ? 8 : 6}
                fill={
                  isFriday
                    ? "var(--background)"
                    : isTuesday
                      ? "var(--chart-purple)"
                      : "var(--chart-green)"
                }
                stroke={
                  isTuesday
                    ? "var(--chart-purple)"
                    : "var(--chart-green)"
                }
                strokeWidth={
                  isFriday ? 3 : 2.5
                }
                vectorEffect="non-scaling-stroke"
              />
            );
          },
        )}

        {/* Sunday accent */}
        {lastPrimaryPoint && (
          <circle
            cx={lastPrimaryPoint.x}
            cy={lastPrimaryPoint.y}
            r="8"
            fill="var(--chart-green)"
            fillOpacity="0.16"
          />
        )}

        {lastPrimaryPoint && (
          <circle
            cx={lastPrimaryPoint.x}
            cy={lastPrimaryPoint.y}
            r="5"
            fill="var(--chart-green-dark)"
          />
        )}

        {/* X axis labels */}
        {points.map((point) => {
          const isFriday =
            point.day === "Fri";

          if (isFriday) {
            return (
              <g key={point.day}>
                <rect
                  x={point.x - 21}
                  y={baselineY + 13}
                  width="42"
                  height="30"
                  rx="9"
                  fill="var(--chart-green-dark)"
                />

                <text
                  x={point.x}
                  y={baselineY + 33}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="600"
                  fill="var(--background)"
                >
                  Fri
                </text>
              </g>
            );
          }

          return (
            <text
              key={point.day}
              x={point.x}
              y={baselineY + 33}
              textAnchor="middle"
              fontSize="13"
              fontWeight="500"
              fill="var(--chart-muted)"
            >
              {point.day}
            </text>
          );
        })}
      </svg>
    </div>
  );
}