import styles from './AboutStyles.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Lightbulb, 
  Target, 
  Rocket, 
  Heart, 
  Coffee,
  Code2
} from 'lucide-react';

function About() {
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

  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: <Target size={24} />,
      title: "Precision",
      description: "Attention to detail in every line of code and design element"
    },
    {
      icon: <Heart size={24} />,
      title: "Passion",
      description: "Genuinely love what I do and it shows in my work"
    },
    {
      icon: <Rocket size={24} />,
      title: "Growth",
      description: "Continuously learning and adapting to new challenges"
    }
  ];

  return (
    <motion.section 
      id="about" 
      className={styles.container}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1 className="sectionTitle" variants={itemVariants}>
        About Me
      </motion.h1>

      <div className={styles.aboutContent}>
        <motion.div className={styles.aboutText} variants={itemVariants}>
          <h2>Hi there! I'm Tushar 👋</h2>
          <p>
            I'm a passionate Frontend Developer with a love for creating beautiful, 
            functional, and user-centric web experiences. My journey into tech started 
            with curiosity and has evolved into a deep passion for crafting digital solutions 
            that make a difference.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends, contributing 
            to open-source projects, or sharing knowledge with the developer community. 
            I believe in the power of clean code, thoughtful design, and continuous learning.
          </p>
          
          <div className={styles.funFacts}>
            <h3>Fun Facts About Me</h3>
            <ul>
              <li><Coffee size={16} /> Powered by coffee and curiosity</li>
              <li><Code2 size={16} /> Written 10,000+ lines of code</li>
              <li><Rocket size={16} /> Always excited about the next project</li>
              <li><Heart size={16} /> Love helping others learn to code</li>
            </ul>
          </div>
        </motion.div>

        <motion.div className={styles.aboutVisual} variants={itemVariants}>
          <div className={styles.values}>
            <h3>What Drives Me</h3>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className={styles.valueCard}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.5
                      }
                    }
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className={styles.valueIcon}>
                    {value.icon}
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;


