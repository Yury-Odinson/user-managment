import { useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { DataContext } from "./tools/storage";

function App() {

  const [tab, setTab] = useState<string>("users")

  return (
    <DataContext.Provider value={{ tab, setTab }}>
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
    </DataContext.Provider>


  );
}

export default App;
