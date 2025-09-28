import { LogIn } from "lucide-react";
import styles from './styles.module.css';

export function LoginButton() {
    return(
    <button className={styles.button}>
      <LogIn />
      Fazer Login
    </button>
    );
}