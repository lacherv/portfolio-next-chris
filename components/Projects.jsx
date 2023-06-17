import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPorfolio from "../public/img/projects/dynamicPortfolio.png";
import dashboard from "../public/img/projects/dashboard.webp";
import orebiShopping from "../public/img/projects/orebiShopping.png";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={amazonClone.src}
          title="Amazon Clone"
          link="https://amazonclone.reactbd.com"
        />
        <ProjectCard
          img={cyberBlog.src}
          title="Cyber Security"
          link="https://reactbd.com"
        />
        <ProjectCard
          img={noorShop.src}
          title="noor Shop"
          link="https://reactbd.com"
        />
        <ProjectCard
          img={orebiShopping.src}
          title="orebi Shopping"
          link="https://reactbd.com"
        />
        <ProjectCard
          img={dynamicPorfolio.src}
          title="dynamic Porfolio"
          link="https://reactbd.com"
        />
        <ProjectCard
          img={dashboard.src}
          title="Dashboard"
          link="https://reactbd.com"
        />
      </div>
    </div>
  );
};

export default Projects;
