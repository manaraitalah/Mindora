
import {
  FiCheck,
  FiHeart,
  FiMoreHorizontal,
  FiShare2,
  FiStar,
} from "react-icons/fi";

import MatchBadge from "./match-badge";

export interface CalendarDay {
  day: number;
  available: boolean;
}

export interface ProfileTag {
  id: string;
  name: string;
}

export interface CounselorProfile {
  id: string;
  name: string;
  verified: boolean;
  image: string;
  title: string;
  license: string;
  experience: string;
  rating: number;
  reviews: number;
  match: number;
  about: string;
  specialties: ProfileTag[];
  approaches?: ProfileTag[];
  languages?: string[];
  availability?: CalendarDay[];
  location?: string;
  education?: string;
}

interface Props {
  profile: CounselorProfile;
}

const ProfileHeader = ({ profile }: Props) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border-subtle
        bg-background
        p-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5
          lg:flex-row
          lg:items-start
        "
      >
        {/* Image */}

        <div>
          <img
            src={profile.image}
            alt={profile.name}
            className="
              h-32
              w-32
              rounded-2xl
              object-cover
            "
          />
        </div>

        {/* Information */}

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1
              className="
                text-2xl
                font-semibold
                text-text-primary
              "
            >
              {profile.name}
            </h1>

            {profile.verified && (
              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-chart-green-dark
                  text-white
                "
              >
                <FiCheck className="h-3 w-3" />
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-text-muted">
            {profile.title}
          </p>

          <div className="mt-3 flex items-center gap-2">
            <FiStar className="h-4 w-4 fill-current text-chart-yellow" />

            <span className="font-semibold text-text-primary">
              {profile.rating}
            </span>

            <span className="text-sm text-text-muted">
              ({profile.reviews} reviews)
            </span>
          </div>

          <p className="mt-3 text-sm text-text-secondary">
            {profile.experience}
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">
          <MatchBadge score={profile.match} />

          <div className="flex flex-col gap-2">
            <button
              type="button"
              aria-label="Save counselor"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-border-subtle
                text-text-secondary
                transition
                hover:bg-surface-muted
              "
            >
              <FiHeart className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label="Share counselor profile"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-border-subtle
                text-text-secondary
                transition
                hover:bg-surface-muted
              "
            >
              <FiShare2 className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label="More options"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-border-subtle
                text-text-secondary
                transition
                hover:bg-surface-muted
              "
            >
              <FiMoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
