import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { padLeft, setBackgroundColor } from "../../helper/helper";
import { LOAD_POKEMONS } from "../../querys";
import Attributes from "../Attributes";
import Loader from "../Loader";
import TabsDetails from "../TabsDetails";

function Main() {
  const pokemonContext = useContext(PokemonContext);
  const { state } = pokemonContext;
  const { data, loading } = useQuery(LOAD_POKEMONS, { 
    variables: {
      name: state?.name
    }
  });
  const isShowPokemon = data?.results.length > 0;
  
  useEffect( () => {
    pokemonContext.setPokemonName("");
  }, [] );

  if( loading || !isShowPokemon ) {
    return (
      <Loader isMainCall={state?.name !== "" ? false : true} isVisible={loading} />
    )
  } 
  
  const pokemon = data.results[0].pokemon;
  const { id, types, name } = pokemon;
  const { colorCard, colorAttributes } = setBackgroundColor(types);
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  return (
    <div className="flex flex-col w-full sm:w-2/3 h-[50%] sm:h-screen items-center bg-gradient-to-r from-[#F2F2F2] shadow-md">
      <div className="flex flex-col h-full w-full lg:w-[60%] bg-white border-2 border-white shadow-md">
        <div className="max-h-[40%] md:h-[50%]" style={{ backgroundColor: colorCard, background: `linear-gradient(to right, ${colorCard}, ${colorAttributes})` }}>
          <div className="flex flex-row h-full">
            <div className="flex flex-col w-[50%] px-4 h-full">
              <div className="pt-2">
                <h3 className="text-[1rem] capitalize text-white">#{padLeft(id, 3, "0")}</h3>
              </div>
              <div className="h-max">
                <h2 className="text-[1.0rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] capitalize text-white">{name}</h2>
              </div>
              <div className="h-max">
                <Attributes types={types || []} backgroundColor={colorAttributes} />
              </div>
              <div className="flex flex-col pt-2 w-full h-screen justify-end">
                <div className="flex flex-shrink w-[15%] lg:w-[20%] pb-2">
                  <img
                    className="h-auto w-auto opacity-50 saturate-50 grayscale"
                    src="https://cdn-icons-png.flaticon.com/512/528/528101.png?w=826"
                  />
                </div>
              </div>
              
            </div>
            <div className="flex flex-shrink w-[50%] justify-end">
              {
                pokemon && <img 
                  src={pokemonImage}
                  className="h-auto w-auto"
                  alt="Aqui tem a imagem de um Pokémon em tamanho maior"
                />
              }
            </div>
          </div>
        </div>
        <div className="flex h-[60%] lg:h-[60%]">
          <div className="flex w-full h-full overflow-y-auto">
            <TabsDetails pokemon={pokemon} backgroundColor={colorCard} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main;