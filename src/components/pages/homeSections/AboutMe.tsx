"use client";
import React, { useEffect, useRef } from "react";
import scss from "./AboutMe.module.scss";
import Image from "next/image";
import Profile from "@/assets/photo_2024-12-01_12-17-48.jpg";
const AboutMe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current; // Создаем переменную для использования в очистке
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

    if (section) {
      observer.observe(section);
    }

    // Функция очистки
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className={scss.AboutMe} ref={sectionRef}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>About Me</h1>
            <a href="https://2gis.kg/bishkek/search/bishkek%20kyrgyzstan?m=74.553797%2C42.873619%2F10.21">
              Experienced Frontend Developer from Kyrgyzstan 📍
            </a>
            <p>
              Hello! I am a frontend developer with a passion for creating
              beautiful and functional web applications. I have experience
              working with modern web technologies and enjoy learning new tools
              and frameworks to enhance my skills.
            </p>
          </div>
          <div className={scss.profileImage}>
            <Image src={Profile} alt="Profile" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
