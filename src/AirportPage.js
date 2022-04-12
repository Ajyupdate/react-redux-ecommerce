
import React, { useState, useEffect } from 'react'

function AirportPage() {
    const airportName = "EDDF"
    const [numberOfArrival, setNumberOfArrival] = useState("")
    const [numberOfDeparture, setNumberOfDeparture] = useState("")

    const date = new Date(1517227200)
    const time = date.getHours()
    useEffect(()=>{

        fetch(`https://opensky-network.org/api/flights/arrival?airport=${airportName}&begin=1517227200&end=1517230800`)
        .then(res => res.json())
        .then(data => {
            setNumberOfArrival(data.length)
            
        })
    


        fetch(`https://opensky-network.org/api/flights/departure?airport=${airportName}&begin=1517227200&end=1517230800`)
        .then(res => res.json())
        .then(data => {
            setNumberOfDeparture(data.length)
        })
        
        }, [])
    

  return (
    <div className='output'>
        
        {numberOfArrival && 
        <div>
            {airportName} | {time}:00 pm | {numberOfArrival} | {numberOfDeparture}
        </div>
        }
    </div>
  )
}

export default AirportPage