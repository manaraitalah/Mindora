import { FiFeather } from "react-icons/fi";

export function PreparationTip() {
  return (
    <aside
      className="
        relative
        min-h-[410px]
        overflow-hidden
        rounded-[22px]
        bg-surface
        p-6
      "
    >
      <div className="relative z-10 max-w-[220px]">
        <h2 className="text-[18px] font-semibold text-text-primary">
          Preparation tip
        </h2>

        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Think about what you'd like to focus on and jot down any questions or
          topics.
        </p>
      </div>

      {/* Decorative leaves */}
      <div className="absolute bottom-3 right-3 h-[250px] w-[180px] opacity-70">
        <div className="absolute bottom-0 right-[58px] h-[220px] w-[2px] rotate-[28deg] bg-text-muted" />

        <FiFeather
          className="absolute bottom-[25px] right-[45px] rotate-[35deg] text-text-muted"
          size={58}
          strokeWidth={1.2}
        />

        <FiFeather
          className="absolute bottom-[75px] right-[70px] -rotate-[25deg] text-text-secondary"
          size={48}
          strokeWidth={1.2}
        />

        <FiFeather
          className="absolute bottom-[115px] right-[35px] rotate-[35deg] text-text-muted"
          size={50}
          strokeWidth={1.2}
        />

        <FiFeather
          className="absolute bottom-[155px] right-[63px] -rotate-[20deg] text-text-secondary"
          size={42}
          strokeWidth={1.2}
        />

        <FiFeather
          className="absolute bottom-[185px] right-[25px] rotate-[30deg] text-text-muted"
          size={40}
          strokeWidth={1.2}
        />
      </div>
    </aside>
  );
}
