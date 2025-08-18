import styles from './styles.module.css';

export default function Header() {
    return(
      <header className={styles.header}>
        <ul className={styles.menuBar}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Episódios</a></li>
        <li><a href="/">Personagens</a></li>
        <li><a href="/">Elenco</a></li>
        <li><a href="/">Favoritos</a></li>
        <li><a href="/">Sobre</a></li>
      </ul>
      </header>
    );
}
