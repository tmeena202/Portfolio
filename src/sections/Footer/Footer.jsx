import styles from "./FooterStyles.module.css";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      id="footer" 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <h3>Tushar Meena</h3>
          <p>Frontend Developer passionate about creating exceptional digital experiences</p>
        </div>
        
        <div className={styles.footerLinks}>
          <div className={styles.linkSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.linkSection}>
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/tmeena202" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/tushar-meena-b620591a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:tusharmeena2002@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr className={styles.divider} />
      
      <div className={styles.footerBottom}>
        <p>
          &copy; 2024 Tushar Meena. Made with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className={styles.heart}
          >
            <Heart size={16} fill="currentColor" />
          </motion.span>{" "}
          using React & Framer Motion
        </p>
        
        <motion.button
          className={styles.scrollToTop}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </motion.footer>
  );
}

export default Footer;
