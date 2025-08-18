import type { AllEpisodes } from "../models/AllEpisodes";

type State = {
  episodes: AllEpisodes[];
  loading: boolean;
  error: string | null;
};

type Action = 
    | { type: "FETCH_START" }
    | { type: "FETCH_SUCCESS"; payload: AllEpisodes[] }
    | { type: "FETCH_ERROR"; payload: string };

export function allEpisodesReducer(state: State, action: Action): State {
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