import './App.css';
import Plant from './Components/Plants/Plant'
import PlantDetails from './Components/Plants/PlantDetails';
import { BrowserRouter as Router } from "react-router-dom";
import Backend from './Components/Backend'

function App() {
  return (
    <div className="App">
      <h1>Plant App</h1>    
      <Plant  />
      <PlantDetails/>
      <Backend />
      </div>
  );
}

export default App;
