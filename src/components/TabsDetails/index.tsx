import { useState } from "react";
import { IPokemonData } from "../../types/Pokemon";

interface TabsDetailsProps {
  children?: React.ReactNode
  pokemon: IPokemonData
  backgroundColor: string;
}

function TabsDetails({ pokemon, backgroundColor }: TabsDetailsProps) {
  const [ tabIndexActive, setTabIndexActive ] = useState(1);
  const { status, moves, height, base_experience, weight } = pokemon;
  const about = [
    { name: 'height', value: height },
    { name: 'weight', value: weight },
    { name: 'base exp.', value: base_experience },
  ];

  function showTabPanel(tabIndex: number) {
    setTabIndexActive(tabIndex);
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="border-b border-gray-200 w-full">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="mr-2 grow" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg border-b-2 ${ tabIndexActive === 1 ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 "}`}
              id="about-tab" 
              data-tabs-target="#about" 
              type="button" 
              role="tab" 
              aria-controls="about" 
              aria-selected="false"
              onClick={() => showTabPanel(1)}
            >
              About
            </button>
          </li>
          <li className="mr-2 grow" role="presentation">
            <button 
              className={`inline-block p-4 rounded-t-lg border-b-2 ${ tabIndexActive === 2 ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 "}`}
              id="stats-tab" 
              data-tabs-target="#stats" 
              type="button" 
              role="tab" 
              aria-controls="stats" 
              aria-selected="true"
              onClick={() => showTabPanel(2)}
            >
              Stats
            </button>
          </li>
          <li className="mr-2 grow" role="presentation">
            <button 
              className={`inline-block p-4 rounded-t-lg border-b-2 ${ tabIndexActive === 3 ? "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 "}`}
              id="evolutions-tab" 
              data-tabs-target="#evolutions" 
              type="button" 
              role="tab" 
              aria-controls="evolutions" 
              aria-selected="true"
              onClick={() => showTabPanel(3)}
            >
              Moves
            </button>
          </li>
        </ul>
      </div>

      {
        tabIndexActive == 1 &&
        <div className="flex flex-col h-full w-full overflow-y-auto py-4 px-6 lg:px-12">
          <h2 className="font-black sm:text-md md:text-xl lg:text-2xl">Base Stats</h2>
          <div className="flex flex-row justify-between w-full h-full">
            {
              about.map( (data , index) => {
                return (
                  <div className="flex flex-col h-[80%] self-center items-center justify-center bg-gray-50 w-[30%]" key={index} style={{ border: `2px solid ${backgroundColor}` }}>
                    <h2 className="font-bold uppercase px-3 text-[0.8rem] lg:text-[1rem]">{data.name}''</h2>
                    <h3 className="text-[1.5rem] lg:text-[4rem]" style={{ color: backgroundColor }}>{data.value}</h3>
                  </div>
                )
              } )
            }
            
          </div>
        </div>
      }
      
      {
        tabIndexActive == 2 &&
        <div className="flex flex-col h-full overflow-y-auto py-4 px-6 lg:px-12">
          <h2 className="font-black sm:text-md md:text-xl lg:text-2xl">Base Stats</h2>
          <div className="mt-1 w-full h-full">
            {
              status?.map( (stat, index) => {
                const { base_stat, type } = stat;
                const { name } = type;
                const base_percent = ((100 * base_stat) / 255).toFixed(2); 

                return (
                  <div className="flex flex-row h-12 mt-3 border-2 items-center px-2 bg-gray-50" key={index}>
                    <h2 className="font-bold uppercase w-[50%] sm:w-[40%] px-3 text-[12px] sm:text-[14px]">{name}</h2>
                    <h3 className="w-[18%] sm:w-[10%] text-[12px] sm:text-[14px]">{base_stat}</h3>
                    <div className="w-full sm:ml-2 bg-gray-200 rounded-full h-3.5 dark:bg-gray-300">
                      <div title={`${base_percent.toString()}%`} className={` h-3.5 rounded-full`} style={{width: `${base_percent.toString()}%`, backgroundColor: backgroundColor }} />
                    </div>
                  </div>
                )
              })
            }

            <div className="flex flex-row h-12 mt-3 border-2 items-center px-2 bg-gray-50">
              <h2 className="font-bold uppercase w-[50%] sm:w-[40%] px-3 text-[12px] sm:text-[14px]">Total</h2>
              <h3 className="w-[18%] sm:w-[10%] text-[12px] sm:text-[14px]">{100}</h3>
              <div className="w-full sm:ml-2"/>
            </div>
          </div>
        </div>
      }

      {
        tabIndexActive == 3 &&
        <div className="flex flex-col h-full overflow-y-auto py-4 px-6 lg:px-12">
          <h2 className="font-black sm:text-md md:text-xl lg:text-2xl">Moves</h2>
          <div className="mt-2">
            {
              moves?.map( (move_obj, index) => {
                const { move } = move_obj;
                const { name, accuracy } = move;

                return (
                  <div className="flex flex-row h-12 mt-2 border-2 border-gray-100 items-center px-2 bg-gray-50" key={index}>
                    <h2 className="font-bold uppercase w-[85%] px-3 text-[14px]">{name}</h2>
                    <h3 className="w-[15%] text-[12px] sm:text-[14px]">Acc. (%) : {accuracy ? accuracy : "-"}</h3>
                  </div>
                )
              } )
            }
          </div>
        </div>
      }
    </div>
  )
}

export default TabsDetails;