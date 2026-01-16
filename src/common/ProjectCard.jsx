import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ src, link, h3, p, tech = [], github }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="card project-card"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img src={src} alt={`${h3} preview`} />
        <div className="project-overlay">
          <div className="project-links">
            <motion.a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
            {github && (
              <motion.a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3>{h3}</h3>
        <p>{p}</p>
        {tech.length > 0 && (
          <div className="tech-stack">
            {tech.map((technology, index) => (
              <span key={index} className="tech-tag">
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
