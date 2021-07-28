import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const NewPlant = () => {

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
    const [newPlant, setNewPlant] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newPlant)
        axios.post(`http://localhost:4000/plants/new`, {...newPlant, houseplant: newPlant.houseplant === "false" ? false : true})
        .then(res => {
          setNewPlant(res.data)
          console.log(res.data)
        })

    }
    const handleChange = (event) => {
        setNewPlant({...newPlant, [event.target.id]: event.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="name" onChange={handleChange} value={newPlant.name}/>
                <label htmlFor="genus">Genus:</label>
                <input id="genus" type="genus" onChange={handleChange} value={newPlant.genus}/>
                <label htmlFor="timer">Timer:</label>
                <input id="timer" type="timer" onChange={handleChange} value={newPlant.timer}/>
                <label htmlFor="zone">Zone:</label>
                <input id="zone" type="zone" onChange={handleChange} value={newPlant.zone}/>
                <label htmlFor="water">Water:</label>
                <input id="water" type="water" onChange={handleChange} value={newPlant.water}/>
                <label htmlFor="image">Image:</label>
                <input id="image" type="texr" alt={newPlant.name} onChange={handleChange} value={newPlant.image}/>
                <label htmlFor="lightRequired">Light Required:</label>
                <input id="lightRequired" type="lightRequired" onChange={handleChange} value={newPlant.lightRequired}/>
                <label htmlFor="notes">Notes:</label>
                <input id="notes" type="notes" onChange={handleChange} value={newPlant.notes}/>
                <label htmlFor="fertilizer">Fertilizer:</label>
                <input id="fertilizer" type="fertilizer" onChange={handleChange} value={newPlant.fertilizer}/>
                <label htmlFor="houseplant">House Plant:</label>
                <input id="houseplant" type="houseplant" onChange={handleChange} value={newPlant.houseplant}/>
                <button type="submit">send</button>
            </form>
            
        </div>
    )
}

export default NewPlant
