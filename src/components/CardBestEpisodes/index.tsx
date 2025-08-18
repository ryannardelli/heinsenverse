// Aqui o styles foi colocado tudo em global.css, porque não foi viavel utilizar o CSS module, por isso
// esse componente ficou sem styles.module.css

type CardBestEpisodesProps = {
  title: string;
  overview: string;
  seasonNumber: number,
  episodeNumber: number,
  image: string;
  voteAverage: number;
};

export function CardBestEpisodes({ title, overview, voteAverage, seasonNumber, episodeNumber }: CardBestEpisodesProps) {
  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="content">
        <div className="score">{voteAverage}</div>
        <div className="text">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>

        <div className="genre">
          <span style={{ ["--i" as any]: 1 }}>Temporada {seasonNumber}</span>
          <span style={{ ["--i" as any]: 2 }}>Episódio {episodeNumber}</span>
        </div>
      </div>
    </>
  );
}
