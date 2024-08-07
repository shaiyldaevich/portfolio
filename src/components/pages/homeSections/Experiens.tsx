import React, { useEffect } from "react";
import scss from "./Experiens.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Вы можете настроить параметры здесь
    });
  }, []);
  return (
    <div id="experience" data-aos="fade-up" className={scss.Experience}>
      <div className="container">
        <div  className={scss.content}>
          <h1>Experience</h1>
          <div className={scss.job}>
            <h2>Junior Frontend Developer</h2>
            <h3>Company: Web Innovators</h3>
            <h4>Period: July 2024 - September 2024</h4>

            <div className={scss.Responsibilities}>Responsibilities:</div>
            <ul>
              <li>
                Developed and maintained websites using <br /> HTML, CSS,SASS,
                and JavaScript.
              </li>
              <li>Created reusable templates and components.</li>
              <li>
                Collaborated closely with backend developers <br />
                for UI integration.
              </li>
            </ul>

            <div className={scss.Achievements}>Achievements:</div>
            <ul>
              <li>
                Developed a component system that accelerated the development{" "}
                <br />
                process of new pages.
              </li>
              <li>
                Implemented code review practices, which improved code quality{" "}
                <br />
                and reduced errors.
              </li>
              <li>
                Participated in designing and implementing new features that{" "}
                <br />
                enhanced the usability of web applications.
              </li>
            </ul>
          </div>

          <div className={scss.education}>
            <h2>Education</h2>
            <p>
              <strong>It Academy</strong> Motion Web
            </p>
            <p>
              <strong>Degree:</strong> Front-end Developer
            </p>
            <p>
              <strong>Years:</strong> 2023-2024
            </p>
          </div>

          <div className={scss.skills}>
            <h2>Skills</h2>
            <ul>
              <li>
                <strong>Programming Languages:</strong> JavaScript (ES6+),
                TypeScript
              </li>
              <li>
                <strong>Libraries and Frameworks:</strong> React, Next.js,
                Redux, React.Vite
              </li>
              <li>
                <strong>Tools and Technologies:</strong> Git, Webpack, Babel,
                Docker
              </li>
              <li>
                <strong>Methodologies:</strong> Agile, Scrum
              </li>
              <li>
                <strong>Testing:</strong> Jest, Enzyme, Cypress
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
