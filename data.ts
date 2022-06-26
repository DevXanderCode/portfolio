import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineMobile,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IService, ISkill, IProject } from "./types";

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

export const languages: ISkill[] = [
  {
    name: "JavaScript",
    level: "100%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "React Native",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Dart",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "Flutter",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Python",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Nodejs",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  { name: "Framer", level: "50%", Icon: BsCircleFill },
  { name: "Click Up", level: "80%", Icon: BsCircleFill },
  { name: "Zoom", level: "90%", Icon: BsCircleFill },
  { name: "Google Meet", level: "99%", Icon: BsCircleFill },
  { name: "Figma", level: "45%", Icon: BsCircleFill },
  //   { name: "Adobe XD", level: "35%", Icon: BsCircleFill },
];

export const projects: IProject[] = [
  {
    name: "COVID Tracker",
    description:
      "This web app show statistics of the Corona virus both globally and can be filtered to a specific country, it shows the death, infected and recovered count and plot them in a chart as well",
    category: ["react"],
    image_path: "/images/covid-tracker.png",
    github_url: "https://github.com/DevXanderCode/covid-19-tracker",
    deployed_url: "https://devxandercode.github.io/covid-19-tracker/",
    key_techs: ["React", "Chartjs", "Material UI", "Axios"],
  },
];
