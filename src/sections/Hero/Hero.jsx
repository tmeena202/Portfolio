import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/me.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Tushar's_Resume_Final.pdf";
import { useTheme } from "../../common/ThemeContext";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="hero" 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={styles.colorModeContainer} variants={imageVariants}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Tushar Meena"
        />
        <motion.img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>
      
      <motion.div className={styles.info} variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <motion.h1 
            variants={itemVariants}
            className={styles.name}
          >
            Tushar Meena
          </motion.h1>
          <motion.h2 variants={itemVariants} className={styles.title}>
            Frontend Developer & UI/UX Enthusiast
          </motion.h2>
          <motion.p variants={itemVariants} className={styles.subtitle}>
            I'm a passionate Frontend Developer from Delhi, India, specializing in creating 
            beautiful, responsive, and user-friendly web applications. With expertise in 
            React.js, modern JavaScript, and cutting-edge web technologies, I transform 
            ideas into engaging digital experiences.
          </motion.p>
          
          <motion.div className={styles.highlights} variants={itemVariants}>
            <div className={styles.highlight}>
              <span className={styles.number}>6+</span>
              <span className={styles.label}>Months Experience</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.number}>10+</span>
              <span className={styles.label}>Projects Completed</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.number}>5+</span>
              <span className={styles.label}>Technologies Mastered</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className={styles.socialAndActions} variants={itemVariants}>
          <motion.div className={styles.socialLinks} variants={itemVariants}>
            <motion.a 
              href="https://github.com/tmeena202" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={githubIcon} alt="Github icon" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tushar-meena-b620591a2/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={linkedinIcon} alt="Linkedin icon" />
            </motion.a>
          </motion.div>

          <motion.div className={styles.actions} variants={itemVariants}>
            <motion.a 
              href={CV} 
              download
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.button 
              className="btn btn-secondary"
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1.5, duration: 0.6 }
        }}
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
