import axios from 'axios';
import React from 'react'
import {useEffect} from 'react'
import Plant from './Plant';

const SpecificPlant = ({plants, match}) => {
    const plantDetail = plants.filter(plant=> plant.name === match.params.name)[0]
// console.log(plantDetail)

    // useEffect( () => {
    //     axios.get(`http://localhost:4000/plants/show/:${plantDetail}`)
    //     .then(res=>console.log(res))
    //     .then(res => res.json(res))
    //     .then(res=> console.log(res))
    // },[])

    return (
        <div>
            <h1>plant here</h1>
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
      </div>
    )
}

export default SpecificPlant
