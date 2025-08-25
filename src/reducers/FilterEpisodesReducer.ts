import type { FilterEpisodes } from "../models/FilterEpisodes";

export type FilterAction = 
    | { type: "SET_SEARCH"; payload: string }
    | { type: "SET_SEASON"; payload: string }
    | { type: "SET_EPISODE"; payload: string }
    | { type: "RESET"};

export function FilterEpisodesReducer(state: FilterEpisodes, action: FilterAction ): FilterEpisodes {
    switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_SEASON":
      return { ...state, season: action.payload, episode: "" }; // reset episódio ao trocar temporada
    case "SET_EPISODE":
      return { ...state, episode: action.payload };
    case "RESET":
      return { search: "", season: "", episode: "" };
    default:
      return state;
  }
}