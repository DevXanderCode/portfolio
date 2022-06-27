import { NextPage } from "next";
import { ProjectCard } from "../components";
import { projects } from "../data";

const Projects: NextPage = () => {
  return (
    <div className="p-4">
      <nav>Nav Bar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects?.map((project) => (
          <div
            key={project?.name}
            className="col-span-12 p-2 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
