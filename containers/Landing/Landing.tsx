import ContentWrapper from "@/components/ContentWrapper";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import Header from "@/components/texts/Header/Header";

export default function Landing() {
  return (
    <ContentWrapper>
      <div className="flex flex-col justify-start items-center mt-40 mb-20">
        <Header
          name="Your Name Here"
          description="Fullstack dev solving problems at scale. Building user-centric digital products @ Acme Inc. Former chess player. I enjoy running, sailing and spending time with my family."
          socialIcons={<SocialIcons />}
        />
      </div>
    </ContentWrapper>
  );
}
