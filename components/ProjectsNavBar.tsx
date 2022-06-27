import { Category } from "../types";

export const NavItem: React.FC<{ value: Category | "all" }> = ({ value }) => {
  return <li>{value}</li>;
};

const ProjectsNavBar: React.FC = () => {
  return <div>ProjectsNavBar</div>;
};

export default ProjectsNavBar;
