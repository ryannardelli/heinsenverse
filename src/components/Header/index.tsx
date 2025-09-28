import { Menu, X } from 'lucide-react';
import { RouterLinks } from '../RouterLinks';
import styles from './styles.module.css';
import { useState } from 'react';
import { useLocation } from 'react-router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/episodes', label: 'Episódios' },
    { href: '/characters', label: 'Personagens' },
    { href: '/cast', label: 'Elenco' },
    { href: '/quiz', label: 'Quiz' },
    { href: '/favorites', label: 'Favoritos' },
    { href: '/about', label: 'Sobre' },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <RouterLinks href="/">Heinsenverse</RouterLinks>
      </div>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <RouterLinks
              href={link.href}
              className={location.pathname === link.href ? styles.currentRouter : ''}
            >
              {link.label}
            </RouterLinks>
          </li>
        ))}
      </ul>

      <div className={styles.toggleBtn} onClick={handleToggle}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <RouterLinks
              href={link.href}
              className={location.pathname === link.href ? styles.currentRouter : ''}
            >
              {link.label}
            </RouterLinks>
          </li>
        ))}
      </ul>
    </header>
  );
}