"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleUserRound,
  Compass,
  FileText,
  Heart,
  Home,
  Mail,
  Settings,
  Sparkles,
} from "lucide-react";

import UserProfileInfo from "./user-profile-info-card";
import { FiHeart, FiUser } from "react-icons/fi";

const navigation = [
  { label: "Home", icon: Home, active: true, href: "/mindora/dashboard" },
  { label: "Journey Map", icon: Compass, href: "/mindora/journey-map" },
  { label: "Sessions", icon: CalendarDays, href: "/mindora/sessions" },
  { label: "Counselor", icon: CalendarDays, href: "/mindora/counselor-finder" },
  { label: "Check-ins", icon: CheckCircle2, href: "/mindora/check-ins" },
  { label: "Journal", icon: BookOpen, href: "/mindora/journal" },
  { label: "Activities", icon: Activity, href: "/mindora/activity" },
  { label: "Resources", icon: FileText, href: "/mindora/resources" },
  { label: "Milestones", icon: Sparkles, href: "/mindora/milestones" },
  { label: "Messages", icon: Mail, href: "/mindora/messages" },
  { label: "Settings", icon: Settings, href: "/mindora/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-55 shrink-0 flex-col rounded-2xl border border-border-subtle bg-background px-4 py-5 shadow-sm">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-soft">
          <FiHeart size={20} strokeWidth={1.8} className="text-icon-primary" />
        </div>

        <span className="text-xl font-semibold tracking-tight text-brand-dark">
          Mindora
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                isActive
                  ? "bg-surface-active font-medium text-text-primary"
                  : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
              }`}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="mt-5 rounded-xl bg-surface p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-profile">
            <FiUser
              size={23}
              className="text-icon-secondary"
              strokeWidth={1.5}
            />
          </div>

          <UserProfileInfo name="Jessica Miller" profileUrl="/profile" />
        </div>
      </div>
    </aside>
  );
}
