import { useContext } from "react";
import { AllCharactersContext } from "../contexts/AllCharactersContext";

export function useAllCharactersContext() {
    const context = useContext(AllCharactersContext);

    if(!context) throw new Error("useAllCharactersContext deve ser usado dentro de um AllCharactersContext");

    return context;
}