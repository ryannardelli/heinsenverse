import styles from './styles.module.css';
import { useAllEpisodesContext } from "../../hooks/useAllEpisodesContext";

export function AllEpisodes() {
    const context = useAllEpisodesContext();

    if (!context) return null;

    const { episodes } = context;

    return (
        <div className={styles.container}>
            {episodes.map(ep => (
                <div key={ep.id} className={styles.card}>
                    {ep.still_path && (
                        <img src={`https://image.tmdb.org/t/p/w300${ep.still_path}`} alt={ep.name} />
                    )}
                    <div className={styles.info}>
                        <h3>{ep.name}</h3>
                        <p>Temporada {ep.season_number === 0 ? 1 : ep.season_number} - Episódio {ep.episode_number}</p>
                        <p>{ep.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}