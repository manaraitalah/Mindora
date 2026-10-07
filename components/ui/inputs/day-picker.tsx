"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { DayPicker as ReactDayPicker } from "react-day-picker";

import "react-day-picker/style.css";

type CalendarProps = React.ComponentProps<typeof ReactDayPicker> & {
  className?: string;
  variant?: "popup" | "inline";
};

const DayPicker = ({
  className = "",
  variant = "popup",
  ...props
}: CalendarProps) => {
  return (
    <div
      className={`
        w-full
        rounded-2xl
        bg-background
        p-5

        ${variant === "popup" ? "absolute top-full z-50 mt-2 w-[320px]" : ""}

        ${className}
      `}
    >
      <ReactDayPicker
        {...props}
        showOutsideDays
        classNames={{
          months: "flex w-full flex-col",

          month: "w-full space-y-4",

          month_caption: "relative flex items-center justify-center px-1",

          caption_label: "text-sm font-semibold text-text-primary",

          nav: "absolute inset-x-0 top-0 flex items-center justify-between",

          button_previous:
            "inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface-active hover:text-text-primary",

          button_next:
            "inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface-active hover:text-text-primary",

          month_grid: "w-full border-collapse",

          weekdays: "table-row",

          weekday:
            "table-cell h-8 text-center align-middle text-[11px] font-medium text-text-muted",

          week: "table-row",

          day: "table-cell h-9 w-9 p-0 text-center align-middle",

          day_button:
            "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[11px] text-text-primary transition-colors hover:bg-surface-active",

          selected: "!bg-brand-primary !text-white",

          today: "font-semibold text-brand-primary",

          outside: "text-text-muted opacity-35",

          disabled: "cursor-not-allowed opacity-30",

          range_start: "rounded-l-lg bg-brand-primary text-white",

          range_middle: "rounded-none bg-surface-active text-text-primary",

          range_end: "rounded-r-lg bg-brand-primary text-white",
        }}
        components={{
          Chevron: ({ orientation }) =>
            orientation === "left" ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            ),
        }}
      />
    </div>
  );
};

export default DayPicker;
