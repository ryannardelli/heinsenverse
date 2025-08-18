import { useContext } from "react";
import { AllEpisodesContext } from "../contexts/AllEpisodesContext";

export function useAllEpisodesContext() {
    return useContext(AllEpisodesContext);
}