import styles from './styles.module.css';

import { motion } from 'framer-motion';

export function Hero() {
  return(
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1>Heinsenverse</h1>
          <p>Explore tudo sobre a série Breaking Bad em um só lugar</p>
        </motion.div>
      </div>
    </section>
  );
}
