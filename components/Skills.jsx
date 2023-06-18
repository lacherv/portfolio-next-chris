import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="HTML5" link="https://www.docker.com/" />
        <SkillsInput title="JavaScript" link="" />
        <SkillsInput title="TypeScript" link="" />
        <SkillsInput title="TailwindCSS" link="https://tailwindcss.com/" />
        <SkillsInput title="CSS3" link="" />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Trello" link="" />
        <SkillsInput title="Jira" link="" />
        <SkillsInput title="Python" link="" />
        <SkillsInput title="VS Code" link="" />
        <SkillsInput title="Jenkins" link="" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="Bash Shell" link="" />
        <SkillsInput title="Git" link="https://git-scm.com/doc" />
        <SkillsInput title="PHP" link="https://www.php.net/" />
        <SkillsInput title="SQL" link="https://www.mysql.com/" />
        <SkillsInput title="Docker" link="https://www.docker.com/" />
      </div>
    </div>
  );
};

export default Skills;
