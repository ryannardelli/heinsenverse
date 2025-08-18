import { useEffect, useReducer } from 'react';
import { BestCharacterContext } from '../../contexts/BestCharactersContext';
import { characterReducer } from '../../reducers/BestCharacterReducer';
import { fetchBestCharacters } from '../../services/homeApi';

type BestCharacterProviderProps = {
  children: React.ReactNode;
};

export const BestCharactersProvider: React.FC<BestCharacterProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(characterReducer, {
    characters: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const loadCharacters = async () => {
      dispatch({ type: 'FETCH_START' });

      try {
        const data = await fetchBestCharacters();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch {
        dispatch({
          type: 'FETCH_ERROR',
          payload: 'Erro ao carregar personagens.',
        });
      }
    };

    loadCharacters();
  }, []);

  return (
    <BestCharacterContext.Provider value={state}>
      {children}
    </BestCharacterContext.Provider>
  );
};
