import { useContext } from "react";
import { AllCharactersContext } from "../contexts/AllCharactersContext";

export function useAllCharactersContext() {
    return useContext(AllCharactersContext);
}