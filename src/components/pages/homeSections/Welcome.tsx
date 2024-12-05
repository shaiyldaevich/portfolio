import React from "react";
import scss from "./Welcome.module.scss";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";
import css from "@/assets/techIcons/css3-original.svg";
import html from "@/assets/techIcons/html5-original.svg";
import sass from "@/assets/techIcons/sass-original.svg";
import react from "@/assets/techIcons/react-original.svg";
import node from "@/assets/techIcons/nodejs-original-wordmark.svg";
import vite from "@/assets/techIcons/vitejs-original.svg";
import next from "@/assets/techIcons/nextjs-original.svg";
import redux from "@/assets/techIcons/redux-original.svg";
import git from "@/assets/techIcons/git-original.svg";
import github from "@/assets/techIcons/github-original.svg";
import typeScript from "@/assets/techIcons/typescript-original.svg";
import javaScript from "@/assets/techIcons/javascript-original.svg";

const TechIcons = [
  {
    src: css,
    title: "CSS",
  },
  {
    src: html,
    title: "HTML",
  },
  {
    src: sass,
    title: "SASS",
  },
  {
    src: react,
    title: "React",
  },
  {
    src: node,
    title: "Node.js",
  },
  {
    src: vite,
    title: "Vite",
  },
  {
    src: next,
    title: "Next.js",
  },
  {
    src: redux,
    title: "Redux",
  },
  {
    src: git,
    title: "Git",
  },
  {
    src: github,
    title: "GitHub",
  },
  {
    src: typeScript,
    title: "TypeScript",
  },
  {
    src: javaScript,
    title: "JavaScript",
  },
];
const Welcome = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>Hi, I am Salamalik</h1>
          <h3>Frontend Developer</h3>
          <p>
            As an experienced Frontend Developer , I am dedicated to turning
            ideas into innovative web applications. Explore my recent projects
            and articles showcasing my skills in both Front-End development📍
          </p>
        </div>
        <div className={scss.myNet}>
          <ul>
            <li>
              <a href="https://github.com/shaiyldaevich">
                <FaSquareGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/salamalik-shaiyldaevich-bb7a572a9/">
                <CiLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/shaiyldaevich/">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="https://t.me/Shaiyldaevich">
                <FaTelegram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
