"use client";



import {
  CalendarDays,
  Gift,
  Heart,
  NotebookPen,
} from "lucide-react";
import QuickActionItem, { QuickAction } from "./quick-action-item";
import BasicBorderCard from "@/components/ui/cards/basic-border-card";

const quickActions: QuickAction[] = [
  {
    id: "book-session",
    label: "Book Session",
    icon: CalendarDays,
  },
  {
    id: "check-in",
    label: "Start Check-in",
    icon: Heart,
    iconClassName: "text-mood-low",
  },
  {
    id: "journal",
    label: "New Journal Entry",
    icon: NotebookPen,
  },
  {
    id: "activities",
    label: "Browse Activities",
    icon: Gift,
  },
];

type QuickActionsProps = {
  onActionClick?: (action: QuickAction) => void;
};

export default function QuickActions({
  onActionClick,
}: QuickActionsProps) {
  return (
    <BasicBorderCard
      title="Quick actions"
      className="w-full rounded-[28px] px-7 py-7 sm:px-8"
    >
      <div className="mt-3 grid grid-cols-2 gap-x-6 ">
        {quickActions.map((action) => (
          <QuickActionItem
            key={action.id}
            action={action}
            onClick={onActionClick}
          />
        ))}
      </div>
    </BasicBorderCard>
  );
}