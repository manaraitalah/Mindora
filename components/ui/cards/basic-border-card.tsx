import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  headerRight?: ReactNode;
  className?: string;
}

export default function BasicBorderCard({
  title,
  children,
  headerRight,
  className = "",
}: CardProps) {
  return (
    <section
      className={`rounded-2xl border border-border-subtle bg-background p-5 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold text-text-primary">
          {title}
        </h2>

        {headerRight && (
          <div className="shrink-0">
            {headerRight}
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        {children}
      </div>

    
    </section>
  );
}