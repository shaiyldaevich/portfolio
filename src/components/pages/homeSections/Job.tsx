import React from "react";
import scss from "./Job.module.scss";
import Image from "next/image";
import Movie from "@/assets/movie.png";
import tg from "@/assets/tg bot.png";
import Css from "@/assets/css animation.png";
import todo from "@/assets/todo.png";
import { FaGithub, FaSquareArrowUpRight } from "react-icons/fa6";

const projects = [
  {
    name: "SMK-MOVIE",
    src: Movie,
    description:
      "SMK-MOVIE - a unique website providing fascinating information about movies and TV shows. Here you can discover all the necessary details about your favorite films, actors, directors, ratings, and much more.",
    tools: ["React", "Next.js", "TypeScript", "Redux", "CSS Grid", "SASS"],
    code: "https://github.com/shaiyldaevich/SmkMovie.org",
    demo: "https://smk-movie-org.vercel.app/",
  },
  {
    name: "TELEGRAM SMS BOT 🐬",
    src: tg,
    description:
      "This Telegram-Bot is designed to forward messages from the Frontend form directly to Telegram. The advantages of our backend lie in the fact that any developer can easily deploy it on any hosting service.",
    tools: ["Node.js", "Telegram API", "TypeScript"],
    code: "https://github.com/shaiyldaevich/TelegramBot",
    demo: "https://t.me/your_bot",
  },
  {
    name: "CSS Animations",
    src: Css,
    description:
      "A project demonstrating various CSS animations, including transitions, keyframes, and other effects.",
    tools: ["HTML", "CSS", "SASS"],
    code: "https://github.com/shaiyldaevich/CSSAnimations",
    demo: "https://css-animation-demo.vercel.app/",
  },
  {
    name: "The ToDo List ",
    src: todo,
    description:
      "The ToDo List website is a web application for creating a task list. It was created using Node.js and React. The application allows you to add, delete, modify, and mark tasks as completed.",
    tools: ["React", "TypeScript", "CSS", "LocalStorage"],
    code: "https://github.com/shaiyldaevich/TodoApp",
    demo: "https://todo-app-example.vercel.app/",
  },
];

const Job = () => {
  return (
    <section id="projects" className={scss.Jobs}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.projects}>
            {projects.map((project, index) => (
              <div className={scss.project} key={index}>
                <div className={scss.left}>
                  <Image
                    src={project.src}
                    alt={project.name}
                    width={500}
                    height={300}
                  />
                </div>
                <div className={scss.right}>
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                  <div className={scss.tools}>
                    <ul>
                      {project.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={scss.links}>
                    <a href={project.code} target="_blank">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank">
                    <FaSquareArrowUpRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;
