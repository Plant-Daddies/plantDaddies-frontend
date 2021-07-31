import "./App.css";
import Plant from "./Components/Plants/Plant";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import LoginForm from "./Components/Plants/LoginForm";
import NewPlant from "./Components/Plants/NewPlant";
import {Route, Link} from 'react-router-dom'
import SpecificPlant from "./Components/Plants/SpecificPlant";
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
      <Link to="/plants/new/">
          <nav>New Plant</nav>
      </Link>
      <Link to="/">
          <nav>Home</nav>
      </Link>
    <main>      
      <Route exact path="/" render={()=><Plant plants={plantData}/>}    /> 
      <Route exact path="/plants/new/" render={() => <NewPlant plants={plantData} />}/>
      <Route exact path="/plants/show/:name" render={routerProps => <SpecificPlant match={routerProps.match} plants={plantData} setNewPlant={setPlantData}/>}/>
      <Route exact path="/plants/edit/:id" render={routerProps => <EditPlant match={routerProps.match} plants={plantData} setPlantData={setPlantData} />}/>
      {/* <LoginForm /> */}
    </main>
    </div>
  );
}

export default App;
