import { IconType } from "react-icons";

export interface NavItemProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  name: string;
  route: string;
}

export interface IService {
  id: number;
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url?: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "react"
  | "node"
  | "express"
  | "loopback"
  | "mongo"
  | "react native"
  | "flutter"
  | "python"
  | "typescript"
  | "nextjs";
