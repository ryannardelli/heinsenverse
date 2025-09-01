import styles from './styles.module.css';

import { useAllCastContext } from "../../hooks/useAllCastContext";
import { FavoriteCastCard } from "../FavoriteCastCard";
import Heading from '../Heading';

export function CastFavorite() {
  const { favoritesCast, toggleFavorite } = useAllCastContext();

  // só renderiza se houver favoritos
  if (favoritesCast.length === 0) return null;

  return (
    <>
      <Heading>Elenco Favoritado</Heading>
      
      <div className={styles.gridContainer}>
        {favoritesCast.map(char => (
          <FavoriteCastCard
            key={char.id}
            title="Remover dos favoritos"
            ariaLabel="Remover dos favoritos"
            image={char.imageUrl}
            name={char.name}
            nickname={char.character || ""}
            isFavorite={true} // sempre true, porque só mostra favoritos
            onToggleFavorite={() => toggleFavorite(char)}
          />
        ))}
      </div>
    </>
  );
}
