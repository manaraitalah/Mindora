"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import doctorImage from "@/assets/images/christina-wocintechchat-com-m-SJvDxw0azqw-unsplash.jpg"
export default function NextCounselingSession() {
  return (
    <div>
      {/* Session time */}
      <p className="text-sm font-medium text-text-primary">
        Tomorrow
        <span className="mx-2 text-text-muted">·</span>
        10:00 AM
        <span className="ml-1 text-text-secondary">(50 min)</span>
      </p>

      {/* Counselor */}
      <div className="mt-5 flex gap-4">
        <Image
          src={doctorImage}
          alt="Dr. Sarah Lin"
          width={112}
          height={128}
          className="h-32 w-28 rounded-lg object-cover"
        />

        <div className="flex flex-col justify-center">
          <h3 className="text-base font-semibold text-text-primary">
            Dr. Sarah Lin
          </h3>

          <p className="mt-1 text-sm text-text-secondary">
            Clinical Psychologist
          </p>

          <p className="mt-5 text-xs text-text-muted">
            Working on
          </p>

          <p className="mt-1 text-sm text-text-primary">
            Managing anxiety &<br />
            building confidence
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-xl border border-border-subtle bg-background py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface"
        >
          View Details
        </button>

        <button
          type="button"
          className="flex-1 rounded-xl border border-border-subtle bg-background py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface"
        >
          Message
        </button>
      </div>
    </div>
  );
}