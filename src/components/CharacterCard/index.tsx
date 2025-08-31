import styles from './styles.module.css';

import { useAllCharactersContext } from "../../hooks/useAllCharactersContext";
import { motion } from 'framer-motion';
import type { AllCharacters } from '../../models/AllCharacters';
import { ButtonFavorite } from '../ButtonFavorite';
import { useEffect, useState } from 'react';
import { ButtonLoadMore } from '../ButtonLoadMore';
import { loadMoreItems } from '../../utils/loadMoreItems';
import { ContainerSearch } from '../ContainerSearch';
import { Search } from '../Search';

export function CharacterCard() {
    const { allCharacters, loading, error, favorites, toggleFavorite } = useAllCharactersContext();

    const [itemsToShow, setItemsToShow] = useState(10);
    const [visibleChars, setVisibleChars] = useState<AllCharacters[]>([]);

    useEffect(() => {
        setVisibleChars(allCharacters.slice(0, itemsToShow));
    }, [allCharacters, itemsToShow]);

    if (loading) return <p style={{textAlign: "center"}}>Carregando personagens...</p>
    if (error) return <p style={{textAlign: "center"}}>Erro: {error}</p>

    const loadMore = () => loadMoreItems(setItemsToShow, 10);

    return (
      <div>

        <ContainerSearch>
              <Search />
        </ContainerSearch>
        
        <div className={styles.grid}>
          {visibleChars.map((char) => {
            
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

        <ButtonLoadMore
            hasMore={visibleChars.length < allCharacters.length}
            onLoadMore={loadMore}
            label='Carregar mais'
          />
        </div>
);
}
