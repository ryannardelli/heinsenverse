import type { AllCast } from '../models/AllCast';
import type { AllCharacters } from '../models/AllCharacters';

type State = {
  allCharacters: AllCharacters[];
  loading: boolean;
  error: string | null;
  favorites: AllCast[];
};

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: AllCharacters[] }
  | { type: 'FETCH_ERROR'; payload: string }

export function allCharactersReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, allCharacters: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
