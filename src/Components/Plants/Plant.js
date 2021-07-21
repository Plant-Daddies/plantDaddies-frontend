import React from 'react'
import plants from './plant-data.json'


const Plant = () => {
    return (
        <div>
            <h1>Plants</h1>
            <div>
                <ul >
                {plants.map((plant) => (
                    <li>
                        <img src={plant.image}/>
                        {plant.name}
                        {plant.genus}
                    </li>
                    )
                )}
                </ul>
            </div>
        </div>
    )
}


export default Plant
