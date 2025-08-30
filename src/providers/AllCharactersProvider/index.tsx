import { useEffect, useReducer } from "react";
import { AllCharactersContext } from "../../contexts/AllCharactersContext";
import { allCharactersReducer } from "../../reducers/AllCharactersReducer";
import { fetchAllCharacters } from "../../services/Character";
import type { AllCharacters } from "../../models/AllCharacters";

type AllCharactersProviderProps = {
  children: React.ReactNode;
};

export const AllCharactersProvider: React.FC<AllCharactersProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(allCharactersReducer, {
    allCharacters: [],
    loading: false,
    error: null,
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]") as AllCharacters[],
  });

  const toggleFavorite = (character: AllCharacters) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: character })
  }

  useEffect(() => {
    const loadAllCharacters = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const data = await fetchAllCharacters();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch {
        dispatch({
          type: "FETCH_ERROR",
          payload: "Erro ao carregar personagens.",
        });
      }
    };

    loadAllCharacters();
  }, []);

  return (
    <AllCharactersContext.Provider value={{
       ...state,
       toggleFavorite
       }}>
      {children}
    </AllCharactersContext.Provider>
  );
};
