export type Resource = {
  id: string;
  title: string;
  type: string;
  meta: string;
  image: string;
};

type ResourceCardProps = {
  resource: Resource;
  onClick?: (resource: Resource) => void;
};

export default function ResourceCard({
  resource,
  onClick,
}: ResourceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(resource)}
      className="
        group
        flex
        w-[190px]
        shrink-0
        items-center
        gap-3
        rounded-[14px]
        border
        border-border-subtle
        bg-background
        p-2
        text-left
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-input-border
        hover:shadow-md
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-icon-secondary/40
        focus-visible:ring-offset-2
        sm:w-[205px]
      "
    >
      {/* Image */}
      <div
        className="
          h-[66px]
          w-[52px]
          shrink-0
          overflow-hidden
          rounded-[9px]
          bg-surface
        "
      >
        <img
          src={resource.image}
          alt=""
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-300
            group-hover:scale-[1.04]
          "
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            line-clamp-2
            text-xs
            font-semibold
            leading-[1.35]
            text-text-primary
          "
        >
          {resource.title}
        </h3>

        <p
          className="
            mt-1
            text-[10px]
            leading-4
            text-text-muted
          "
        >
          {resource.type}

          {resource.meta && (
            <>
              <span className="mx-1" aria-hidden="true">
                •
              </span>

              {resource.meta}
            </>
          )}
        </p>
      </div>
    </button>
  );
}