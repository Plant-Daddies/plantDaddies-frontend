import React from 'react'
import './specific.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const SpecificPlant = ({plants, match, setNewPlant, plantData}) => {
    const plantDetail = plants.filter(plant=> plant.name === match.params.name)[0]
    
    return (
        <div class="specified">
            
            <h1 id='plantHead'>The {plantDetail.name}</h1>
         <form>
            <div >
                <div class="card" id='card'>
                    <img class="card-img-top" src={plantDetail.image} alt={plantDetail.name} />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Genus: {plantDetail.genus}</li>
                        <li class="list-group-item">Native Zone: {plantDetail.zone}</li>
                    </ul>
                    <div class="card-footer">
                        <small class="text-muted">Is your {plantDetail.name} a House Plant? {plantDetail.houseplant.toString()}</small>
                    </div>
                </div>

                <div class="card mb-3" id='card' >
                    <div class="card-header">Care Information</div>
                    <div class="card-body text-dark">  
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">How much water does {plantDetail.name} need?:{plantDetail.water}</li>
                        <li class="list-group-item">How much light does {plantDetail.name} need?:{plantDetail.lightRequired}</li>
                        <li class="list-group-item">How much fertilizer does {plantDetail.name} need?:{plantDetail.fertilizer}</li>
                        <li class="list-group-item">Extra Notes:{plantDetail.notes}</li>
                    </ul>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">you have {(plantDetail.timer/86400)} days until {plantDetail.name} needs water</small>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
}

export default SpecificPlant
