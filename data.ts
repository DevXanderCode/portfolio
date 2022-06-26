import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineMobile,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IService } from "./types";

export const services: IService[] = [
  {
    id: 1,
    title: "Frontend Web Development",
    about:
      "I build beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, <b>React js</b> and <b>Nextjs</b>",
    Icon: RiComputerLine,
  },
  {
    id: 2,
    title: "Backend Development",
    about:
      "Handle database, server, api using <b>Node js</b> and <b>Expressjs</b>",
    Icon: FaServer,
  },
  {
    id: 3,
    title: "Frontend Mobile Development",
    about:
      "I build beautiful and scalable cross platform (hybrid) mobile applications, using either <b>React Native</b> or <b>Flutter</b>",
    Icon: AiOutlineMobile,
  },
  {
    id: 4,
    title: "API Development",
    about:
      "I develop robust REST APIs with <b>Node js</b>, <b>Expressjs</b>, <b>Loopbackjs</b> and <b>Nextjs</b>",
    Icon: AiOutlineApi,
  },
  {
    id: 5,
    title: "Competitive Coder",
    about: "A daily problem solver in <b>Leet Code</b> and <b>Hacker Rank</b>",
    Icon: MdDeveloperMode,
  },
  {
    id: 6,
    title: "Backend Development",
    about:
      "Handle database, server, api using <b>Node js</b> and <b>Expressjs</b>",
    Icon: AiOutlineAntDesign,
  },
];
