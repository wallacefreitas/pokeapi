import { ApolloProvider } from "@apollo/client";
import Main from "./components/Main";
import SideBar from "./components/SideBar"
import { PokemonProvider } from "./contexts/PokemonContext";
import client from "./services";

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <div className="App">
          <div className="flex flex-col sm:flex-row w-full h-screen">
            <SideBar />
            <Main />
          </div>
        </div>
      </PokemonProvider>
    </ApolloProvider>
  )
}

export default App
