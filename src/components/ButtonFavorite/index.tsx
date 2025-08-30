import styles from './styles.module.css';
import { motion } from "framer-motion";

type FavoriteButtonProps = {
    isActive: boolean;
    ontoggle: () => void;
}

export function ButtonFavorite({ isActive, ontoggle }: FavoriteButtonProps) {
    return(
        <motion.button       
            animate={{ scale: isActive ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
            className={`${styles.favorite} ${isActive ? styles.active : ""}`}
            onClick={ontoggle}
            >
            {isActive ? "★ Favorito" : "☆ Favorito"}
        </motion.button>
    );
}