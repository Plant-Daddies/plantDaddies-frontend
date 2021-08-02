import React from "react";
import './Plant.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const Plant = (props) => {
  return (
    <div id="plantList">
      
          {props.plants.map((plant) => (
            <div class="card" id='plantCard' key={plant.name}>
                <Link to={`/plants/show/${plant.name}`}><img class="card-img-top" alt="Card cap"src={plant.image}></img></Link >
                <Link to={{pathname:`/plants/edit/${plant._id}`, state:plant}} class='btn btn-success'>Update {plant.name}</Link >
               
              <div lass="card-body">
                <h5 class='card-title'> {plant.name} </h5>
                <p class="card-text">Genus: {plant.genus} </p>
                
              </div>
            </div>
          ))}
    </div>
  );
};

export default Plant;
