import type { BestCharacter } from "../models/BestCharacter";

type State = {
    characters: BestCharacter[];
    loading: boolean;
    error: string | null;
}

type Action = 
    | { type: "FETCH_START" }
    | { type: "FETCH_SUCCESS"; payload: BestCharacter[] }
    | { type: "FETCH_ERROR"; payload: string };

export function characterReducer(state: State, action: Action): State {
    switch(action.type) {
        case "FETCH_START":
            return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, characters: action.payload };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}