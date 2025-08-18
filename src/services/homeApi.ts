import type { BestCharacter } from "../models/BestCharacter";
import type { BestEpisode } from "../models/BestEpisode";
import { catchApiKey } from "../utils/catchApiKey";
import { fetchBaseUrl, fetchSize } from "./configurationApi";

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

  return allEpisodes;
}

export async function fetchBestCharacters(): Promise<BestCharacter[]> {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${serieId}/credits?api_key=${api_key}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error(`Erro ao buscar personagens: ${response.status}`);
  }

  const data = await response.json();

  const base_url = await fetchBaseUrl();
  const profileSizes = await fetchSize("profile_sizes");

  // escolher um tamanho padrão
  const profileSize = profileSizes.includes("original")
    ? "original"
    : profileSizes[profileSizes.length - 1];

  // adicionar a URL completa da imagem
  const charactersWithImages: BestCharacter[] = data.cast.map((char: any) => ({
    ...char,
    imageUrl: char.profile_path ? `${base_url}${profileSize}${char.profile_path}` : null
  }));

  return charactersWithImages;
}