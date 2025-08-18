import type { BestEpisode } from "../models/BestEpisode";
import { catchApiKey } from "../utils/catchApiKey";
import { fetchBaseUrl, fetchSize } from "./configuration";

const api_key = catchApiKey();
const serieId = 1396; // id Breaking Bad

export async function fetchBestEpisodes(): Promise<BestEpisode[]> {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${serieId}?api_key=${api_key}&language=pt-BR`
  );
  const data = await response.json();

  const base_url = await fetchBaseUrl();
  const posterSizes = await fetchSize("poster_sizes");

    // pega um tamanho padrão (original)
    const posterSize = posterSizes.includes("original") ? "original" : posterSizes[posterSizes.length - 1];

  const allEpisodes: BestEpisode[] = [];

  for (const season of data.seasons) {
    const seasonResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${serieId}/season/${season.season_number}?api_key=${api_key}&language=pt-BR`
    );

    const seasonData = await seasonResponse.json();

    const episodesWithImages = seasonData.episodes.map((ep: any) => ({
      ...ep,
      imageUrl: ep.still_path 
        ? `${base_url}${posterSize}${ep.still_path}` 
        : null
    }));

    allEpisodes.push(...episodesWithImages);
  }

  allEpisodes.sort((a, b) => b.vote_average - a.vote_average);

  // limita a 3
  return allEpisodes;
}
