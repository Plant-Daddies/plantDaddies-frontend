import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import './new.css'
import Form from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
            <h1> New Plant</h1>
        
            <div id='newForm'>
                <form onSubmit={handleSubmit}>

                    <div class="row">
                        <div class="col">
                            <input id="name" placeholder="Plant Name" class="form-control" type="text" onChange={handleChange} value={newPlant.name}/>
                        </div>
                        <div class="col">
                            <input id="genus" placeholder="Plant Genus" class="form-control" type="text" onChange={handleChange} value={newPlant.genus}/>
                        </div>
                        <div class="col">
                            <input id="image" placeholder="Image URL" class="form-control" type="text" alt={newPlant.name} onChange={handleChange} value={newPlant.image}/>
                        </div>
                    </div>

                    <div class='row'>
                        <div class="col">
                            <input id="lightRequired" placeholder="Light Requirements" class="form-control" type="text" onChange={handleChange} value={newPlant.lightRequired}/>
                        </div>
                        <div class="col">
                            <input id="fertilizer" placeholder="Fertilizer" class="form-control" type="text" onChange={handleChange} value={newPlant.fertilizer}/>
                        </div>
                    <div class="col">
                            <input id="water" placeholder="Water" class="form-control" type="text" onChange={handleChange} value={newPlant.water}/>
                        </div>
                    </div>

                    <div class='group'>
                        <input id="houseplant" placeholder="Is this a Houseplant?" class="form-control" type="text" onChange={handleChange} value={newPlant.houseplant}/>
                    </div>

                    <div class='row'>
                        <div class="col">
                            <input id="timer" placeholder="Timer" class="form-control" type="text" onChange={handleChange} value={newPlant.timer}/>
                        </div>

                        <div class="col">
                            <input id="zone" placeholder="Zone" class="form-control"type="text" onChange={handleChange} value={newPlant.zone}/>
                        </div>

                        <div class="col">
                            <input id="notes" placeholder="Extra Notes" class="form-control" type="text" onChange={handleChange} value={newPlant.notes}/>
                        </div>
                        
                    </div>
                    
                    <button type="submit" class="btn btn-success">Submit Plant</button>
                </form>
                
            </div>
        </div>
    )
}

export default NewPlant
