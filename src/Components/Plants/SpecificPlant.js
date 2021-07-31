import axios from 'axios';
import React from 'react'
import {useState ,useEffect} from 'react'

const SpecificPlant = ({plants, match, setNewPlant, plantData}) => {
    const plantDetail = plants.filter(plant=> plant.name === match.params.name)[0]
    console.log(plantDetail)

    // const [deletePlant , setDeletePlant] = useState(plants)

    // const trashPlant =(event) =>{
    //     event.preventDefault()
    //     console.log(trashPlant)
    //     axios.delete(`http://localhost:4000/plants/delete/:id`)
    //     .then(res =>{
    //         setDeletePlant(plants)
    //         console.log(res.data)
    //     })
    // }
    
    return (
        <div>
            <form>
            <h1>Plant Name</h1>
            <p>Name:<em>{plantDetail.name}</em></p>
            <p>Genus:<em>{plantDetail.genus}</em></p>
            <p>Timer:<em>{plantDetail.timer}</em></p>
            <p>Zone:<em>{plantDetail.zone}</em></p>
            <p>Water:<em>{plantDetail.water}</em></p>
            <p>Image:<img src={plantDetail.image} alt={plantDetail.name}/></p>
            <p>LightRequired:<em>{plantDetail.lightRequired}</em></p>
            <p>Notes:<em>{plantDetail.notes}</em></p>
            <p>Fertilizer:<em>{plantDetail.fertilizer}</em></p>
            <p>Able to be a house plant?:<em>{plantDetail.houseplant.toString()}</em></p>
            {/* <button onClick={()=> trashPlant('deletePlant')}>Delete</button> */}
            </form>

      </div>
    )
}

export default SpecificPlant
