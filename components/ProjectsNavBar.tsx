import { Category } from "../types";

export const NavItem: React.FC<{
  value: Category | "all";
  handleFilterHandler: (text: Category | "all") => void;
  active: boolean;
}> = ({ value, handleFilterHandler, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active) className += " text-green";
  return (
    <li className={className} onClick={handleFilterHandler.bind(null, value)}>
      {value}
    </li>
  );
};

const ProjectsNavBar: React.FC<{
  handleFilterHandler: (text: Category | "all") => void;
  activeNav: Category | "all";
}> = ({ handleFilterHandler, activeNav }) => {
  return (
    <div className="flex items-center px-3 py-2 space-x-3 overflow-x-auto list-none">
      {[
        "all",
        "react",
        "react native",
        "flutter",
        "node",
        "loopback",
        "typescript",
        "nextjs",
      ]?.map((value) => (
        <NavItem
          // @ts-ignore
          value={value}
          handleFilterHandler={handleFilterHandler}
          key={value}
          active={activeNav === value}
        />
      ))}
    </div>
  );
};

export default ProjectsNavBar;
