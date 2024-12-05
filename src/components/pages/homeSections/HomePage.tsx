"use client";
import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Job from "./Job";
import Snowfall from "react-snowfall";
import ContactPage from "./Contact";

const HomePage = () => {
  const [snowCount, setSnowCount] = useState<number>(0);
  const [showCursorAnimation, setShowCursorAnimation] = useState<boolean>(true);
  useEffect(() => {
    const chaneSnowCount = () => {
      if (window.innerWidth < 760) {
        setSnowCount(30);
      } else setSnowCount(140);
    };
    const handleResize = () => {
      chaneSnowCount();
      if (window.innerWidth < 1000) {
        setShowCursorAnimation(false);
      } else setShowCursorAnimation(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  });
  return (
    <>
      <Snowfall
        color="white"
        style={{
          background: "#00",
          position: "fixed",
          width: "100%",
        }}
        snowflakeCount={snowCount}
      />
      <Welcome />
      <AboutMe />
      <Job />
      <ContactPage />
    </>
  );
};

export default HomePage;
