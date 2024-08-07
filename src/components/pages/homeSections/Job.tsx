import React from "react";
import scss from "./Job.module.scss";
import Image from "next/image";
import jobs from "../../../assets/ZYL8KPO.gif";
import movie from "../../../assets/Screenshot from 2024-08-04 12-58-52.png";

const Job = () => {
  return (
    <section id="job" className={scss.Jobs}>
      <div className="container">
        <div className={scss.content}>
          <h1>Some Things I've Built</h1>
          <div className={scss.jobs}>
            <div className={scss.job}>
              <Image src={jobs} alt="Experience 1" />
              <div className={scss.text}>
                <h1>My №1 </h1>
                <p>
                  This movie website is an early prototype aimed at providing a{" "}
                  <br />
                  platform for users to discover and explore various films. It{" "}
                  <br />
                  serves as an initial attempt to create a comprehensive movie{" "}
                  <br />
                  database with functionalities like searching for movies,{" "}
                  <br />
                  viewing details, and reading reviews. While this version{" "}
                  <br />
                  offers basic features, it is important to note that it <br />
                  contains several bugs and incomplete functionalities. Future{" "}
                  <br />
                  updates will aim to address these issues and enhance the{" "}
                  <br />
                  overall user experience.
                </p>
              </div>
            </div>
            <div className={scss.job}>
              <div className={scss.text}>
                <h1>My №2</h1>
                <p>
                  This movie website is an early prototype aimed at providing a{" "}
                  <br />
                  platform for users to discover and explore various films. It{" "}
                  <br />
                  serves as an initial attempt to create a comprehensive movie{" "}
                  <br />
                  database with functionalities like searching for movies,{" "}
                  <br />
                  viewing details, and reading reviews. While this version{" "}
                  <br />
                  offers basic features, it is important to note that it <br />
                  contains several bugs and incomplete functionalities. Future{" "}
                  <br />
                  updates will aim to address these issues and enhance the{" "}
                  <br />
                  overall user experience.
                </p>
                <a href="https://movie-mu-six.vercel.app/">movie</a>
              </div>

              <Image src={movie} alt="Experience 2" />
            </div>
            <div className={scss.job}>
              <Image src={jobs} alt="Experience 3" />
              <div className={scss.text}>
                <h1>My №3</h1>
                <p>
                  This movie website is an early prototype aimed at providing a{" "}
                  <br />
                  platform for users to discover and explore various films. It{" "}
                  <br />
                  serves as an initial attempt to create a comprehensive movie{" "}
                  <br />
                  database with functionalities like searching for movies,{" "}
                  <br />
                  viewing details, and reading reviews. While this version{" "}
                  <br />
                  offers basic features, it is important to note that it <br />
                  contains several bugs and incomplete functionalities. Future{" "}
                  <br />
                  updates will aim to address these issues and enhance the{" "}
                  <br />
                  overall user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;
