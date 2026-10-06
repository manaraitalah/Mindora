// src/components/activities-library/RecentlyCompleted.tsx

import { Activity } from "./activity-card";
import CompletedActivityCard from "./completed-activity-card";

export const completedActivities: Activity[] = [
  {
    id: "1",
    title: "Grounding Exercise",
    duration: "8 min",
    category: "Mindfulness",
    completed: true,
    image: "",
  },
  {
    id: "2",
    title: "Evening Reflection",
    duration: "11 min",
    category: "Meditation",
    completed: true,
    image: "",
  },
];

const RecentlyCompleted = () => {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-text-primary">
        Recently completed
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {completedActivities.map((activity) => (
          <CompletedActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyCompleted;
