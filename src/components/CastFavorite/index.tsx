import styles from './styles.module.css';

import { useAllCastContext } from "../../hooks/useAllCastContext";
import Heading from "../Heading";
import { FavoriteCastCard } from "../FavoriteCastCard";

export function CastFavorite() {
    const { favorites, toggleFavorite } = useAllCastContext();

    if(favorites.length === 0) {
        return(
            <>
                <Heading>Elenco Favoritado</Heading>
                <p style={{ textAlign: "center", fontSize: "1rem" }}>Ainda não há elenco favoritado</p>
            </>
        );
    }
      
    return(
        <>
        <Heading>Elenco Favoritado</Heading>

        <div className={styles.gridContainer}>
            {favorites.map(char => (
                <FavoriteCastCard
                    title='Remover dos favoritos'
                    ariaLabel="Remover dos favoritos"
                    key={char.id}
                    image={char.imageUrl}
                    name={char.name}
                    nickname={char.character || ""}
                    isFavorite={favorites.some(fav => fav.id === char.id)}
                    onToggleFavorite={() => toggleFavorite(char)}
                />
            ))}

            {favorites.length === 0 && (
                <p style={{textAlign: "center", fontSize: "1.0rem"}}>Ainda não há elenco favoritado</p>
            )}
        </div>
        </>
    );
}