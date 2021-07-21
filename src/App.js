import './App.css';
import Plant from './Components/Plants/Plant'
import PlantDetails from './Components/Plants/PlantDetails';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>Plant App</h1>    
      <Plant  />
      <PlantDetails />
      </div>
  );
}

export default App;
