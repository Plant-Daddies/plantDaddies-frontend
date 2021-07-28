import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const EditPlant = () => {

    const initialState ={
        name: '',
        genus: '',
        timer: '',
        zone: '',
        water: '',
        image:'',
        lightRequired: '',
        notes: '',
        fertilizer: '',
        houseplant: ''
    }
    const [editPlant, setEditPlant] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(editPlant)
        axios.post(`http://localhost:4000/plants/edit`, {...editPlant, houseplant: editPlant.houseplant === "false" ? false:true})
        .then(res => {
          setEditPlant(res.data)
          console.log(res.data)
        })

    }
    const handleChange = (event) => {
        setEditPlant({...editPlant, [event.target.id]: event.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="name" onChange={handleChange} value={editPlant.name}/>
                <label htmlFor="genus">Genus:</label>
                <input id="genus" type="genus" onChange={handleChange} value={editPlant.genus}/>
                <label htmlFor="timer">Timer:</label>
                <input id="timer" type="timer" onChange={handleChange} value={editPlant.timer}/>
                <label htmlFor="zone">Zone:</label>
                <input id="zone" type="zone" onChange={handleChange} value={editPlant.zone}/>
                <label htmlFor="water">Water:</label>
                <input id="water" type="water" onChange={handleChange} value={editPlant.water}/>
                <label htmlFor="image">Image:</label>
                <input id="image" type="text" alt={editPlant.name} onChange={handleChange} value={editPlant.image}/>
                <label htmlFor="lightRequired">Light Required:</label>
                <input id="lightRequired" type="lightRequired" onChange={handleChange} value={editPlant.lightRequired}/>
                <label htmlFor="notes">Notes:</label>
                <input id="notes" type="notes" onChange={handleChange} value={editPlant.notes}/>
                <label htmlFor="fertilizer">Fertilizer:</label>
                <input id="fertilizer" type="fertilizer" onChange={handleChange} value={editPlant.fertilizer}/>
                <label htmlFor="houseplant">House Plant:</label>
                <input id="houseplant" type="houseplant" onChange={handleChange} value={editPlant.houseplant}/>
                <button type="submit">save</button>
            </form>

        </div>
    )
}

export default EditPlant