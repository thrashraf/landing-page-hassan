interface HeaderProps {
  name: string;
  socialIcons?: React.ReactNode;
  description?: string;
}

export default function Header({
  name,
  description,
  socialIcons
}: HeaderProps) {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex flex-row justify-start items-center gap-4 mb-1">
        <p className="text-xl font-medium text-neutral-700">{name}</p>
        {socialIcons}
      </div>
      <p className="text-neutral-500 text-sm">{description}</p>
    </div>
  );
}
