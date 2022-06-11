export interface IPokemonType {
  name: string;
}

export interface IPokemonTypes {
  type: IPokemonType
}

export interface IPokemonStatsType {
  name: string;
}

export interface IPokemonStats {
  base_stat: number;
  type: IPokemonStatsType;
}

export interface IPokemonMoves {
  move: {
    name: string;
    accuracy: number;
  }
}

export interface IPokemonData {
  id?: number;
  name?: string;
  height?: number;
  weight?: number;
  base_experience?: number;
  types?: IPokemonTypes[];
  status?: IPokemonStats[];
  moves?: IPokemonMoves[];
}

export interface IPokemon { 
  id: number;
  name: string;
  height?: number;
  types: IPokemonTypes[];
  status: IPokemonStats[];
  moves: IPokemonMoves[];
}

export interface IPokemons {
  pokemon: IPokemon;
}
