import { useContext } from "react";
import { BestEpisodeContext } from "../contexts/BestEpisodeContext";

export function useBestEpisodeContext() {
    return useContext(BestEpisodeContext);
}