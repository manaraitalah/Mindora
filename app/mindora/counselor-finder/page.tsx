"use client"
import { useMemo, useState } from "react";

import CounselorHeader from "./components/counselor-header";
import SearchBar from "./components/search-bar";
import FilterChips, { CounselorCategory } from "../../../components/ui/inputs/filter-bar";
import CounselorList from "./components/counselor-list";

export const counselors = [
  {
    id: "1",
    name: "Dr. Sarah Lin",
    verified: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "UCC • 8 years experience",
    experience: "Specializes in anxiety and relationship counseling",
    match: 94,
    price: 140,
    categories: ["Anxiety", "Depression", "CBT", "Mindfulness"],
    availability: {
      label: "Tomorrow",
      date: "10:00 AM",
    },
    description:
      "Helping people improve emotional balance and confidence.",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "LCSW • 10 years experience",
    experience: "Trauma and stress recovery specialist",
    match: 91,
    price: 130,
    categories: ["Depression", "Trauma", "CBT"],
    availability: {
      label: "Tomorrow",
      date: "11:00 AM",
    },
    description:
      "Focused on trauma recovery and emotional wellness.",
  },
  {
    id: "3",
    name: "Dr. Emily Harper",
    verified: true,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    profession: "Psychologist • 12 years experience",
    experience: "Relationship counseling specialist",
    match: 87,
    price: 120,
    categories: ["Mindfulness", "CBT"],
    availability: {
      label: "May 18",
      date: "10:00 AM",
    },
    description: "Supporting individuals through personal growth.",
  },
];

const CounselorFinder = () => {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState<
    CounselorCategory | "Best Match"
  >("Best Match");

  const filteredCounselors = useMemo(() => {
    return counselors.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "Best Match" || item.categories.includes(category);

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-6xl">
        <CounselorHeader />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <FilterChips
          active={category}
          onChange={setCategory}
        />

        <CounselorList items={filteredCounselors} />
      </div>
    </div>
  );
};

export default CounselorFinder;