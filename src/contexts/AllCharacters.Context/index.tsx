import { createContext } from "react";
import type { AllCharacters } from "../../models/AllCharacters";

export type AllCharactersContextProps = {
  allCharacters: AllCharacters[];
  loading: boolean;
  error: string | null;
};

export const AllCharactersContext = createContext<AllCharactersContextProps | undefined>(undefined);