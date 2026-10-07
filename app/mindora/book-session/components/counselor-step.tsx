"use client";

import { useMemo, useState } from "react";

import SearchBar from "@/components/ui/inputs/search-bar";
import { BookingForm } from "../page";
import { CounselorCard } from "./counselor-card";
import Button from "@/components/ui/buttons/primary-button";

export const counselors = [
  {
    id: "sarah-lin",
    name: "Dr. Sarah Lin",
    title: "Clinical Psychologist",
    rating: 4.9,
    reviews: 128,
    specialties: ["Anxiety", "Trauma", "Self-esteem"],
    price: 180,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    topMatch: true,
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    title: "LPC, NCC",
    rating: 4.8,
    reviews: 96,
    specialties: ["Stress", "CBT"],
    price: 140,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

type CounselorStepProps = {
  booking: BookingForm;
  updateBooking: (data: Partial<BookingForm>) => void;
  onContinue: () => void;
};

export function CounselorStep({
  booking,
  updateBooking,
  onContinue,
}: CounselorStepProps) {
  const [search, setSearch] = useState("");

  const handleSelect = (id: string) => {
    updateBooking({
      counselorId: id,
    });
  };

  const filteredCounselors = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return counselors;
    }

    return counselors.filter((counselor) => {
      const searchableText = [
        counselor.name,
        counselor.title,
        ...counselor.specialties,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [search]);

  return (
    <section className="flex min-h-[600px] flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">
          Choose your counselor
        </h1>

        <p className="mt-2 text-sm text-text-secondary">
          Browse our licensed professionals and find the right fit.
        </p>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="flex-1 space-y-3">
        {filteredCounselors.length > 0 ? (
          filteredCounselors.map((counselor) => (
            <CounselorCard
              key={counselor.id}
              counselor={counselor}
              selected={booking.counselorId === counselor.id}
              onSelect={handleSelect}
            />
          ))
        ) : (
          <div className="rounded-xl border border-border-subtle bg-surface-muted p-6 text-center">
            <p className="text-sm font-medium text-text-primary">
              No counselors found
            </p>

            <p className="mt-1 text-xs text-text-secondary">
              Try searching by name, specialty, or profession.
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="button"
          variant="primary"
          onClick={onContinue}
          disabled={!booking.counselorId}
          className="w-auto px-8 py-3"
        >
          Continue
        </Button>
      </div>
    </section>
  );
}
