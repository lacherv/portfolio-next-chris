import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperiencesCard from "./ExperiencesCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-2 gap-10">
        <ExperiencesCard
          title="AppsConsulting"
          subTitle="Software Dev Intern"
          icon={<SiReactivex />}
        />
        <ExperiencesCard
          title="AppsConsulting"
          subTitle="Software Dev"
          icon={<SiToptal />}
        />
        <ExperiencesCard
          title="AppsConsulting"
          subTitle="Software Dev"
          icon={<SiFreelancer />}
        />
        <ExperiencesCard
          title="AppsConsulting"
          subTitle="Software Dev"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
