import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <span className="dino">DINO</span> Dictionary 
        </header>
        <main>
          <Dictionary defaultKeyword="dinosaur" />
        </main>
        <footer className="App-footer">
          This project was coded by Caroline Månsson and is{" "}
          <a href="https://github.com/carolinemansson/dictionary-react">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


