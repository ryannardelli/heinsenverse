import { RouterLinks } from '../RouterLinks';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menuBar}>
        <li><RouterLinks href="/">Home</RouterLinks></li>
        <li><RouterLinks href="/episode">Episódios</RouterLinks></li>
        <li><RouterLinks href="/characters">Personagens</RouterLinks></li>
        <li><RouterLinks href="#">Elenco</RouterLinks></li>
        <li><RouterLinks href="/favorite">Favoritos</RouterLinks></li>
        <li><RouterLinks href="/about">Sobre</RouterLinks></li>
      </ul>
    </header>
  );
}
