import styles from './styles.module.css';

import { useEffect } from "react";
import { useAllCharactersContext } from "../../hooks/useAllCharactersContext";
import { motion } from 'framer-motion';
import type { AllCharacters } from '../../models/AllCharacters';
import { ButtonFavorite } from '../ButtonFavorite';

export function CharacterCard() {
    const { allCharacters, loading, error, favorites, toggleFavorite } = useAllCharactersContext();

    useEffect(() => {
        console.log(allCharacters);
    }, [allCharacters]);

    if (loading) return <p style={{textAlign: "center"}}>Carregando personagens...</p>
    if (error) return <p style={{textAlign: "center"}}>Erro: {error}</p>

    return (
  <>
    <div className={styles.grid}>
      {allCharacters.map((char) => {
        
        const isFavorite = favorites.some((fav: AllCharacters) => fav.character.id === char.character.id);

        return (
          <motion.div
            key={char.character.id}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >   
            <div className={styles.card}>
              <img
                src={char.character.image?.original} 
                alt={char.character.name}
                className={styles.image}
              />

              <div className={styles.info}>
                <h3 className={styles.name}>{char.character.name}</h3>
                <div className={styles.actions}>
                <ButtonFavorite 
                  isActive={isFavorite}
                  ontoggle={() => toggleFavorite(char)} 
                />
              </div>     
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </>
);
}
