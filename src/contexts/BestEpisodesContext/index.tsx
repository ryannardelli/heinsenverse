import { createContext } from "react";
import type { BestEpisode } from "../../models/BestEpisode";

export type EpisodesContextType = {
  episodes: BestEpisode[];
  loading: boolean;
  error: string | null;
};

export const EpisodesContext = createContext<EpisodesContextType | undefined>(undefined);