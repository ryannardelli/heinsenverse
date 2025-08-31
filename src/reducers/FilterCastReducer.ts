import type { FilterCast } from "../models/FilterCast";

export type FilterActionSearchCast = 
    | { type: "SET_SEARCH"; payload: string }
    | { type: "RESET"; }

export function FilterCastReducer(state: FilterCast , action: FilterActionSearchCast): FilterCast {
    switch (action.type) {
        case "SET_SEARCH":
            return { ...state, search: action.payload }
        case "RESET":
            return { search: "" }
        default:
            return state;
    }
}