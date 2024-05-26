import { Github, Linkedin, Twitter } from "lucide-react";
import SingleSocialIcon from "./SingleSocialIcon";

export default function SocialIcons() {
  return (
    <div className="flex flex-row justify-start items-center gap-3">
      <SingleSocialIcon
        icon={<Github className="h-5 w-5" />}
        href="https://github.com/aqeox"
      />
      <SingleSocialIcon
        icon={<Linkedin className="h-5 w-5" />}
        href="https://www.linkedin.com/in/hassan-amin-b5693b170/"
      />
      <SingleSocialIcon
        icon={<Twitter className="h-5 w-5" />}
        href="https://x.com/youwdin"
      />
    </div>
  );
}
