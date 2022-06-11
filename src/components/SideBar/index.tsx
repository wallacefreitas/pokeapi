import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { LOAD_POKEMONS } from "../../querys";
import { IPokemons } from "../../types/Pokemon";
import InputSearch from "../InputSearch";
import MiniCard from "../MiniCard";

function SideBar() {
  const { loading, data } = useQuery(LOAD_POKEMONS, {
    variables: {
      name: "%"
    }
  });
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  useEffect( () => {
    if(data) {
      setPokemons(data.results);
    }
  }, [data]);

  if (loading) {
    return <></>
  }

  return (
    <div className="flex flex-col h-[50%] sm:h-screen w-full p-2 sm:w-1/3 z-2 bg-[##FFFEFE] ">
      <h2 className="text-[2rem] font-semibold">Pokédex</h2>
      <h3 className="text-[1rem]">Search for Pokémon by name</h3>
      <InputSearch />
      <div className="flex flex-wrap justify-between overflow-y-auto w-full mt-2 pr-1">
        {
          pokemons.map((item, index) => {
            const { pokemon } = item;
            
            return (
              <MiniCard 
                pokemon={pokemon}
                key={index}
              />
            )
          })
        }
      </div>
      
    </div>
  );
}

export default SideBar;