import ContentWrapper from "@/components/ContentWrapper";
import Section from "@/components/Section/Section";
import { Code } from "lucide-react";
import Project from "../../components/Section/SectionElement/Component/Project";
import AnimatedCard from "@/components/Section/SectionElement/Component/AnimatedCard";

export default function Sections() {
  return (
    <ContentWrapper>
      <div className="w-full">
      <Section
          icon={<Code className="h-7 w-7" />}
          title="Working ATM"
          items={[
            <Project key="project" />,
            <AnimatedCard key="animatedCard" />,
          ]}
        />  
      </div>
    </ContentWrapper>
  );
}
