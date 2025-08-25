import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAllCharactersContext } from "../../hooks/useAllCharactersContext";
import { motion } from "framer-motion";

type AllCharacters = {
  id: number;
  name: string;
  imageUrl: string;
  character?: string;
};

export function CharacterCard() {
  const { allCharacters, loading, error } = useAllCharactersContext();
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // Quantos personagens mostrar
  const [itemsToShow, setItemsToShow] = useState(10);
  const [visibleChars, setVisibleChars] = useState<AllCharacters[]>([]);

  useEffect(() => {
    setVisibleChars(allCharacters.slice(0, itemsToShow));
  }, [allCharacters, itemsToShow]);

  if (loading) return <p style={{textAlign: "center"}}>Carregando personagens...</p>
  if (error) return <p style={{textAlign: "center"}}>Erro: {error}</p>

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

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
                whileTap={{ scale: 0.9 }} // anima ao clicar
                className={`${styles.favorite} ${
                  favorites.includes(char.id) ? styles.active : ""
                }`}
                onClick={() => toggleFavorite(char.id)}
              >
                {favorites.includes(char.id) ? "★ Favorito" : "☆ Favorito"}
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} className={styles.moreInfo}>
                Mais Info
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {visibleChars.length < allCharacters.length && (
      <div className={styles.loadingContainer}>
        <button onClick={loadMore} className={styles.loading}>
          Carregar mais
        </button>
      </div>
    )}
  </>
);

}

