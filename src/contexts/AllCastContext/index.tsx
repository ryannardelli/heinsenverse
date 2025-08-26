import { createContext } from 'react';
import type { AllCast } from '../../models/AllCast';

export type AllCastContextProps = {
  allCast: AllCast[];
  loading: boolean;
  error: string | null;
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const AllCastContext = createContext<AllCastContextProps | undefined>(undefined);
