"use client";

import Select, {
  SingleValue,
  StylesConfig,
} from "react-select";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
}

export default function Dropdown({
  value,
  options,
  onChange,
  placeholder = "Select",
  className = "",
  isDisabled = false,
}: DropdownProps) {
  const selectedOption =
    options.find((option) => option.value === value) ?? null;

  const handleChange = (
    option: SingleValue<DropdownOption>,
  ) => {
    onChange(option?.value ?? "");
  };

  const customStyles: StylesConfig<DropdownOption, false> = {
    control: (base, state) => ({
      ...base,
      minHeight: "42px",
      borderRadius: "12px",
      borderColor:"var(--color-border-subtle)",
      backgroundColor: "var(--background)",
      boxShadow: state.isFocused
        ? "0 0 0 2px color-mix(in srgb, var(--brand-primary) 20%, transparent)"
        : "none",
      cursor: "pointer",
      "&:hover": {
        borderColor: "var(--color-border-subtle)",
      },
    }),

    valueContainer: (base) => ({
      ...base,
      padding: "0 12px",
    }),

    singleValue: (base) => ({
      ...base,
      color: "var(--text-primary)",
      fontSize: "14px",
      fontWeight: 500,
    }),

    placeholder: (base) => ({
      ...base,
      color: "var(--text-secondary)",
      fontSize: "14px",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: (base, state) => ({
      ...base,
      color: "var(--text-secondary)",
      padding: "0 10px",
      transition: "transform 0.2s ease",
      transform: state.selectProps.menuIsOpen
        ? "rotate(180deg)"
        : "rotate(0deg)",
      "&:hover": {
        color: "var(--text-primary)",
      },
    }),

    menu: (base) => ({
      ...base,
      marginTop: "6px",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "var(--background)",
      border: "1px solid var(--color-border-subtle)",
      boxShadow:
        "0 8px 24px rgba(41, 66, 56, 0.08)",
      zIndex: 50000,
    }),

    menuList: (base) => ({
      ...base,
      padding: "4px",
    }),

    option: (base, state) => ({
      ...base,
      borderRadius: "8px",
      padding: "9px 12px",
      fontSize: "14px",
      cursor: "pointer",
      backgroundColor: state.isSelected
        ? "var(--surface-active)"
        : state.isFocused
          ? "var(--surface)"
          : "transparent",
      color: state.isSelected
        ? "var(--text-primary)"
        : "var(--text-secondary)",
      fontWeight: state.isSelected ? 500 : 400,
    }),
  };

  return (
    <Select
      instanceId="dropdown"
      className={className}
      value={selectedOption}
      options={options}
      onChange={handleChange}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isSearchable={false}
      isClearable={false}
      styles={customStyles}
    />
  );
}