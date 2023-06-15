import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="JavaScript" link="" />
        <SkillsInput title="TailwindCSS" link="https://tailwindcss.com/" />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="Git" link="https://git-scm.com/doc" />
        <SkillsInput title="PHP" link="https://www.php.net/" />
        <SkillsInput title="SQL" link="https://www.mysql.com/" />
        <SkillsInput title="Docker" link="https://www.docker.com/" />
      </div>
    </div>
  );
};

export default Skills;
