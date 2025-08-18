import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Heinsenverse</h2>
          <p>Explorando o universo Breaking Bad</p>
        </div>

        <div className={styles.links}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#characters">Personagens</a></li>
            <li><a href="#episodes">Episódios</a></li>
            <li><a href="#about">Sobre</a></li>
          </ul>
        </div>

        <div className={styles.social}>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Twitter">TW</a>
          <a href="#" aria-label="Instagram">IG</a>
        </div>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} Heinsenverse. Todos os direitos reservados.
      </div>
    </footer>
  );
}
