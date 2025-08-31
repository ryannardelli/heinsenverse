import { Menu, X } from 'lucide-react';
import { RouterLinks } from '../RouterLinks';
import styles from './styles.module.css';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <RouterLinks href="/">Heinsenverse</RouterLinks>
      </div>
      <ul className={styles.links}>
        <li><RouterLinks href="/">Home</RouterLinks></li>
        <li><RouterLinks href="/episodes">Episódios</RouterLinks></li>
        <li><RouterLinks href="/characters">Personagens</RouterLinks></li>
        <li><RouterLinks href="/cast">Elenco</RouterLinks></li>
        <li><RouterLinks href="/favorites">Favoritos</RouterLinks></li>
        <li><RouterLinks href="/about">Sobre</RouterLinks></li>
      </ul>

      <div className={styles.toggleBtn} onClick={handleToggle}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : ""}`}>
        <li><RouterLinks href="/">Home</RouterLinks></li>
        <li><RouterLinks href="/episodes">Episódios</RouterLinks></li>
        <li><RouterLinks href="/characters">Personagens</RouterLinks></li>
        <li><RouterLinks href="/cast">Elenco</RouterLinks></li>
        <li><RouterLinks href="/favorites">Favoritos</RouterLinks></li>
        <li><RouterLinks href="/about">Sobre</RouterLinks></li>
      </ul>
    </header>
  );
}
