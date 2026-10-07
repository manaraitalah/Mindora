"use client";
import { useState } from "react";
import ActivitiesHeader from "./components/activity-header";
import SearchBar from "../../../components/ui/inputs/search-bar";
import RecommendedSection from "./components/recommended-section";
import CategoriesSidebar from "./components/category-sidebar";
import RecentlyCompleted from "./components/completed-activities";

const ActivitiesLibrary = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen bg-white rounded-2xl p-6">
      <div className="mx-auto max-w-7xl">
        <div className=" flex justify-between">
          <ActivitiesHeader />
          <div className=" w-[500px]">
            {" "}
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          <main className="space-y-6">
            <RecommendedSection />
            <RecentlyCompleted />
          </main>

          <aside>
            <CategoriesSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesLibrary;
