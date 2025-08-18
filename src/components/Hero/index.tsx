import styles from './styles.module.css';

export function Hero() {
    return(
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1>Heinsenverse</h1>
          <p>Explore tudo sobre a série Breaking Bad em um só lugar</p>
        </div>
      </div>
    </section>
    );
}