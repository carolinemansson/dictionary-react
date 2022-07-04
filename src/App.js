import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Carolines Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
        <footer className="App-footer"><small>Coded by Caroline Månsson</small></footer>
      </div>
    </div>
  );
}


