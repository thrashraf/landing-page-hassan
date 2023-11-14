interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-full max-w-[900px] flex flex-col justify-start items-start">
        {children}
      </div>
    </div>
  );
}
