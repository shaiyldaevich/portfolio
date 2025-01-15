// @ts-ignore
import GitHubCalendar from "react-github-calendar";
import scss from "./Git.module.scss"
const WorkActivity = () => {
  const username = "shaiyldaevich"; // GitHub username

  // Цветовая тема для календаря
  const theme = {
    dark: ["#2c2d2e", "#501065", "#7a06b4", "#9c4fb8", "#d672e1"], // Цвета для "dark mode"
  };

  

  return (
    <div className={scss.git}>
      <GitHubCalendar username={username} theme={theme} />
    </div>
  );
};

export default WorkActivity;
