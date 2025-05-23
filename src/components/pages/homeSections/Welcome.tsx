import React from "react";
import scss from "./Welcome.module.scss";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";
import css from "@/assets/techIcons/css3-original.svg";
import html from "@/assets/techIcons/html5-original.svg";
import sass from "@/assets/techIcons/sass-original.svg";
import node from "@/assets/techIcons/nodejs-original-wordmark.svg";
import vite from "@/assets/techIcons/vitejs-original.svg";
import next from "@/assets/techIcons/nextjs-original.svg";
import git from "@/assets/techIcons/git-original.svg";
import github from "@/assets/techIcons/github-original.svg";
import Image from "next/image";

// const TechIcons = [
//   {
//     src: css,
//     title: "CSS",
//   },
//   {
//     src: html,
//     title: "HTML",
//   },
//   {
//     src: "https://techstack-generator.vercel.app/ts-icon.svg",
//     title: "TypeScript",
//   },
//   {
//     src: "https://techstack-generator.vercel.app/js-icon.svg",
//     title: "JavaScript",
//   },
//   {
//     src: sass,
//     title: "SASS",
//   },
//   {
//     src: "https://techstack-generator.vercel.app/react-icon.svg",
//     title: "React",
//   },
//   {
//     src: node,
//     title: "Node.js",
//   },
//   {
//     src: vite,
//     title: "Vite",
//   },
//   {
//     src: next,
//     title: "Next.js",
//   },
//   {
//     src: "https://techstack-generator.vercel.app/redux-icon.svg",
//     title: "Redux",
//   },
//   {
//     src: git,
//     title: "Git",
//   },
//   {
//     src: github,
//     title: "GitHub",
//   },
// ];
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
    src: "https://techstack-generator.vercel.app/ts-icon.svg",
    title: "TypeScript",
  },
  {
    src: "https://techstack-generator.vercel.app/js-icon.svg",
    title: "JavaScript",
  },
  {
    src: sass,
    title: "SASS",
  },
  {
    src: "https://techstack-generator.vercel.app/react-icon.svg",
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
    src: "https://techstack-generator.vercel.app/redux-icon.svg",
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
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    title: "Tailwind CSS",
  },
  {
    src: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    title: "Supabase",
  },
  {
    src: "https://www.vectorlogo.zone/logos/fastifyio/fastifyio-icon.svg",
    title: "Fastify",
  },
  {
    src: "https://www.svgrepo.com/show/374002/prisma.svg",
    title: "Prisma",
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
          <div className={scss.technologies}>
            {TechIcons.map((icon, index) => (
              <div className={scss.techIcon} key={index}>
                <Image
                  key={index}
                  src={icon.src}
                  alt={icon.title}
                  title={icon.title}
                  width={60}
                  height={60}
                />
              </div>
            ))}
          </div>
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
