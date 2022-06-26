import { ReactSVGElement } from "react";
import { IconType } from "react-icons";
import { RiComputerLine } from "react-icons/ri";

interface IService {
  id: number;
  title: string;
  about: string;
  Icon: IconType;
}

export const services: IService[] = [
  {
    id: 1,
    title: "FrontEnd Web Developer",
    about: "Lorem Ipsum Dolor ....",
    Icon: RiComputerLine,
  },
];
