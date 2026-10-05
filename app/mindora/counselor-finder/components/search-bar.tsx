
import { FiSearch, FiFilter } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <FiSearch
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-text-muted
          "
          size={18}
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search name, specialty or concern..."
          className="
            w-full
            rounded-xl
            border
            border-border-subtle
            bg-background
            py-3
            pl-11
            pr-4
            text-sm
            text-text-primary
            outline-none
            transition
            placeholder:text-text-muted
            focus:border-brand-primary
            focus:ring-2
            focus:ring-brand-primary/10
          "
        />
      </div>

      <button
        type="button"
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-border-subtle
          bg-background
          px-6
          py-3
          text-sm
          font-medium
          text-text-secondary
          transition
          hover:bg-surface-muted
        "
      >
        <FiFilter size={17} />
        Filter
      </button>
    </div>
  );
};

export default SearchBar;
