import { cn } from "@/lib/utils";

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  items?: React.ReactNode[];
  className?: string;
}

export default function Section({
  icon,
  title,
  description,
  items,
  className
}: SectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-start items-start border rounded-xl p-8 bg-white shadow hover:shadow-lg transition-all",
        className
      )}
    >
      <div className="flex flex-row justify-start items-center gap-2 text-neutral-700">
        {icon}
        <p className="font-medium">{title}</p>
      </div>
      <p className="text-sm text-neutral-500">{description}</p>
      <div className="flex flex-col justify-start items-start gap-4  mt-4">
        {items &&
          items.map((component, index) => {
            return <p key={index}>{component}</p>;
          })}
      </div>
    </div>
  );
}
