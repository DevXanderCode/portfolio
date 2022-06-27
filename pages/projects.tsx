import { NextPage } from "next";
import { useState } from "react";
import { ProjectCard, ProjectsNavBar } from "../components";
import { projects as projectsData } from "../data";
import { Category, IProject } from "../types";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [active, setActive] = useState<Category | "all">("all");

  const handleFilterHandler = (category: Category | "all") => {
    setActive(category);
    if (category === "all") {
      setProjects(projectsData);
      return;
    }

    const filterProject = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filterProject);
  };
  return (
    <div className="px-5 py-2 overflow-y-scroll h-[90vh]">
      <ProjectsNavBar
        handleFilterHandler={handleFilterHandler}
        activeNav={active}
      />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects?.map((project) => (
          <div
            key={project?.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
