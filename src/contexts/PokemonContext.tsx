import { createContext, Dispatch, ReactNode, SetStateAction, useReducer } from "react";
import { PokemonActionKind, pokemonReducer, PokemonState } from "../reducers/pokemonReducer";

interface PokemonProviderProps {
  children: ReactNode;
}

interface PokemonContextType {
  state: PokemonState;
  dispatch: Dispatch<SetStateAction<any>>;
  setPokemonName: (name: string) => void;
}

export const PokemonContext = createContext({} as PokemonContextType);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const initialSate = {}
  const [state, dispatch] = useReducer(pokemonReducer, initialSate as PokemonState);

  function setPokemonName(name: string) {
    dispatch({ type: PokemonActionKind.SET_POKEMON_NAME, payload: name })
  }

  return (
    <PokemonContext.Provider value={{
      state,
      dispatch,
      setPokemonName,
    }}>
      {children}
    </PokemonContext.Provider>
  );
}