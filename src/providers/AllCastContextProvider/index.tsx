import { useEffect, useReducer } from 'react';
import { allCastReducer } from '../../reducers/AllCastReducer';
import { AllCastContext } from '../../contexts/AllCastContext';
import type { AllCast } from '../../models/AllCast';
import { fetchAllCast } from '../../services/CastApi';

type AllCastContextProviderProps = {
  children: React.ReactNode;
};

export const AllCastProvider: React.FC<AllCastContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(allCastReducer, {
    allCast: [],
    loading: false,
    error: null,
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  });

  const toggleFavorite = (character: AllCast) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: character })
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites])

  useEffect(() => {
    const loadAllCast = async () => {
      dispatch({ type: 'FETCH_START' });

      try {
        const data = await fetchAllCast();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch {
        dispatch({
          type: 'FETCH_ERROR',
          payload: 'Erro ao carregar elenco.',
        });
      }
    };

    loadAllCast();
  }, []);

  return (
    <AllCastContext.Provider value={{
      ...state,
      toggleFavorite
    }}>{children}</AllCastContext.Provider>
  );
};
