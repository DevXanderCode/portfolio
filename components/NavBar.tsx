import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
        {activeItem !== "About" && (
          <Link href="/">
            <span
              onClick={() => {
                setActiveItem("About");
              }}
            >
              About
            </span>
          </Link>
        )}
        {activeItem !== "Projects" && (
          <Link href="/projects">
            <span
              onClick={() => {
                setActiveItem("Projects");
              }}
            >
              Projects
            </span>
          </Link>
        )}
        {activeItem !== "Resume" && (
          <Link href="/resume">
            <span
              onClick={() => {
                setActiveItem("Resume");
              }}
            >
              Resume
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
