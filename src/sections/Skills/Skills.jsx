import styles from "./SkillsStyles.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code, 
  Globe, 
  Database, 
  Settings
} from "lucide-react";

function Skills() {
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["JavaScript", "TypeScript", "Java", "Python", "HTML5", "CSS3"]
    },
    {
      title: "Frontend",
      icon: <Globe size={24} />,
      skills: ["React.js", "Redux Toolkit", "Next.js", "Tailwind CSS", "SASS", "Responsive Design"]
    },
    {
      title: "Backend & Database",
      icon: <Database size={24} />,
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings size={24} />,
      skills: ["Git", "GitHub", "Vite", "Webpack", "npm", "VS Code"]
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className={styles.container}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1 
        className="sectionTitle"
        variants={itemVariants}
      >
        Skills & Technologies
      </motion.h1>
      
      <motion.div className={styles.skillsGrid} variants={containerVariants}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className={styles.skillCategory}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            
            <div className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className={styles.skillItem}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.4
                      }
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className={styles.additionalSkills}
        variants={itemVariants}
      >
        <h3>Core Concepts</h3>
        <div className={styles.conceptsList}>
          {["OOP", "Data Structures & Algorithms", "System Design", "Agile Development", "Testing", "Performance Optimization"].map((concept, index) => (
            <motion.span
              key={index}
              className={styles.conceptTag}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.8 + index * 0.1,
                    duration: 0.4
                  }
                }
              }}
              whileHover={{ scale: 1.05 }}
            >
              {concept}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Skills;
