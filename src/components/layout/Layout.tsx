"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import PreLoader from "@/ui/preLoader/PreLoader";
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  const [isPreLoader, setIsPreloader] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsPreloader(true);
    }, 700);
    console.log(isPreLoader);
  });
  return (
    <div className={scss.Layout}>
      {!isPreLoader ? (
        <PreLoader />
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
