import styles from './styles.module.css';
import { useAllEpisodesContext } from "../../hooks/useAllEpisodesContext";
import { useReducer } from 'react';
import FilterHeading from '../FilterHeadingEpisodes';
import { FilterEpisodesReducer } from '../../reducers/FilterEpisodesReducer';
import { motion } from 'framer-motion';
import { NoResult } from '../NoResult';

export function AllEpisodes() {
    const [state, dispatch] = useReducer(FilterEpisodesReducer, {
        search: "",
        season: "",
        episode: "",
    });

    const context = useAllEpisodesContext();

    if (!context) return null;

    const { episodes } = context;

    const { search, season, episode } = state;

    const filteredEpisodes = episodes.filter(ep => {
        const matchesSearch = ep.name.toLowerCase().includes(search.toLowerCase());
        const matchesSeason = season ? ep.season_number === Number(season) : true;
        const matchesEpisode = episode ? ep.episode_number === Number(episode) : true;
        return matchesSearch && matchesSeason && matchesEpisode;
  });

  return (
  <div>
    <FilterHeading
      state={state}
      dispatch={dispatch}
    />
    <div className={styles.container}>
      {filteredEpisodes.length === 0 ? (
        <NoResult>Nenhum episódio encontrado.</NoResult>
      ) : (
        filteredEpisodes.map((ep) => (
          <motion.div
            key={ep.id}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {ep.still_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300${ep.still_path}`}
                alt={ep.name}
              />
            )}
            <div className={styles.info}>
              <h3>{ep.name}</h3>
              <p>
                Temporada {ep.season_number === 0 ? 1 : ep.season_number} - Episódio{" "}
                {ep.episode_number}
              </p>
              <p>{ep.overview}</p>
            </div>
          </motion.div>
        ))
      )}
    </div>
  </div>
);

}