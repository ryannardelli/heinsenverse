import { createContext } from "react";
import type { BestCharacter } from "../../models/BestCharacter";

export type BestCharactersType = {
  characters: BestCharacter[];
  loading: boolean;
  error: string | null;
};

export const BestCharacterContext = createContext<BestCharactersType | undefined>(undefined);