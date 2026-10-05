import { FiCheck } from "react-icons/fi";
import CounselorActions from "./counselor-actions";
import MatchScore from "./match-scor";

export interface Counselor {
  id: string;
  name: string;
  verified: boolean;
  image: string;
  profession: string;
  experience: string;
  match: number;
  price: number;
  categories: any[];
  availability: any;
  description: string;
}

interface Props {
  counselor: Counselor;
}

const CounselorCard = ({ counselor }: Props) => {
  return (
    <article
      className="
        rounded-2xl
        border
        border-border-subtle
        bg-background
        p-5
        transition
        hover:shadow-lg
      "
    >
      <div className="flex justify-between gap-5">
        {/* Image */}

        <div className="flex flex-col items-start gap-4">
          {/* Image */}
          <div className="relative">
            <img
              src={counselor.image}
              alt={counselor.name}
              className="
                h-24
                w-24
                rounded-2xl
                object-cover
              "
            />
          </div>

          {/* Info */}
          <div>
            <div className="relative flex gap-3">
              <h2
                className="
                  flex
                  items-center
                  gap-2
                  text-lg
                  font-semibold
                  text-text-primary
                "
              >
                {counselor.name}
              </h2>

              {counselor.verified && (
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-chart-green-dark
                    text-[10px]
                    text-white
                  "
                >
                  <FiCheck className="h-3 w-3" />
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {counselor.categories.map((category) => (
                <span
                  key={category}
                  className="
                    rounded-full
                    bg-surface-muted
                    px-3
                    py-1
                    text-xs
                    text-text-secondary
                  "
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <p
              className="
                text-sm
                leading-6
                text-text-secondary
              "
            >
              {counselor.description}
            </p>

            <p
              className="
                mt-4
                text-sm
                font-medium
                text-text-secondary
              "
            >
              {counselor.experience}
            </p>
          </div>
        </div>

        {/* Right */}
        <div
          className="
            flex
            min-w-[180px]
            flex-col
            items-start
            justify-between
            gap-5
          "
        >
          <MatchScore score={counselor.match} />

          <div>
            <p
              className="
                text-xs
                text-text-muted
              "
            >
              Next available
            </p>

            <p
              className="
                mt-1
                text-sm
                font-medium
                text-text-primary
              "
            >
              {counselor.availability.label},
              <br />
              {counselor.availability.date}
            </p>
          </div>

          <div>
            <p
              className="
                text-xl
                font-semibold
                text-text-primary
              "
            >
              ${counselor.price}
              <span
                className="
                  ml-1
                  text-sm
                  font-normal
                  text-text-muted
                "
              >
                / session
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="
          mt-5
          border-t
          border-border-subtle
          pt-5
        "
      >
        <CounselorActions
          onSave={() => console.log("save", counselor.id)}
          onBook={() => console.log("book", counselor.id)}
        />
      </div>
    </article>
  );
};

export default CounselorCard;
