import Link from "next/link";

interface SingleIconProps {
  icon: React.ReactNode;
  href: string;
}

export default function SingleSocialIcon({ icon, href }: SingleIconProps) {
  return (
    <Link
      href={href}
      className="text-neutral-500 hover:text-neutral-700 transition-all"
    >
      {icon}
    </Link>
  );
}
