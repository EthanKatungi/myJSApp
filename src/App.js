// import logo from './logo.svg';
import './App.css';

function App() { 
  const myTitle = "Hello Reacters"
  const germanPlayers = {
    name: 'Joshua Kimmich',
    club: 'Bayern',
    position: 'CDM',
  }
  return (
    <div className="App">
      <div className="content">
        <h1>{myTitle}</h1>
        <p>{germanPlayers.name} is a {germanPlayers.position} who plays for {germanPlayers.club}</p>
      </div>
    </div>
  );
}

export default App;
