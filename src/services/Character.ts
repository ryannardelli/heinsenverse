import type { Character } from "../models/CharacterAPI";

export async function fetchAllCharacters(): Promise<Character[]> {
  try {
    const res = await fetch('https://api.tvmaze.com/shows/169/cast');

    if (!res.ok) throw new Error("Erro ao fazer a requisição");

    const data: Character[] = await res.json();
    return data;
  } catch (e) {
    console.log("Erro ao acessar os personagens.", e);
    return [];
  }
}
