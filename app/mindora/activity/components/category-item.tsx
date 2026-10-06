// src/components/activities-library/CategoryItem.tsx

import { ReactNode } from "react";

export interface ActivityCategoryItem {
  id: string;
  name: string;
  count: number;
  icon: ReactNode;
}

interface Props {
  item: ActivityCategoryItem;
}

const CategoryItem = ({ item }: Props) => {
  return (
    <div className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-surface-muted">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-muted text-sm text-icon-secondary">
          {item.icon}
        </span>

        <span className="text-sm text-text-secondary">{item.name}</span>
      </div>

      <span className="text-xs font-medium text-text-muted">{item.count}</span>
    </div>
  );
};

export default CategoryItem;
