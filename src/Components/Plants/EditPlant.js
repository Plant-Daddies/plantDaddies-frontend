import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="name"
          onChange={handleChange}
          value={editPlant.name}
        />
        <label htmlFor="genus">Genus:</label>
        <input
          id="genus"
          type="genus"
          onChange={handleChange}
          value={editPlant.genus}
        />
        <label htmlFor="timer">Timer:</label>
        <input
          id="timer"
          type="timer"
          onChange={handleChange}
          value={editPlant.timer}
        />
        <label htmlFor="zone">Zone:</label>
        <input
          id="zone"
          type="zone"
          onChange={handleChange}
          value={editPlant.zone}
        />
        <label htmlFor="water">Water:</label>
        <input
          id="water"
          type="water"
          onChange={handleChange}
          value={editPlant.water}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          alt={editPlant.name}
          onChange={handleChange}
          value={editPlant.image}
        />
        <label htmlFor="lightRequired">Light Required:</label>
        <input
          id="lightRequired"
          type="lightRequired"
          onChange={handleChange}
          value={editPlant.lightRequired}
        />
        <label htmlFor="notes">Notes:</label>
        <input
          id="notes"
          type="notes"
          onChange={handleChange}
          value={editPlant.notes}
        />
        <label htmlFor="fertilizer">Fertilizer:</label>
        <input
          id="fertilizer"
          type="fertilizer"
          onChange={handleChange}
          value={editPlant.fertilizer}
        />
        <label htmlFor="houseplant">House Plant:</label>
        <input
          id="houseplant"
          type="houseplant"
          onChange={handleChange}
          value={editPlant.houseplant}
        />
        <button type="submit">Save</button>
      </form>
      <form onSubmit={handleDelete}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default EditPlant;
