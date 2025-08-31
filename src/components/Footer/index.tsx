import { Github, Linkedin } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLinks } from '../RouterLinks';

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
            <RouterLinks href='/'>
              Home
            </RouterLinks>
            <li>
              <RouterLinks href='/episodes'>
                Episódios
              </RouterLinks>
            </li>
            <li>
              <RouterLinks href='/characters'>
                Personagens
            </RouterLinks>
            </li>
            <li>
              <RouterLinks href='/cast'>
                  Elenco
              </RouterLinks>
            </li>

            <li>
              <RouterLinks href='/favorites'>
                  Favoritos
              </RouterLinks>
            </li>

             <li>
              <RouterLinks href='/about'>
                  Sobre
              </RouterLinks>
            </li>
          </ul>
        </div>

        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/ryannardelli/" target='_blank'>
              <Linkedin size={30} />
          </a>

          <a href="https://github.com/ryannardelli" target='_blank'>
              <Github size={30} />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} Heinsenverse. Todos os direitos reservados.
      </div>
    </footer>
  );
}
