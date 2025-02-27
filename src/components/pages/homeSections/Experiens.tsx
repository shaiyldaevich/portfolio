import React from "react";
import scss from "./experiens.module.scss";

const Experiens = () => {
  return (
    <section id="experiens" className={scss.experiens}>
      <div className="container">
        <div className={scss.content}>
          <h2 className={scss.heading}>Some of my experiences</h2>
          <div className={scss.experience}>
            <div className={scss.left}>
              <h3 className={scss.jobTitle}>Junior Frontend Developer</h3>
              <p className={scss.company}>Etnomedia</p>
              <p className={scss.duration}>January 2025 - Present</p>
            </div>
            <div className={scss.right}>
              <p className={scss.description}>
                Работаю над разработкой и поддержкой веб-приложений для
                онлайн-кинотеатра. Основной стек включает{" "}
                <strong>Next.js</strong> для серверного рендеринга и
                маршрутизации,
                <strong>React Query</strong> для эффективного управления данными
                и кеширования, а также <strong>Tailwind CSS</strong> для
                стилизации компонентов. Улучшаю производительность, внедряю
                новые фичи и оптимизирую пользовательский опыт.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiens;
