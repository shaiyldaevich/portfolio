"use client";

import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import logoPh from "../../../assets/de2lg2r-ec9bf187-18cc-4e64-9f2f-1fd1c268de78.png";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
const scrollLinks = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Experience",
    link: "experience",
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
const Header = () => {
  ////burgermenu function////
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const hundleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", hundleResize);
    hundleResize();
    return () => {
      window.addEventListener("resize", hundleResize);
    };
  });
  console.log(isOpen);
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.scrool}>
          <div className={scss.content}>
            <div className={scss.logo}>
              <Image src={logoPh} width={70} height={70} alt="logo" />
              <ScrollLink
                activeClass="active"
                to={"home"}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <h1>Smk.dev</h1>
              </ScrollLink>
            </div>
            {isMobile ? (
              <>
                <a
                  className={scss.burger_button}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <GiHamburgerMenu />
                </a>
                <BurgerMenu scrollLinks={scrollLinks} isOpen={isOpen} />
              </>
            ) : (
              <>
                {" "}
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
                <div className={scss.resume}>
                    <a
                    className={scss.button}
                      target="_blank"
                      rel="noopener noreferror"
                      href="/Black Modern Graphic Designer Creative Resume.pdf"
                    >Resume</a>
                    
                
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
