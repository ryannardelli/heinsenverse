// import styles from './styles.module.css';

// type CardBestEpisodesProps = {
//     id?: number,
//     title: string;
//     description: string;
//     season: number;
//     episode: number;
//     image: string;
// }

// export function CardBestEpisodes({ title, description, season, episode, image, airDate }: CardBestEpisodesProps) {
//     return(
//         <div className={styles.container}>
//             <div className={styles.cardGrid}>
//                 <div className={styles.card}>
//                     <img src={image} alt={title} className={styles.cardImage}></img>
//                     <div className={styles.cardContent}>
//                         <h3 className={styles.cardTitle}>{title}</h3>
//                         <p className={styles.cardInfo}>Temporada {season}, Episódio {episode}</p>
//                         <p className={styles.cardDescription}>{description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// CardBestEpisodes.tsx
import styles from "./styles.module.css";

type CardBestEpisodesProps = {
  title: string;
  description: string;
  season: number;
  episode: number;
  image: string;
};

export function CardBestEpisodes({ title, description, season, episode, image }: CardBestEpisodesProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardInfo}>Temporada {season}, Episódio {episode}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}