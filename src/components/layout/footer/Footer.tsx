"use client";

import React, { useEffect, useState } from "react";
import scss from "./Footer.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";

const scrollLinks = [
  {
    name: "About",
    link: "about",
  },

  {
    name: "Job",
    link: "job",
  },
  {
    name: "Contact",
    link: "contact",
  },
];
const Footer = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.scrool}>
          <div className={scss.content}>
            <nav className={scss.nav}>
              <ul>
                {scrollLinks.map((item, index) => (
                  <li key={index}>
                    <ScrollLink
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {" "}
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
