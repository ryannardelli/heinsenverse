import type { AllCast } from '../models/AllCast';

type State = {
  allCast: AllCast[];
  loading: boolean;
  error: string | null;
  favorites: AllCast[];
};

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: AllCast[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'SET_CHARACTERS'; payload: AllCast[] }
  | { type: 'TOGGLE_FAVORITE'; payload: AllCast };

export function allCastReducer(state: State, action: Action): State {
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
        favorites: state.favorites.some(f => f.id === action.payload.id)
        ? state.favorites.filter(f => f.id !== action.payload.id)
        : [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}
