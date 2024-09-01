import { BsFiletypeScss } from "react-icons/bs";
import { FaAws, FaDocker, FaFlask, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiElasticsearch, SiMobx, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";

const techStack = [
  { title: "React", imageUrl: <FaReact /> },
  { title: "HTML", imageUrl: <FaHtml5 /> },
  { title: "SCSS", imageUrl: <BsFiletypeScss /> },
  { title: "JavaScript", imageUrl: <IoLogoJavascript /> },
  { title: "TypeScript", imageUrl: <SiTypescript /> },
  { title: "Python", imageUrl: <FaPython /> },
  { title: "Flask", imageUrl: <FaFlask /> },
  { title: "MySQL", imageUrl: <SiMysql /> },
  { title: "Elasticsearch", imageUrl: <SiElasticsearch /> },
  { title: "Docker", imageUrl: <FaDocker /> },
  { title: "MobX", imageUrl: <SiMobx /> },
  { title: "MongoDB", imageUrl: <SiMongodb /> },
  { title: "Node.js", imageUrl: <FaNodeJs /> },
  { title: "AWS", imageUrl: <FaAws /> },
  { title: "Git", imageUrl: <FaGithub /> }
];

export default techStack;