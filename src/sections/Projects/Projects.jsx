import styles from "./ProjectsStyles.module.css";
import Youtube from "../../assets/NamasteYoutube.png";
import NetflixGPT from "../../assets/Netflix GPT.png";
import QuickBite from "../../assets/QuickBite.png";
import snakeGame from "../../assets/snake-game-ai-gen.png";
import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      src: Youtube,
      link: "https://namaste-youtube-sandy.vercel.app/",
      github: "https://github.com/tmeena202/namaste-youtube",
      h3: "Namaste-YouTube",
      p: "A modern YouTube clone with live chat, infinite scroll, and responsive design. Features real-time comments, video search, and optimized performance.",
      tech: ["React", "Redux Toolkit", "YouTube API", "Tailwind CSS"]
    },
    {
      src: NetflixGPT,
      link: "https://netflix-lvks9bv0h-tmeena202s-projects.vercel.app/",
      github: "https://github.com/tmeena202/netflix-gpt",
      h3: "NetflixGPT",
      p: "AI-powered entertainment platform with intelligent movie recommendations using OpenAI GPT. Browse movies with smart search functionality.",
      tech: ["React", "Firebase", "OpenAI API", "TMDB API", "Tailwind CSS"]
    },
    {
      src: QuickBite,
      link: "https://quick-bite-ten.vercel.app/",
      github: "https://github.com/tmeena202/quick-bite",
      h3: "QuickBite",
      p: "Modern food delivery app with real-time menu updates, cart management, and responsive design. Features restaurant search and ordering system.",
      tech: ["React", "Redux", "Swiggy API", "CSS Modules"]
    },
    {
      src: snakeGame,
      link: "https://snake-game-delta-red.vercel.app/",
      github: "https://github.com/tmeena202/snake-game",
      h3: "Snake Game",
      p: "Classic snake game built with vanilla JavaScript featuring smooth animations, score tracking, and responsive controls for all devices.",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"]
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className={styles.container}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1 
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h1>
      
      <motion.div className={styles.projectsContainer} variants={containerVariants}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            github={project.github}
            h3={project.h3}
            p={project.p}
            tech={project.tech}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
