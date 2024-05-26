import ContentWrapper from "@/components/ContentWrapper";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import Header from "@/components/texts/Header/Header";

export default function Landing() {
  return (
    <ContentWrapper>
      <div className="flex flex-col justify-start items-center mt-40 mb-20">
        <Header
          name="Hassan Amin"
          description="Passionate UI/UX Designer. I help businesses elevate their digital products and user experiences to drive customer engagement and satisfaction."
          socialIcons={<SocialIcons />}
        />
      </div>
    </ContentWrapper>
  );
}
