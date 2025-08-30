import styles from './styles.module.css';

import { useAllCastContext } from "../../hooks/useAllCastContext";
import { FavoriteCastCard } from "../FavoriteCastCard";
import Heading from '../Heading';

export function CastFavorite() {
  const { favorites, toggleFavorite } = useAllCastContext();

  // só renderiza se houver favoritos
  if (favorites.length === 0) return null;

  return (
    <>
      <Heading>Elenco Favoritado</Heading>
      <div className={styles.gridContainer}>
        {favorites.map(char => (
          <FavoriteCastCard
            key={char.id}
            title="Remover dos favoritos"
            ariaLabel="Remover dos favoritos"
            image={char.imageUrl}
            name={char.name}
            nickname={char.character || ""}
            isFavorite={true}
            onToggleFavorite={() => toggleFavorite(char)}
          />
        ))}
      </div>
    </>
  );
}
