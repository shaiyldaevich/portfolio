"use client";
import React, { useEffect, useRef } from "react";
import scss from "./AboutMe.module.scss";
import logoPh from "../../../assets/de2lg2r-ec9bf187-18cc-4e64-9f2f-1fd1c268de78.png";
import Image from "next/image";

const AboutMe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(scss.animate);
          } else {
            entry.target.classList.remove(scss.animate);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className={scss.AboutMe} ref={sectionRef}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <div className={scss.profileImage}>
              <Image src={logoPh} alt="Profile" />
            </div>
            <h1>About Me</h1>
            <p>
              Hello! I&#39;m a frontend developer with a passion for creating <br />
              beautiful and functional web applications. I have experience
              working <br />
              with modern web technologies and enjoy learning new tools and{" "}
              <br />
              frameworks to enhance my skills. <br />
            </p>
          </div>
          <div className={scss.skills}>
            <h2>Skills</h2>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux</li>
              <li>TypeScript</li>
              <li>Sass/SCSS</li>
              <li>Git & GitHub</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
