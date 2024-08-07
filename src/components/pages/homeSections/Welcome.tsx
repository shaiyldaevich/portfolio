import React from "react";
import scss from "./Welcome.module.scss";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";

const Welcome = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            Welcome to <span>Smk.dev</span>
          </h1>
          <h2>
            my name is <span>Salamalik Shaiyldaevich</span>
          </h2>
          <h3>
            <span>I am a</span> frontend developer
          </h3>
          <button>my pride is OKU.KG</button>
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
