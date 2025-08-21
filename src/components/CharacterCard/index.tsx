import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./styles.module.css";
import { useAllCharactersContext } from "../../hooks/useAllCharactersContext";

type AllCharacters = {
  id: number;
  name: string;
  imageUrl: string;
  character?: string;
};

export function CharacterCard() {
  const { allCharacters, loading, error } = useAllCharactersContext();
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // Quantos personagens vamos mostrar por vez
  const [visibleChars, setVisibleChars] = useState<AllCharacters[]>([]);
  const [itemsToShow, setItemsToShow] = useState(20); // quantidade inicial

  useEffect(() => {
    setVisibleChars(allCharacters.slice(0, itemsToShow));
  }, [allCharacters, itemsToShow]);

  if (loading) return <p>Carregando personagens...</p>
  if (error) return <p>Erro: {error}</p>

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Função chamada quando o usuário chega no fim da lista
  const fetchMoreData = () => {
    setItemsToShow(prev => prev + 20); // carrega mais 20 personagens
  };

  return (
    <InfiniteScroll
      dataLength={visibleChars.length}
      next={fetchMoreData}
      hasMore={visibleChars.length < allCharacters.length}
      loader={<h4>Carregando mais personagens...</h4>}
      endMessage={<p style={{ textAlign: "center" }}><b>Não há mais personagens a ser carregado.</b></p>}
    >
      <div className={styles.grid}>
        {visibleChars.map(char => (
          <div key={char.id} className={styles.card}>
            <img src={char.imageUrl} alt={char.name} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.name}>{char.name}</h3>
              <p className={styles.nickname}>{char.character}</p>
              <div className={styles.actions}>
                <button
                  className={`${styles.favorite} ${favorites.includes(char.id) ? styles.active : ""}`}
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
    </InfiniteScroll>
  );
}
