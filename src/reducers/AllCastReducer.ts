import type { AllCast } from '../models/AllCast';

export type AllCastState = {
  allCast: AllCast[];
  loading: boolean;
  error: string | null;
  favoritesCast: AllCast[];
};

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: AllCast[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'SET_CHARACTERS'; payload: AllCast[] }
  | { type: 'TOGGLE_FAVORITE'; payload: AllCast };

export function allCastReducer(state: AllCastState, action: Action): AllCastState {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, allCast: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case "SET_CHARACTERS":
      return { ...state, allCast: action.payload, loading: false }
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        favoritesCast: state.favoritesCast.some(f => f.id === action.payload.id)
        ? state.favoritesCast.filter(f => f.id !== action.payload.id)
        : [...state.favoritesCast, action.payload]
      }
    default:
      return state;
  }
}
