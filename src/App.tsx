import { Body } from "./components/Body";
import { Header } from "./components/Header";

function App() {
  return (
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
  );
}

export default App;
