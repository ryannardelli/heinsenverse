import { motion } from 'framer-motion';
import styles from './styles.module.css';

type FavoriteCastCardProps = {
    image: string,
    name: string,
    nickname: string,
    isFavorite: boolean;
    onToggleFavorite: () => void;
    ariaLabel: string;
    title: string;
}

export function FavoriteCastCard({ image, name, nickname, title, ariaLabel, isFavorite, onToggleFavorite }: FavoriteCastCardProps) {
    return(
        <div className={styles.grid}>
            <div className={styles.card}>
                <img src={image || "/src/assets/img/default.png"} alt={name} className={styles.image} />
                <div className={styles.info}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.nickname}>{nickname}</p>

                    <div>
                        <motion.button
                        title={title}
                            aria-label={ariaLabel}
                            animate={{ scale: isFavorite ? 1 : 1 }}
                            transition={{ duration: 0.2 }}
                            className={`${styles.favorite} ${isFavorite ? styles.active : ""}`}
                            onClick={onToggleFavorite}
                        >
                        {isFavorite ? "Remover" : "Remover"}
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}