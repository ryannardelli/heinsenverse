import { createContext } from "react";
import type { BestEpisode } from "../../models/BestEpisode";

export type EpisodesContextType = {
  episodes: BestEpisode[];
  loading: boolean;
  error: string | null;
};

export const BestEpisodeContext = createContext<EpisodesContextType | undefined>(undefined);