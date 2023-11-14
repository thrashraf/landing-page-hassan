import ContentWrapper from "@/components/ContentWrapper";
import Section from "@/components/Section/Section";
import { Box, Folder } from "lucide-react";
import DragDrop from "../../components/Section/SectionElement/Component/DragDrop";
import AnimatedCard from "@/components/Section/SectionElement/Component/AnimatedCard";
import InteractiveGraph from "@/components/Section/SectionElement/Component/InteractiveGraph";

export default function Sections() {
  return (
    <ContentWrapper>
      <div className="grid grid-cols-2 gap-10 mb-20">
        <Section
          icon={<Folder className="h-4 w-4" />}
          title="Components"
          description="Small components to test different concepts and learn new stuff."
          items={[
            <DragDrop key="dragDrop" />,
            <AnimatedCard key="animatedCard" />,
            <InteractiveGraph key="interactiveGraph" />
          ]}
        />
        <Section
          icon={<Box className="h-4 w-4" />}
          title="Full Stack projects"
          description="Big boy full stack projects deployed to the cloud."
          items={[
            <DragDrop key="dragDrop" />,
            <AnimatedCard key="animatedCard" />,
            <InteractiveGraph key="interactiveGraph" />
          ]}
        />
        <Section
          className="col-span-2"
          icon={<Box className="h-4 w-4" />}
          title="Blog posts"
          description="Sometimes I write about stuff."
          items={[
            <DragDrop key="dragDrop" />,
            <AnimatedCard key="animatedCard" />,
            <InteractiveGraph key="interactiveGraph" />
          ]}
        />
      </div>
    </ContentWrapper>
  );
}
