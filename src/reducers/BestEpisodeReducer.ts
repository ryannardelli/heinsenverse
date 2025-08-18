import type { BestEpisode } from "../models/BestEpisode";

type State = {
  episodes: BestEpisode[];
  loading: boolean;
  error: string | null;
};

type Action = 
    | { type: "FETCH_START" }
    | { type: "FETCH_SUCCESS"; payload: BestEpisode[] }
    | { type: "FETCH_ERROR"; payload: string };

export function episodesReducer(state: State, action: Action): State {
    switch(action.type) {
        case "FETCH_START":
            return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, episodes: action.payload };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}