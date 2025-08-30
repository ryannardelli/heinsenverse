import type { AllCharacters } from '../models/AllCharacters';

type State = {
  allCharacters: AllCharacters[];
  loading: boolean;
  error: string | null;
  favorites: AllCharacters[];
};

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: AllCharacters[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'TOGGLE_FAVORITE'; payload: AllCharacters };

export function allCharactersReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, allCharacters: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.some(f => f.character.id === action.payload.character.id)
        ? state.favorites.filter(f => f.character.id !== action.payload.character.id)
        : [...state.favorites, action.payload],
      };

    default:
      return state;
  }
}
