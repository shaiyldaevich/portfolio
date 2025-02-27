import { create } from "zustand";

interface HeaderStore {
  links: {
    name: string;
    href: string;
  }[];

  isOpenBurgerMenu: boolean;
  setIsOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  links: [
    {
      name: "About",
      href: "about",
    },
    {
      name: "Projects",
      href: "projects",
    },
    {
      name: "Contact",
      href: "contact",
    },
    {
      name: "Experience",
      href: "experiens",
    },
  ],

  isOpenBurgerMenu: false,
  setIsOpenBurgerMenu: (isOpenBurgerMenu) =>
    set(() => ({ isOpenBurgerMenu: isOpenBurgerMenu })),
}));
