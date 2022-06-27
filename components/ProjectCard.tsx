import { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

const ProjectCard: React.FC<{ project: IProject }> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    github_url,
    description,
    key_techs,
  },
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (
    <div className="">
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails((prev) => !prev)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img src={image_path} alt={name} />

            <a href={github_url}>
              <AiFillGithub />
              <span>GitHub</span>
            </a>

            {deployed_url && (
              <a href={deployed_url}>
                <AiFillProject />
                <span>Project</span>
              </a>
            )}
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <div>
              {key_techs?.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <button onClick={() => setShowDetails(false)}>
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
