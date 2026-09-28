"use client";

import BasicBorderCard from "@/components/ui/cards/basic-border-card";
import { ChevronRight } from "lucide-react";
import ResourceCard, { Resource } from "./resource-card";


const resources: Resource[] = [
  {
    id: "anxiety",
    title: "Understanding Anxiety",
    type: "Article",
    meta: "6 min read",
    image: "/images/resources/anxiety.jpg",
  },
  {
    id: "self-compassion",
    title: "Self-Compassion Workbook",
    type: "Worksheet",
    meta: "",
    image: "/images/resources/self-compassion.jpg",
  },
  {
    id: "sleep",
    title: "Sleep Hygiene Guide",
    type: "Guide",
    meta: "8 min read",
    image: "/images/resources/sleep.jpg",
  },
  {
    id: "morning-audio",
    title: "Mindful Morning Audio",
    type: "Audio",
    meta: "10 min",
    image: "/images/resources/morning-audio.jpg",
  },
];

type RecommendedResourcesProps = {
  onResourceClick?: (resource: Resource) => void;
  onViewMore?: () => void;
};

export default function RecommendedResources({
  onResourceClick,
  onViewMore,
}: RecommendedResourcesProps) {
  return (
    <BasicBorderCard
      title="Recommended for you"
      className="w-full rounded-[24px] px-5 py-5 sm:px-6"
    >
      <p className="mt-[-2px] text-xs text-text-muted">
        Curated resources to support your growth
      </p>

      <div className="mt-4 flex items-stretch gap-3">
        <div
          className="
            flex
            min-w-0
            flex-1
            gap-3
            overflow-x-auto
            scroll-smooth
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onClick={onResourceClick}
            />
          ))}
        </div>
      </div>
    </BasicBorderCard>
  );
}