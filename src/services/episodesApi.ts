// import type { AllEpisodes } from "../models/AllEpisodes";
// import { catchApiKey } from "../utils/catchApiKey";

// const api_key = catchApiKey();
// const serieId = 1396; // id Breaking Bad

// export async function fetchAllEpisodes(): Promise<AllEpisodes[]> {
//     const seriesResponse = await fetch(`https://api.themoviedb.org/3/tv/${serieId}?api_key=${api_key}&language=pt-BR`);
//     const data = await seriesResponse.json();

//     return data;
// }

import type { AllEpisodes } from "../models/AllEpisodes";
import { catchApiKey } from "../utils/catchApiKey";

const api_key = catchApiKey();
const serieId = 1396; // id Breaking Bad

export async function fetchAllEpisodes(): Promise<AllEpisodes[]> {
  // Pega as informações da série (inclui temporadas)
  const seriesResponse = await fetch(
    `https://api.themoviedb.org/3/tv/${serieId}?api_key=${api_key}&language=pt-BR`
  );
  const seriesData = await seriesResponse.json();

  const allEpisodes: AllEpisodes[] = [];

  // Itera sobre cada temporada para pegar os episódios
  for (const season of seriesData.seasons) {
    const seasonResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${serieId}/season/${season.season_number}?api_key=${api_key}&language=pt-BR`
    );
    const seasonData = await seasonResponse.json();

    // Adiciona os episódios ao array
    allEpisodes.push(
      ...seasonData.episodes.map((ep: any) => ({
        id: ep.id,
        name: ep.name,
        overview: ep.overview,
        season_number: season.season_number,
        episode_number: ep.episode_number,
        still_path: ep.still_path,
      }))
    );
  }

  return allEpisodes;
}