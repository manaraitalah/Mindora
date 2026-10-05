
import { CounselorProfile } from "./profile-header";
import TagGroup from "./tag-group";

interface Props {
  profile: CounselorProfile;
}

const AboutSection = ({ profile }: Props) => {
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
      <h2
        className="
          text-lg
          font-semibold
          text-text-primary
        "
      >
        About Dr. Lin
      </h2>

      <p
        className="
          mt-4
          max-w-3xl
          text-sm
          leading-7
          text-text-secondary
        "
      >
        {profile.about}
      </p>

      <div
        className="
          mt-7
          space-y-6
        "
      >
        <TagGroup title="Specialties" items={profile.specialties} />

        <TagGroup title="Approaches" items={profile.approaches ?? []} />

        <div>
          <h4
            className="
              text-sm
              font-semibold
              text-text-primary
            "
          >
            Languages
          </h4>

          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-3
            "
          >
            {profile.languages?.map((language) => (
              <span
                key={language}
                className="
                  text-sm
                  text-text-secondary
                "
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;