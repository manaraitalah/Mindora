// src/components/activities-library/activity-card.tsx

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

export type ActivityCategory =
  | "Breathing"
  | "Meditation"
  | "Mindfulness"
  | "Sleep"
  | "Focus"
  | "Self-esteem"
  | "Gratitude";

export interface Activity {
  id: string;
  title: string;
  duration: string;
  category: ActivityCategory;
  description?: string;
  image?: StaticImageData;
  completed?: boolean;
}

interface Props {
  activity: Activity;
}

const ActivityCard = ({ activity }: Props) => {
  const router = useRouter();
  const handleViewDetails = (id: string) => {
    router.push(`activity/${id}`);
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle bg-background transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-32 bg-surface">
        {activity.image ? (
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl">
            🌿
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-text-primary">{activity.title}</h3>

        <p className="mt-2 text-sm text-text-secondary">{activity.duration}</p>

        <button
          onClick={() => handleViewDetails(activity.id)}
          className="mt-5 w-full rounded-xl border border-border-subtle bg-background py-3 text-sm font-medium text-text-secondary transition hover:bg-brand-dark hover:text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
