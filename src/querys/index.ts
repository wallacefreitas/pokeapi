import { gql } from "@apollo/client";

export const LOAD_POKEMONS = gql`
  query ($name: String) {
    results: pokemon_v2_pokemontype(limit: 20, distinct_on: pokemon_id, order_by: {pokemon_id: asc}, where: { pokemon_v2_pokemon: { name: { _like: $name } } }) {
      pokemon: pokemon_v2_pokemon {
        name
        id
        height
        weight
        base_experience
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
        status: pokemon_v2_pokemonstats {
          base_stat
          type: pokemon_v2_stat {
            name
          }
        }
        moves: pokemon_v2_pokemonmoves(distinct_on: move_id, order_by: {move_id: asc}) {
          move: pokemon_v2_move {
            name
            accuracy
          }
        }
      }
    }
  }
`;

export const LOAD_POKEMONS_NAME = gql`
  query {
    results: pokemon_v2_pokemontype(distinct_on: pokemon_id, order_by: {pokemon_id: asc}) {
      pokemon: pokemon_v2_pokemon {
        name
      }
    }
  }
`;