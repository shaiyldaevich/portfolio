"use client";

import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import BurgerButton from "@/ui/burgerButton/BurgerButton";
import BurgerMenu from "@/ui/burgerMenu/BurgerMenu";
import logo from "@/assets/smk.svg";
const scrollLinks = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contact",
    link: "contact",
  },
];
const Header = () => {
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
              <ScrollLink
                activeClass="active"
                to={"home"}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Image src={logo} alt="logo" width={100} height={50} />
              </ScrollLink>
            </div>
            {isMobile ? (
              <>
                <BurgerMenu />
                <BurgerButton />
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
                    href="/Resume2.0.pdf"
                  >
                    Resume
                  </a>
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
