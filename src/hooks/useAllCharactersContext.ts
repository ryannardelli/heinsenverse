import { useContext } from "react";
import { AllCharactersContext } from "../contexts/AllCharacters.Context";

export function useAllCharactersContext() {
    return useContext(AllCharactersContext);
}