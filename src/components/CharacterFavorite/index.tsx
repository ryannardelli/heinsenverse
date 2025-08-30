import styles from './styles.module.css';

import Heading from '../Heading';
import { useAllCharactersContext } from '../../hooks/useAllCharactersContext';
import { FavoriteCharacterCard } from '../FavoriteCharacterCard';
import { useEffect } from 'react';

export function CharacterFavorite() {
  const { favorites, toggleFavorite } = useAllCharactersContext();

  useEffect(() => {
    console.log(favorites);
  }, [favorites])

  // só renderiza se houver favoritos
  if (favorites.length === 0) return null;

  return (
    <>
      <Heading>Personagens Favoritado</Heading>

      <div className={styles.gridContainer}>
        {favorites.map(char => (
          <FavoriteCharacterCard
            key={char.character.id}
            title="Remover dos favoritos"
            ariaLabel="Remover dos favoritos"
            image={char.character.image?.original}
            name={char.character.name}
            isFavorite={true}
            onToggleFavorite={() => toggleFavorite(char)}
          />
        ))}
      </div>
    </>
  );
}
