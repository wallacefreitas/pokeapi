export enum PokemonActionKind {
  SET_POKEMON_NAME = 'SET_POKEMON_NAME',
}

export type PokemonState = {
  name: string;
}

interface PokemonAction {
  type: PokemonActionKind;
  payload: any;
}

export const pokemonReducer = ( state: PokemonState, action: PokemonAction ) => {
  const { type, payload } = action;

  switch (type) {

    case PokemonActionKind.SET_POKEMON_NAME:
      return {
        ...state,
        name: payload
      }

    default:
      return state;
  }
}