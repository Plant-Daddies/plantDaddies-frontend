import React from "react";
import { useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import './edit.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const EditPlant = ({ plants, match, setPlantData }) => {
  let history = useHistory()
  let id = match.params.id;
  
  let currentPlant = plants.filter((plant) => {
    if (plant._id === id) {
      return plant;
    }
  })[0];
  console.log(currentPlant);

  const [editPlant, setEditPlant] = useState(currentPlant);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editPlant);
    axios
      .put(`http://localhost:4000/plants/edit/${id}`, { ...editPlant })
      .then((res) => {
        setEditPlant(res.data.plant);
        setPlantData(res.data.plants);
      });
  };
  const handleChange = (event) => {
    setEditPlant({ ...editPlant, [event.target.id]: event.target.value });
  };

    const handleDelete = (e) => {
        e.preventDefault()
    console.log(editPlant._id);
    axios
      .delete(`http://localhost:4000/plants/delete/${editPlant._id}`)
      .then((res) => {
          console.log(res)      
        if (res.data.message === 'success') {
            setPlantData(res.data.plants);
            history.push('/')
        }
    })
  }

  return (
    <div>
            <h1> Edit {editPlant.name}</h1>
        
            <div id='editForm'>
                <form onSubmit={handleSubmit}>

                    <div class="row">
                        <div class="col">
                            <input id="name" placeholder="Plant Name" class="form-control" type="text" onChange={handleChange} value={editPlant.name}/>
                        </div>
                        <div class="col">
                            <input id="genus" placeholder="Plant Genus" class="form-control" type="text" onChange={handleChange} value={editPlant.genus}/>
                        </div>
                        <div class="col">
                            <input id="image" placeholder="Image URL" class="form-control" type="text" alt={editPlant.name} onChange={handleChange} value={editPlant.image}/>
                        </div>
                    </div>

                    <div class='row'>
                        <div class="col">
                            <input id="lightRequired" placeholder="Light Requirements" class="form-control" type="text" onChange={handleChange} value={editPlant.lightRequired}/>
                        </div>
                        <div class="col">
                            <input id="fertilizer" placeholder="Fertilizer" class="form-control" type="text" onChange={handleChange} value={editPlant.fertilizer}/>
                        </div>
                    <div class="col">
                            <input id="water" placeholder="Water" class="form-control" type="text" onChange={handleChange} value={editPlant.water}/>
                        </div>
                    </div>

                    <div class='group'>
                        <input id="houseplant" placeholder="Is this a Houseplant?" class="form-control" type="text" onChange={handleChange} value={editPlant.houseplant}/>
                    </div>

                    <div class='row'>
                        <div class="col">
                            <input id="timer" placeholder="Timer" class="form-control" type="text" onChange={handleChange} value={editPlant.timer}/>
                        </div>

                        <div class="col">
                            <input id="zone" placeholder="Zone" class="form-control"type="text" onChange={handleChange} value={editPlant.zone}/>
                        </div>

                        <div class="col">
                            <input id="notes" placeholder="Extra Notes" class="form-control" type="text" onChange={handleChange} value={editPlant.notes}/>
                        </div>
                        
                    </div>
                    
                    <button type="submit" class="btn btn-success">Submit Plant</button>
                </form>
                
            </div>
        </div>

  );
};

export default EditPlant;
