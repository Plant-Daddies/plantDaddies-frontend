import React from "react";
import './Plant.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

const Plant = (props) => {
  return (
    <div id="plantList">
          {props.plants.map((plant) => (
            <div class="card" id='plantCard' key={plant.name}>
                <img class="card-img-top" alt="Card image cap"src={plant.image}></img>

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
