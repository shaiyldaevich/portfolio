import React from "react";
import scss from "./Job.module.scss";
import Image from "next/image";
import spotify from "../../../assets/Screenshot from 2024-09-10 12-58-22 (Copy).png";
import movie from "../../../assets/afisha (Copy).png";
import tg from "../../../assets/telegram-sms-bot (Copy).png";

const Job = () => {
  return (
    <section id="job" className={scss.Jobs}>
      <div className="container">
        <div className={scss.content}>
          <h1>Some Things I have Built</h1>
          <div className={scss.jobs}>
            <div className={scss.job}>
              <Image src={spotify} alt="Experience 1" />
              <div className={scss.text}>
                <h1>My №1 </h1>
                <p>
                  "This project is a demonstration of my capabilities in the{" "}
                  <br />
                  field of API integration, modeled after Spotify functionality.
                  <br />
                  It demonstrates my ability to connect to various music APIs to
                  <br />
                  dynamically display data, allowing users to view tracks,
                  <br />
                  artists, and playlists. Thanks to this project, I demonstrated
                  <br />
                  my skills in interface development and my understanding of
                  <br />
                  creating adaptive interactive web applications."{" "}
                </p>
                <a href="https://smkfy-555.vercel.app/">movie</a>
              </div>
            </div>
            <div className={scss.job}>
              <Image src={movie} alt="Experience 2" />
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
            </div>
            <div className={scss.job}>
              <Image src={tg} alt="Experience 3" width={500} height={500} />
              <div className={scss.text}>
                <h1>My №3</h1>
                <p>
                  This Telegram-Bot is designed to forward messages from the{" "}
                  <br />
                  Frontend form directly to Telegram. The advantages of our{" "}
                  <br />
                  backend lie in the fact that any developer can easily deploy{" "}
                  <br />
                  it on any hosting service.
                </p>
                <a href="https://tgbott-theta.vercel.app/ ">movie</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;
