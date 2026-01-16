import styles from './ContactStyles.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  // EmailJS Configuration
  // Replace these with your EmailJS credentials
  // Get them from: https://dashboard.emailjs.com/
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Email service not configured. Please set up EmailJS credentials. Check EMAILJS_SETUP.md file for step-by-step instructions.' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'tusharmeena2002@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email me directly at tusharmeena2002@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
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
        Get In Touch
      </motion.h1>

      <motion.p 
        className={styles.subtitle}
        variants={itemVariants}
      >
        Have a project in mind or want to discuss opportunities? 
        I'd love to hear from you!
      </motion.p>

      <div className={styles.contactContent}>
        <motion.div className={styles.contactInfo} variants={itemVariants}>
          <h3>Let's Connect</h3>
          
          <div className={styles.contactItem}>
            <Mail size={20} />
            <span>tusharmeena2002@gmail.com</span>
          </div>
          
          <div className={styles.contactItem}>
            <MapPin size={20} />
            <span>Delhi, India</span>
          </div>

          <div className={styles.socialSection}>
            <h4>Follow Me</h4>
            <div className={styles.socialLinks}>
              <motion.a 
                href="https://github.com/tmeena202" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/tushar-meena-b620591a2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className={styles.contactForm}
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or say hello!"
              rows="5"
              required
            />
          </div>
          
          {submitStatus.message && (
            <div 
              className={`${styles.statusMessage} ${
                submitStatus.type === 'success' ? styles.success : styles.error
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <motion.button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send size={16} />
                </motion.div>
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
