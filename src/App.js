// import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';

function App() { 
  const myTitle = "Hello Reacters"
  return (
    
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p></p>
      </div>
    </div>
  );
}

export default App;
