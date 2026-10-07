import { ReactNode } from "react";

type StatusBlockProps = {
  title: string;
  content: ReactNode;
};

export function StatusBlock({ title, content }: StatusBlockProps) {
  return (
    <div className="border-b border-[#eceae5] py-5 first:pt-0">
      <h3 className="mb-3 text-sm font-semibold text-[#383b39]">{title}</h3>

      {content}
    </div>
  );
}
