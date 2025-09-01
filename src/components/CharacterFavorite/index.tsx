import styles from './styles.module.css';

import Heading from '../Heading';
import { useAllCharactersContext } from '../../hooks/useAllCharactersContext';
import { FavoriteCharacterCard } from '../FavoriteCharacterCard';
import { useEffect } from 'react';

export function CharacterFavorite() {
  const { favoritesCharacter, toggleFavorite } = useAllCharactersContext();

  useEffect(() => {
    console.log(favoritesCharacter);
  }, [favoritesCharacter])

  // só renderiza se houver favoritos
  if (favoritesCharacter.length === 0) return null;

  return (
    <>
      <Heading>Personagens Favoritado</Heading>

      <div className={styles.gridContainer}>
        {favoritesCharacter.map(char => (
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
