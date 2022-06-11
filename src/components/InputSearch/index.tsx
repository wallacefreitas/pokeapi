import { useQuery } from "@apollo/client";
import { useContext, useEffect, useMemo, useState } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { LOAD_POKEMONS_NAME } from "../../querys";
import { IPokemon, IPokemons } from "../../types/Pokemon";

function InputSearch() {
  const [searchText, setSearchText] = useState("");
  const [isShowAutoComplete, setShowAutoComplete] = useState(false);
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const { data } = useQuery(LOAD_POKEMONS_NAME);
  const pokemonContext = useContext(PokemonContext);

  useEffect( () => {
    if (data) {
      setPokemons(data.results);
    }
  }, [data]);

  function keyUpInputChange( evt: React.ChangeEvent<HTMLInputElement> ) {
    const { value } = evt.currentTarget;
    const showAutoComplete = value !== "" ? true : false;

    setShowAutoComplete(showAutoComplete);
    setSearchText(value);
  }

  function AutoComplete() {
    const numbersOfPokemons = window.outerHeight >= 768 ? 15 : 5;
    const listPokemons = useMemo(() => {
      return pokemons
        .filter((item) => {
          const { pokemon } = item;
          const { name } = pokemon;
          
          return name.includes(searchText.toLowerCase());
        })
        .slice(0, numbersOfPokemons)
        .map( (item) => item.pokemon);

    }, [data]);

    function selectPokemon(pokemon: IPokemon) {
      const { name } = pokemon;
      
      pokemonContext.setPokemonName(name);
      setShowAutoComplete(false);
    }

    return (
      <ul className="w-full bg-white border-2 border-gray-200 absolute cursor-pointer divide-y divide-dashed" style={{zIndex: 9}}>
        {listPokemons.map( (pokemon, index) => {
          return (
            <li 
              key={index}
              onClick={ () => selectPokemon(pokemon) }
              className="flex flex-row h-[20%] py-2 pl-2 hover:bg-gray-100"
            >
              <img
                src="https://i.pinimg.com/originals/09/a6/ae/09a6ae937a6d9ef5cd10d132b59d6f5d.png" 
                className="w-[1.3rem] h-[1.5rem] pt-1" 
              />
              <span className="pl-2 capitalize font-semibold mt-1">{pokemon.name}</span>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="w-full h-max">
      <div className="flex">
        <input 
          type="text"
          onChange={(evt) => keyUpInputChange(evt) }
          onFocusCapture={(evt) => keyUpInputChange(evt) }
          className="
            w-full
            border-l-2 border-t-2 border-b-2 rounded-l-lg border-gray-300 bg-[#F2F2F2]
            h-10
            relative
          "
          aria-label="Pesquisar por..."
        />
        <div className="flex items-center pr-2 border-r-2 rounded-r-lg  border-t-2 border-b-2 border-gray-300 bg-[#F2F2F2] ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className={`relative ${isShowAutoComplete ? "" : "hidden"}`}>
        <AutoComplete />
      </div>
    </div>
  )
}

export default InputSearch;