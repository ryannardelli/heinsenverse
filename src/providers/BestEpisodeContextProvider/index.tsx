import { useEffect, useReducer } from "react";
import { episodesReducer } from "../../reducers/BestEpisodeReducer";
import { fetchBestEpisodes } from "../../services/api";
import { BestEpisodeContext } from "../../contexts/BestEpisodeContext";

type BestEpisodesProviderProps = {
  children: React.ReactNode;
};


export const BestEpisodesProvider: React.FC<BestEpisodesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(episodesReducer, {
    episodes: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const loadEpisodes = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const data = await fetchBestEpisodes();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch {
        dispatch({ type: "FETCH_ERROR", payload: "Erro ao carregar Episódios." });
      }
    };

    loadEpisodes();
  }, []);

  return (
    <BestEpisodeContext.Provider value={state}>
      {children}
    </BestEpisodeContext.Provider>
  );
};