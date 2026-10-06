// src/components/activities-library/CategoriesSidebar.tsx

import {
  FiActivity,
  FiHeart,
  FiLayers,
  FiMoon,
  FiRefreshCw,
  FiSmile,
  FiStar,
  FiTarget,
  FiUsers,
  FiWind,
  FiZap,
} from "react-icons/fi";

import CategoryItem, { ActivityCategoryItem } from "./category-item";

export const categories: ActivityCategoryItem[] = [
  {
    id: "1",
    name: "All Activities",
    count: 64,
    icon: <FiLayers />,
  },
  {
    id: "2",
    name: "Breathing",
    count: 12,
    icon: <FiWind />,
  },
  {
    id: "3",
    name: "Meditation",
    count: 14,
    icon: <FiRefreshCw />,
  },
  {
    id: "4",
    name: "Mindfulness",
    count: 18,
    icon: <FiActivity />,
  },
  {
    id: "5",
    name: "Stress Relief",
    count: 20,
    icon: <FiZap />,
  },
  {
    id: "6",
    name: "Anxiety Support",
    count: 9,
    icon: <FiHeart />,
  },
  {
    id: "7",
    name: "Sleep",
    count: 9,
    icon: <FiMoon />,
  },
  {
    id: "8",
    name: "Focus",
    count: 12,
    icon: <FiTarget />,
  },
  {
    id: "9",
    name: "Self-esteem",
    count: 11,
    icon: <FiSmile />,
  },
  {
    id: "10",
    name: "Relationships",
    count: 8,
    icon: <FiUsers />,
  },
  {
    id: "11",
    name: "Gratitude",
    count: 9,
    icon: <FiStar />,
  },
];

const CategoriesSidebar = () => {
  return (
    <div className="rounded-2xl border border-border-subtle bg-background p-5">
      <h2 className="mb-5 text-lg font-semibold text-text-primary">
        Categories
      </h2>

      <div className="space-y-1">
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSidebar;
