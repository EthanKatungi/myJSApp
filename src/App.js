// import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';

function App() { 
  const myTitle = "Hello Reacters"
  const germanPlayers = {
    name: 'Joshua Kimmich',
    club: 'Bayern',
    position: 'F9',
  }
  return (
    
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>{germanPlayers.name} is a {germanPlayers.position} who plays for {germanPlayers.club}</p>
      </div>
    </div>
  );
}

export default App;
