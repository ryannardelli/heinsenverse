import { createContext } from "react";
import type { AllCharacters } from "../../models/AllCharacters";

export type AllCharactersProps = {
    allCharacters: AllCharacters[],
    loading: boolean,
    error: string | null,
    favoritesCharacter: number[],
    toggleFavorite: (id: number) => void;
}

export const AllCharactersContext = createContext<AllCharactersProps | undefined>(undefined);