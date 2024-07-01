import styles from "./ProjectsStyles.module.css";
import Youtube from "../../assets/NamasteYoutube.png";
import NetflixGPT from "../../assets/Netflix GPT.png";
import QuickBite from "../../assets/QuickBite.png";
import snakeGame from "../../assets/snake-game-ai-gen.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Youtube}
          link="https://namaste-youtube-sandy.vercel.app/"
          h3="Namaste-YouTube"
          p="Video Platform"
        />
        <ProjectCard
          src={NetflixGPT}
          link="https://netflix-lvks9bv0h-tmeena202s-projects.vercel.app/"
          h3="NetflixGPT"
          p="Entertainment App with AI search"
        />
        <ProjectCard
          src={QuickBite}
          link="https://quick-bite-ten.vercel.app/"
          h3="QuickBite"
          p="Restaurant App"
        />
        <ProjectCard
          src={snakeGame}
          link="https://snake-game-delta-red.vercel.app/"
          h3="Snake-Game"
          p="A snake game"
        />
      </div>
    </section>
  );
}

export default Projects;
