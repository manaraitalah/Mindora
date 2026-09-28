
import Link from "next/link";

interface UserProfileInfoProps {
  name: string;
  profileUrl: string;
}

export default function UserProfileInfo({
  name,
  profileUrl,
}: UserProfileInfoProps) {
  return (
    <div className="min-w-0">
      <p className="truncate text-sm font-medium text-text-profile">
        {name}
      </p>

      <Link
        href={profileUrl}
        className="text-xs text-text-muted hover:text-icon-primary"
      >
        View profile →
      </Link>
    </div>
  );
}