import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface NavItemProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  name: string;
  route: string;
}

const NavItem: React.FunctionComponent<NavItemProps> = ({
  activeItem,
  name,
  route,
  setActiveItem,
}) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span
        onClick={() => {
          setActiveItem(name);
        }}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const NavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/resume") setActiveItem("Resume");
    if (pathname === "/projects") setActiveItem("Projects");
  }, [pathname]);

  return (
    <div className="flex items-center justify-between">
      <span className="font-bold text-green">{activeItem}</span>
      <div className="flex space-x-3 font-lg">
        <NavItem
          setActiveItem={setActiveItem}
          name="About"
          route="/"
          activeItem={activeItem}
        />
        <NavItem
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
          activeItem={activeItem}
        />
        <NavItem
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

export default NavBar;
