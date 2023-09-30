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
      "I develop robust REST and GraphQL APIs with <b>Node js</b>, <b>Expressjs</b>, <b>Loopbackjs</b> and <b>Nextjs</b>",
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
    title: "Product Development",
    about:
      "Hack around user experience to deliver the bast <b>customer</b> journey for your users",
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
  {
    name: "Express js",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  { name: "Git", level: "80%", Icon: BsCircleFill },
  { name: "Click Up", level: "80%", Icon: BsCircleFill },
  { name: "Zoom", level: "90%", Icon: BsCircleFill },
  { name: "Google Meet", level: "99%", Icon: BsCircleFill },
  { name: "Figma", level: "45%", Icon: BsCircleFill },
  { name: "VSCode", level: "75%", Icon: BsCircleFill },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This web app show statistics of the Corona virus both globally and can be filtered to a specific country, it shows the death, infected and recovered count and plot them in a chart as well",
    category: ["react"],
    image_path: "/images/covid-tracker.png",
    github_url: "https://github.com/DevXanderCode/covid-19-tracker",
    deployed_url: "https://devxandercode.github.io/covid-19-tracker/",
    key_techs: ["React", "Chartjs", "Material UI"],
  },
  {
    id: 2,
    name: "Fullstack Blog",
    description:
      "A Full Stack website with blog and comments capabilty consisting of an about page, service pages and login and register features",
    category: ["react", "loopback"],
    image_path: "/images/blog.png",
    github_url: "https://github.com/DevXanderCode/my-portfolio-website",
    deployed_url: "https://my-portfolio-website-react.herokuapp.com/",
    key_techs: ["React", "Material UI", "Redux", "Formik", "Yup"],
  },
  {
    id: 3,
    name: "Ecommerce website",
    description:
      "A basic ecommerce website that displays a list of products with the add to cart functionality",
    category: ["react"],
    image_path: "/images/ecommerce.png",
    github_url: "https://github.com/DevXanderCode/react-e-commerce-store",
    deployed_url: "https://e-commerce-store-phone.netlify.app",
    key_techs: ["React", "Styled Component", "Context Api", "Bootstrap"],
  },
  {
    id: 4,
    name: "Website App",
    description:
      "A basic react weather app that basically tells you the weather and temperature of any city and literally change the background accordingly",
    category: ["react"],
    image_path: "/images/weather.png",
    github_url: "https://github.com/DevXanderCode/react-weather-app",
    deployed_url: "https://weather-x3-app.netlify.app/",
    key_techs: ["React", "Axios", "Open weather map"],
  },
  {
    id: 5,
    name: "BMI Mobile App",
    description:
      "A beautiful BMI(Body Mass Index) that basically calculates you body mass index based on your weight, height and age",
    category: ["flutter"],
    image_path: "/images/bmi.jpeg",
    github_url: "https://github.com/DevXanderCode/bmi_calculator_flutter",
    // deployed_url: "https://alex-portfolio-nu.vercel.app/",
    key_techs: ["Flutter", "Dart"],
  },
  {
    id: 6,
    name: "Facebook UI",
    description:
      "A web and mobile app built with flutter with a facebook like user interface",
    category: ["flutter"],
    image_path: "/images/facebook.jpeg",
    github_url: "https://github.com/DevXanderCode/facebook_ui_clone",
    // deployed_url: "https://alex-portfolio-nu.vercel.app/",
    key_techs: ["Dart", "Cached Network Image", "Flutter"],
  },
  {
    id: 7,
    name: "Flash Chat App",
    description:
      "A simple minimalistic group chat app built with flutter and firbase, it alse emojis and text",
    category: ["flutter"],
    image_path: "/images/flash-chat.jpeg",
    github_url: "https://github.com/DevXanderCode/flash_chat_app",
    // deployed_url: "https://alex-portfolio-nu.vercel.app/",
    key_techs: [
      "Flutter",
      "Dart",
      "Firebase",
      "Animated Text Kit",
      "Cloud Firestore",
      "modal progress hud nsn",
    ],
  },
  {
    id: 8,
    name: "Deliva Meals App",
    description:
      "A simple food ordering and delivery app, integrated with the map, booking and direction functionality for users to make reservations and have food delivered to them.",
    category: ["react native"],
    image_path: "/images/deliva-meals.jpeg",
    github_url: "https://github.com/DevXanderCode/deliva_meals",
    // deployed_url: "https://alex-portfolio-nu.vercel.app/",
    key_techs: ["JavaScript", "React Native", "React Native Maps"],
  },
  {
    id: 9,
    name: "Portfolio website",
    description:
      "My Portofolio website that shows my experience, a bio about me and also a list of some of my projects",
    category: ["react", "nextjs", "typescript"],
    image_path: "/images/portfolio.png",
    github_url: "https://github.com/DevXanderCode/portfolio",
    deployed_url: "https://alex-portfolio-nu.vercel.app/",
    key_techs: [
      "React",
      "Nextjs",
      "TypeScript",
      "Framer Motion",
      "TailwindCss",
    ],
  },
  {
    id: 10,
    name: "Weather Extension",
    description:
      "A Weather chrome extension that helps you keep track of the weather of your preferred cities around the world",
    category: ["react", "typescript", "chrome extension"],
    image_path: "/images/weatherExtension.png",
    github_url: "https://github.com/DevXanderCode/weather-chrome-extension",
    // deployed_url: "https://alex-portfolio-nu.vercel.app/",
    key_techs: [
      "React",
      "TypeScript",
      "CSS",
      "Webpack",
      "manifest_version 3",
      "OpenWeatherMap",
    ],
  },
  {
    id: 11,
    name: "Pomodoro Extension",
    description:
      "A pomodoro chrome extension that helps increase your productivity by implementing the pomodoro technique to todo list",
    category: ["chrome extension"],
    image_path: "/images/pomodoroExtension.png",
    github_url: "https://github.com/DevXanderCode/pomodoro-chrome-extension",
    // deployed_url: "https://alex-portfolio-nu.vercel.app/",
    key_techs: ["HTML", "CSS", "manifest version 3"],
  },
  {
    id: 12,
    name: "TvShow Extension",
    description:
      "A Tv Show search extension that helps you search for your favourite tv shows from IMDB, and can also read text out in english",
    category: ["chrome extension"],
    image_path: "/images/tvShowExtension.png",
    github_url:
      "https://github.com/DevXanderCode/tv-show-search-chrome-extension",
    // deployed_url: "https://alex-portfolio-nu.vercel.app/",
    key_techs: ["HTML", "CSS", "manifest version 3"],
  },
];
