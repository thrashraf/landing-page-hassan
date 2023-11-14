import Link from "next/link";

interface SectionElementProps {
  title: string;
  description?: string;
  href: string;
}

export default function SectionElement({
  title,
  description,
  href
}: SectionElementProps) {
  return (
    <div className="flex flex-col justify-start items-start">
      <Link
        href={href}
        className="text-neutral-600 hover:text-neutral-800 underline underline-offset-2 mb-1"
      >
        {title}
      </Link>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
}
