// src/components/activities-library/RecommendedSection.tsx

import ActivityCard, { Activity } from "./activity-card";
import Breather from "@/assets/images/Breather.jpg";
import Meditator from "@/assets/images/Meditator.jpg";
import TheLivingHeart from "@/assets/images/TheLivingHeart.jpg";
import { useRouter } from "next/navigation";

export const recommendedActivities: Activity[] = [
  {
    id: "breathing",
    title: "5-Minute Breathing",
    duration: "5 min • Breathing",
    category: "Breathing",
    image: Breather,
  },
  {
    id: "2",
    title: "Gratitude Practice",
    duration: "7 min • Meditation",
    category: "Meditation",
    image: Meditator,
  },
  {
    id: "3",
    title: "Body Scan Meditation",
    duration: "10 min • Mindfulness",
    category: "Mindfulness",
    image: TheLivingHeart,
  },
];

const RecommendedSection = () => {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-text-primary">
        Recommended for you
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {recommendedActivities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
