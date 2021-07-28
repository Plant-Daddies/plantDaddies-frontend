import "./App.css";
import Plant from "./Components/Plants/Plant";
import PlantDetails from "./Components/Plants/PlantDetails";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Backend from "./Components/Backend";
import EditPlant from "./Components/Plants/EditPlant";

function App() {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/plants/index`)
      .then((res) => res.json())
      .then((data) => setPlantData(data));
  }, []);

  return (
    <div className="App">
      <h1>Plant App</h1>
      <Plant plants={plantData} />
      <PlantDetails />
      <Backend />
      <EditPlant />
    </div>
  );
}

export default App;
