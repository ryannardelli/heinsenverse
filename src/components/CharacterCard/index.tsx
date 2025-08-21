import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAllCharactersContext } from "../../hooks/useAllCharactersContext";

type allCharacters = {
  id: number;
  name: string;
  imageUrl: string;
};

export function CharacterCard() {

  const {allCharacters, loading, error} = useAllCharactersContext();
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    console.log(allCharacters);
  }, [allCharacters])

  if(loading) return <p>Carregando personagens...</p>
  if(error) return <p>Erro: {error}</p>

   const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className={styles.grid}>
      {allCharacters.map(char => (
        <div key={char.id} className={styles.card}>
          <img
            src={char.imageUrl}
            alt={char.name}
            className={styles.image}
          />
          <div className={styles.info}>
            <h3 className={styles.name}>{char.name}</h3>
            <p className={styles.nickname}>{char.character}</p>
            <div className={styles.actions}>
              <button
                className={`${styles.favorite} ${
                  favorites.includes(char.id) ? styles.active : ""
                }`}
                onClick={() => toggleFavorite(char.id)}
              >
                {favorites.includes(char.id) ? "★ Favorito" : "☆ Favorito"}
              </button>
              <button className={styles.moreInfo}>Mais Info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
