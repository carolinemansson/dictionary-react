import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"><span className="dino">DINO</span> Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Dinosaur" />
        </main>
        <footer className="App-footer"><small>Coded by Caroline Månsson</small></footer>
      </div>
    </div>
  );
}


