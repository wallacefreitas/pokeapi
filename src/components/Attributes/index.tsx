import { IPokemonTypes } from "../../types/Pokemon";

interface AtrributesProps {
  types: IPokemonTypes[];
  backgroundColor: string;
}

function Attributes(props: AtrributesProps) {
  const { types, backgroundColor } = props;

  return (
    <div className="flex flex-row">
      {
        types.map( (obj_type, index) => {
          const { type } = obj_type;
          
          return (
            <div key={index} className="sm:mt-2 mt-1 w-16 sm:w-20 mr-1 h-max">
              <div className={"rounded-full w-full text-center capitalize shadow-md"} style={{ backgroundColor }}>
                <span className="text-white text-[0.73rem] sm:text-[0.75rem] lg:text-[1rem]">{type.name}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Attributes;