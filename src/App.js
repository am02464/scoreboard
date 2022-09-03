import logo from './logo.svg';
import './App.css';
import { Scoreboard } from './scoreboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const tableStyle = {
    paddingLeft: "3rem",
    paddingRight: "3rem",
    fontFamily: "Arial",
  };

  const headerStyle = {
    paddingTop: "1rem",
    paddingBottom: "1rem"
  }
  
  return (
    <div className="App">
      <header style={headerStyle}>
        <h4>
          CS Scoreboard
        </h4>
      </header>
      <div style={tableStyle}>
      <Scoreboard />
      </div>
    </div>
  );
}

export default App;
