import { createContext } from "react";
import type { AllEpisodes } from "../../models/AllEpisodes";

export type AllEpisodesContextProps = {
  episodes: AllEpisodes[];
  loading: boolean;
  error: string | null;
};

export const AllEpisodesContext = createContext<AllEpisodesContextProps | undefined>(undefined);