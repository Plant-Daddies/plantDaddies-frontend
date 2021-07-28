import "./App.css";
import Plant from "./Components/Plants/Plant";
// import PlantDetails from "./Components/Plants/PlantDetails";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";
import Backend from "./Components/Plants/Backend";
import LoginForm from "./Components/Plants/LoginForm";
import NewPlant from "./Components/Plants/NewPlant";
import {Route, Link} from 'react-router-dom'



function App() {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/plants/index`)
      .then((res) => res.json())
      .then((data) => setPlantData(data));
  }, []);

  return (
    <div className="App">
      <Link to="/plants/new/">
          <nav>New Plant</nav>
      </Link>
      <Link to="/">
          <nav>Home</nav>
      </Link>
    <main>
      <Route exact path="/plants/new/" component={NewPlant} plants={plantData}/>      
      <Plant plants={plantData}/>
      <LoginForm />
    </main>
    </div>
  );
}

export default App;
