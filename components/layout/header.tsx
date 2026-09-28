"use client";

import { ReactNode } from "react";

interface HeaderAction {
  id: string;
  component: ReactNode;
  ariaLabel?: string;
}

interface HeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  actions?: HeaderAction[];
}

export default function Header({
  title,
  description,
  icon,
  actions = [],
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-2">
      {/* Greeting */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          {title}

          {icon && <span className="ml-2">{icon}</span>}
        </h1>

        {description && (
          <p className="mt-2 text-sm text-text-secondary">
            {description}
          </p>
        )}
      </div>

      {/* Actions */}
      {actions.length > 0 && (
        <div className="flex items-center gap-3">
          {actions.map((action) => (
            <div key={action.id} aria-label={action.ariaLabel}>
              {action.component}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

