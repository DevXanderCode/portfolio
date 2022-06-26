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
        className="cursor-pointer hover:text-green"
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
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
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
