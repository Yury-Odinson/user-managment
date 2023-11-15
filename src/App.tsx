import { useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { DataContext, SearchContext } from "./tools/storage";

function App() {

  const [tab, setTab] = useState<string>("users")
  const [searchValue, setSearchValue] = useState<string>("")

  return (
    <DataContext.Provider value={{ tab, setTab }}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="App-body">
            <Body />
          </div>
          <footer className="App-footer">
            footer
          </footer>
        </div>
      </SearchContext.Provider>
    </DataContext.Provider>


  );
}

export default App;
