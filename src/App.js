import { useState, useEffect } from "react";
import {Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Plant from "./Components/Plants/Plant";
import NewPlant from "./Components/Plants/NewPlant";
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

      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Plant Daddies</a>
        <button class='btn btn-outline-success' id='link2' ><Link to="/plants/new/" class='link'> New Plant </Link></button>
        
    
    </nav>
      
    <main>      
      <Route exact path="/" render={()=><Plant plants={plantData}/>}    /> 
      <Route exact path="/plants/new" render={() => <NewPlant plants={plantData} />}/>
      <Route exact path="/plants/show/:name" render={routerProps => <SpecificPlant match={routerProps.match} plants={plantData} setNewPlant={setPlantData}/>}/>
      <Route exact path="/plants/edit/:id" render={routerProps => <EditPlant match={routerProps.match} plants={plantData} setPlantData={setPlantData} />}/>
      {/* <LoginForm /> */}
    </main>
    </div>
  );
}

export default App;
