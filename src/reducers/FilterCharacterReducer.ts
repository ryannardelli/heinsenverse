import type { FilterCharacter } from "../models/FilterCharacter";

export type FilterActionSearch = 
    | { type: "SET_SEARCH"; payload: string }
    | { type: "RESET"; }

export function FilterCharacterReducer(state: FilterCharacter , action: FilterActionSearch): FilterCharacter {
    switch (action.type) {
        case "SET_SEARCH":
            return { ...state, search: action.payload }
        case "RESET":
            return { search: "" }
        default:
            return state;
    }
}