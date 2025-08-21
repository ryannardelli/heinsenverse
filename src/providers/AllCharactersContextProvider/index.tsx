import { useEffect, useReducer } from "react";
import { AllCharactersContext } from "../../contexts/AllCharacters.Context";
import { allCharactersReducer } from "../../reducers/AllCharacters";
import { fetchAllCharacters } from "../../services/charactersApi";

type AllCharactersContextProviderProps = {
    children: React.ReactNode;
}

export const AllCharactersProvider: React.FC<AllCharactersContextProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(allCharactersReducer, {
        allCharacters: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const loadAllCharacters = async () => {
            dispatch({ type: 'FETCH_START' });

            try {
                const data = await fetchAllCharacters();
                dispatch({ type:  'FETCH_SUCCESS', payload: data})
            } catch {
                dispatch({
                    type: 'FETCH_ERROR',
                    payload: 'Erro ao carregar episódios.',
                });
            }
        }

        loadAllCharacters();
    }, [])

    return(
        <AllCharactersContext.Provider value={state}>
            {children}
        </AllCharactersContext.Provider>
    );
}