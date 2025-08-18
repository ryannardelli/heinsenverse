import { useEffect, useReducer } from "react";
import { allEpisodesReducer } from "../../reducers/AllEpisodeReducer";
import { fetchAllEpisodes } from "../../services/episodesApi";
import { AllEpisodesContext } from "../../contexts/AllEpisodesContext";

type AllEpisodesContextProviderProps = {
    children: React.ReactNode;
}

export const AllEpisodesProvider: React.FC<AllEpisodesContextProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(allEpisodesReducer, {
        episodes: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const loadEpisodes = async () => {
            dispatch({ type: 'FETCH_START' });

            try {
                const data = await fetchAllEpisodes();
                dispatch({ type:  'FETCH_SUCCESS', payload: data})
            } catch {
                dispatch({
                    type: 'FETCH_ERROR',
                    payload: 'Erro ao carregar episódios.',
                });
            }
        }

        loadEpisodes();
    }, [])

    return(
        <AllEpisodesContext.Provider value={state}>
            {children}
        </AllEpisodesContext.Provider>
    );
}