import { useContext } from "react";
import { BestCharacterContext } from "../contexts/BestCharactersContext";

export function useBestCharacterContext() {
    return useContext(BestCharacterContext);
}