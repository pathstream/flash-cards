import "./App.css";
import { FlashCards } from "./FlashCards";
import { Welcome as WelcomeFromTypescript } from "./Example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeFromTypescript />
        <FlashCards />
      </header>
    </div>
  );
}

export default App;
