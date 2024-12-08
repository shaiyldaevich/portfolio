"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import PreLoader from "@/ui/preLoader/PreLoader";
import useScript_V2 from "@/ui/cursorBg/useScript_V2";

interface LayoutProps {
  children: ReactNode;
  // eslint-disable-next-line
  url?: any;
}
const Layout: FC<LayoutProps> = ({ children, url }) => {
  useScript_V2(url);

  const [isPreLoader, setIsPreloader] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsPreloader(true);
    }, 700);
    console.log(isPreLoader);
  });
  return (
    <>
      <canvas className={scss.canvas} id="canvas" />

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
    </>
  );
};

export default Layout;
