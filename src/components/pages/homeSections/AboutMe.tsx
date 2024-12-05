"use client";
import React, { useEffect, useRef } from "react";
import scss from "./AboutMe.module.scss";
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
            <div className={scss.profileImage}></div>
            <h1>About Me</h1>
            <a href="https://2gis.kg/bishkek/search/bishkek%20kyrgyzstan?m=74.553797%2C42.873619%2F10.21">
              Experienced Frontend Developer from Kyrgyzstan 📍
            </a>
            <p>
              Hello! I am a frontend developer with a passion for creating
              beautiful and functional web applications. I have experience
              working with modern web technologies and enjoy learning new tools
              andframeworks to enhance my skills.
            </p>
          </div>
          {/* <div className={scss.skills}>
            <div className={scss.Icons}>
              {TechIcons.map((icon) => (
                <div key={icon.title} className={scss.Icon}>
                  <Image
                    src={icon.src}
                    alt={icon.title}
                    width={50}
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
