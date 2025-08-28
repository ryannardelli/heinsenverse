import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useAllCastContext } from "../../hooks/useAllCastContext";

type AllCast = {
  id: number;
  name: string;
  imageUrl: string;
  character?: string;
};

export function CastCard() {

  const { allCast, loading, error, toggleFavorite, favorites } = useAllCastContext();
  
  // Quantos personagens mostrar
  const [itemsToShow, setItemsToShow] = useState(10);
  const [visibleChars, setVisibleChars] = useState<AllCast[]>([]);

  useEffect(() => {
    setVisibleChars(allCast.slice(0, itemsToShow));
  }, [allCast, itemsToShow]);

  if (loading) return <p style={{textAlign: "center"}}>Carregando personagens...</p>
  if (error) return <p style={{textAlign: "center"}}>Erro: {error}</p>

  const loadMore = () => {
    setItemsToShow(prev => prev + 20);
  };

  return (
  <>
    <div className={styles.grid}>
      {visibleChars.map(char => (
        <motion.div
          key={char.id}
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={char.imageUrl || "/src/assets/img/default.png"}
            alt={char.name}
            className={styles.image}
          />
          <div className={styles.info}>
            <h3 className={styles.name}>{char.name}</h3>
            <p className={styles.nickname}>{char.character}</p>
            <div className={styles.actions}>
              <motion.button       
                animate={{ scale: favorites.some((fav: AllCast) => fav.id === char.id) ? 1 : 1 }}
                transition={{ duration: 0.2 }}
                className={`${styles.favorite} ${
                  favorites.some((fav: AllCast) => fav.id === char.id) ? styles.active : ""
                }`}
                onClick={() => toggleFavorite(char)}
              >
                {favorites.some(fav => fav.id === char.id) ? "★ Favorito" : "☆ Favorito"}
              </motion.button>

              <motion.button whileHover={{ scale: 1.05 }} className={styles.moreInfo}>
                Mais Info
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {visibleChars.length < allCast.length && (
      <div className={styles.loadingContainer}>
        <button onClick={loadMore} className={styles.loading}>
          Carregar mais
        </button>
      </div>
    )}
  </>
);

}