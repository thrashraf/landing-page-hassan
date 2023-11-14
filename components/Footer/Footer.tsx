import Link from "next/link";
import ContentWrapper from "../ContentWrapper";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function Footer() {
  return (
    <div className="bottom-0 fixed w-full backdrop-blur bg-white/40 border-t">
      <ContentWrapper>
        <div className="flex flex-row justify-end items-center w-full h-16 gap-4">
          <Link
            className="text-sm text-neutral-500 hover:text-neutral-700 transition-all"
            href="mailto:info@domain.com"
          >
            info@domain.com
          </Link>
          <SocialIcons />
        </div>
      </ContentWrapper>
    </div>
  );
}
