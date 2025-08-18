// Aqui o styles foi colocado tudo em global.css, porque não foi viavel utilizar o CSS module, por isso
// esse componente ficou sem styles.module.css

type CardBestEpisodesProps = {
  title: string;
  description: string;
  season: number;
  episode: number;
  image: string;
};

export function CardBestEpisodes({ title, description, season, episode }: CardBestEpisodesProps) {
  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="content">
        <div className="score">8.6</div>
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="genre">
          <span style={{ ["--i" as any]: 1 }}>Drama</span>
          <span style={{ ["--i" as any]: 2 }}>Comédia</span>
        </div>
      </div>
    </>
  );
}
