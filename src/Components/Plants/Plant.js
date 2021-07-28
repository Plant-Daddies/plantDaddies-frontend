import React from "react";

const Plant = (props) => {
  //   console.log(props);
  return (
    <div>
      <h1>Plants</h1>
      <div>
        <ul>
          {props.plants.map((plant) => (
            <li>
              {plant.name}
              <img src={plant.image}></img>
              {plant.genus}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Plant;
