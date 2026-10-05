
export interface ProfileTag {
  id: string;
  name: string;
}

interface Props {
  title: string;
  items: ProfileTag[];
}

const TagGroup = ({ title, items }: Props) => {
  return (
    <div>
      <h4
        className="
          text-sm
          font-semibold
          text-text-primary
        "
      >
        {title}
      </h4>

      <div
        className="
          mt-3
          flex
          flex-wrap
          gap-2
        "
      >
        {items.map((item) => (
          <span
            key={item.id}
            className="
              rounded-full
              bg-surface-muted
              px-4
              py-2
              text-xs
              text-text-secondary
            "
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagGroup;