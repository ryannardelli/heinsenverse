import { createContext } from 'react';
import type { AllCast } from '../../models/AllCast';

export type AllCastContextProps = {
  allCast: AllCast[];
  loading: boolean;
  error: string | null;
  favoritesCast: AllCast[];
  // toggleFavorite: (id: number) => void;
  toggleFavorite: (character: AllCast) => void;
};

export const AllCastContext = createContext<AllCastContextProps | undefined>(undefined);
