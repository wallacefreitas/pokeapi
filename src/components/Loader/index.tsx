interface LoaderProps {
  isMainCall: boolean;
  isVisible: boolean;
}

function Loader(props: LoaderProps) {
  const { isMainCall, isVisible } = props;
  const style = !isMainCall ? "w-full sm:w-2/3 h-[50%] sm:h-screen" : "w-full h-screen";

  if( !isVisible ) {
    return <></>
  }

  return (
    <div className={`top-0 left-0 right-0 bottom-0 ${style} z-50 overflow-hidden flex flex-col items-center justify-center`}>
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
    </div>
  )
  
}

export default Loader;