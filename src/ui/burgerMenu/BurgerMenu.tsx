import React from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const BurgerMenu = () => {
  const pathname = usePathname();
  const { isOpenBurgerMenu, setIsOpenBurgerMenu, links } = useHeaderStore();

  return (
    <>
      <div
        className={
          isOpenBurgerMenu
            ? `${scss.BurgerMenu} ${scss.active}`
            : `${scss.BurgerMenu}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={scss.content}>
          <h1>Smk555</h1>
          <nav className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    activeClass="active"
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={
                      pathname === item.href
                        ? `${scss.link} ${scss.active}`
                        : `${scss.link}`
                    }
                    href={item.href}
                    onClick={() => setIsOpenBurgerMenu(false)}
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
          <button>Resume</button>
        </div>
      </div>
    </>
  );
};
export default BurgerMenu;
