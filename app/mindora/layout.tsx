import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/side-bar";

interface Props {
  children: React.ReactNode;
}

export default function MindoraLayout({ children }: Props) {
  return (
    <div className="h-screen overflow-hidden bg-[#f8faf8] p-4">
      <div className="flex h-full gap-5">
        <Sidebar />

        <main className="min-w-0 flex-1 overflow-y-auto px-4 py-5 lg:px-7">
          {children}
        </main>
      </div>
    </div>
  );
}
