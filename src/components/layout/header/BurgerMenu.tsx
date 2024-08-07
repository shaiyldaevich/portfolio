import { FC } from "react";
import scss from "./burgerMenu.module.scss";
import { Link as ScrollLink } from "react-scroll";

interface LinksType {
  name: string;
  link: string;
}
interface BurgerMenuProps {
  scrollLinks: LinksType[];
  isOpen: boolean;
}
const BurgerMenu: FC<BurgerMenuProps> = ({ scrollLinks, isOpen }) => {
  return (
    <div
      className={
        isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
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
                          {item.name}
                        </ScrollLink>
                      </li>
                    ))}
          </ul>
        </nav>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default BurgerMenu;
