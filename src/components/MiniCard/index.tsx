import { useContext } from "react";

import { PokemonContext } from "../../contexts/PokemonContext";
import { padLeft, setBackgroundColor } from "../../helper/helper";
import { IPokemon } from "../../types/Pokemon";
import Attributes from "../Attributes";

interface MiniCardProps {
  pokemon: IPokemon
}

function MiniCard(props: MiniCardProps) {
  const { pokemon } = props;
  const { id, name, types } = pokemon;
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  const pokemonContext = useContext(PokemonContext);
  const { colorCard, colorAttributes } = setBackgroundColor(types);

  return (
    <div 
      onClick={() => pokemonContext.setPokemonName(name)}
      className={`
        flex flex-col
        border-2 border-gray-200 hover:border-green-500
        h-40
        mb-2
        rounded-lg
        cursor-pointer
        w-[49%] sm:w-full lg:w-[49%]
        shadow-md
      `}
      style={{backgroundColor: colorCard }}>
      <div className="flex flex-row justify-between px-2 pt-2 font-semibold text-white">
        <span className="capitalize">{name}</span>
        <span>#{padLeft(id, 3, "0") }</span>
      </div>
      <div className="flex flex-col justify-between h-full pl-2">
        <div className="w-full h-max">
          <Attributes types={types} backgroundColor={colorAttributes} />
        </div>
        <div className="flex flex-row h-full mt-3">
          <div className="flex items-center h-full w-[50%]">
            <img src="https://cdn-icons-png.flaticon.com/512/189/189015.png?w=826" alt="Ícone de uma Pokébola com estrelas" className="opacity-50 saturate-50 grayscale h-[4.3rem] w-[62%]" />
          </div>
          <div className="flex justify-end h-full w-[50%] shrink-0">
            <img src={ pokemonImage } className=" h-20 w-[70%]" alt="Aqui contém a imagem de um Pokémon" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniCard;