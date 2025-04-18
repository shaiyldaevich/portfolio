import React from "react";
import scss from "./Job.module.scss";
import Image from "next/image";
import Movie from "@/assets/movie.png";
import tg from "@/assets/tg bot.png";
import Css from "@/assets/css animation.png";
import todo from "@/assets/todo.png";
import spotify from "@/assets/spotify.png";
import barber from "@/assets/bareber.png";
import okukg from "@/assets/okukg.png";
import Etno from "@/assets/Screenshot from 2025-04-05 13-23-29.png";
import snake from "@/assets/snake.png";
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
    code: "https://github.com/shaiyldaevich/tgbott",
    demo: "https://tgbott-theta.vercel.app/",
  },
  {
    name: "Oku.kg 📖",
    src: okukg,
    description:
      "Discover a world of endless stories with our online bookstore. We offer a vast collection of books across various genres, from bestsellers to timeless classics. Whether you're a fan of thrilling mysteries, heartfelt romances, or thought-provoking non-fiction, we have something for every reader. With a user-friendly interface and fast, reliable delivery, your next great read is just a click away. Explore new titles, find hidden gems, and let us bring the joy of reading straight to your doorstep.",
    tools: [
      "Django",
      "Python",
      "Swagger",
      "TypeScript",
      "SASS",
      "JSON",
      "Next.js",
      "Redux-Toolkit-Query",
      "Rest-Api",
    ],
    code: "https://github.com/shaiyldaevich",
    demo: "https://",
  },
  {
    name: "Etnobaza",
    src: Etno,
    description:
      "Ethnobaza is the largest casting platform for talents. Find actors, models, and performers for your projects!",
    tools: [
      "Fastify",
      "Swagger",
      "TypeScript",
      "JSON",
      "Next.js",
      "Redux-Toolkit-Query",
      "Rest-Api",
      "Tailwind",
      "Shadcn.ui",
      "Zustand",
    ],
    code: "https://github.com/shaiyldaevich",
    demo: "https://etnobaza.kg/",
  },
  {
    name: "Barbershop ",
    src: barber,
    description:
      "The Barbershop website is the website of the Barbershop. On the website, you can find information about the barbershop, the services it provides, and also make an appointment.",
    tools: ["Next.js", "Telegram API", "TypeScript", "Sass", "Rest-Api"],
    code: "https://github.com/shaiyldaevich/barbershop",
    demo: "https://barbershop-ten-smoky.vercel.app/",
  },
  {
    name: "CSS Animations",
    src: Css,
    description:
      "A project demonstrating various CSS animations, including transitions, keyframes, and other effects.",
    tools: ["HTML", "CSS", "SASS"],
    code: "https://github.com/shaiyldaevich/FORFUN",
    demo: "https://forfun-azure.vercel.app/",
  },
  {
    name: "The ToDo List ",
    src: todo,
    description:
      "The ToDo List website is a web application for creating a task list. It was created using Node.js and React. The application allows you to add, delete, modify, and mark tasks as completed.",
    tools: ["React-Vite", "TypeScript", "SASS", "CRUD-API", "REST-API"],
    code: "https://github.com/shaiyldaevich/adminOku.kg",
    demo: "https://admin-oku-kg.vercel.app/",
  },
  {
    name: "Spotify Clone",
    src: spotify,
    description:
      "This project is a simple Spotify clone built using Next.js and React Hooks. Please note that this application is configured to work exclusively with my Spotify account and requires a Spotify Premium subscription for full functionality.",
    tools: ["Next.js", "TypeScript", "SASS", "Spotify API", "Zustand"],
    code: "https://github.com/shaiyldaevich/SMKFY_555",
    demo: "https://smkfy-555.vercel.app/",
  },
  {
    name: "Snake game",
    src: snake,
    description: "Snake game with Javascript",
    tools: ["Javascript ", "HTML"],
    code: "https://github.com/shaiyldaevich/snake-game",
    demo: "https://snake-game-beta-bice.vercel.app/",
  },
];

const Job = () => {
  return (
    <section id="projects" className={scss.Jobs}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.projects}>
            {projects.map((project, index) => (
              <div
                className={`${scss.project} ${
                  index % 2 !== 0 ? scss.row__reverse : ""
                }`}
                key={index + 1}
              >
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
