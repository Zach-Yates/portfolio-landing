import React, { useEffect, useState } from 'react'
import './ApiShowcase.css'

const weatherApi = {
    // If the stakes were higher I would hide this.
    key: "593f88f5a64e06284cf7ddac3b484fa0",
    weather: "https://api.openweathermap.org/data/2.5/",
    location:"http://api.openweathermap.org/geo/1.0/"
}

const priceApi = {
    // If the stakes were higher I would hide this.
    key: "AOdhURYmdXKAnyAZ4JyvnHlpERaZHQQH",
    endpoint:"https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/"
}


const ApiShowcase = () => {

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [condition, setCondition] = useState("");
    const [temp, setTemp] = useState(0);
    const [price, setPrice] = useState("");
    const [quote, setQuote] = useState("");


    useEffect(()=>{
        fetch(`${weatherApi.location}direct?q={rogers},{AR}&limit=${1}&appid=${weatherApi.key}`)
        .then((res) => res.json())
        .then((result)=>{
            // console.log(result);
            setLat(result[0].lat);
            setLon(result[0].lon);
        })

        fetch(`${weatherApi.weather}weather?lat=${lat}&lon=${lon}&appid=${weatherApi.key}`)
        .then((res)=>res.json())
        .then((result)=>{
            setCondition(result.weather[0].main);
            setTemp(Math.round((result.main.temp - 273.15) * 9/5 +32));
            // (298K − 273.15) × 9/5 + 32
            // console.log(result);
            // console.log(temp);
            // console.log(weather);
        })

        fetch(`${priceApi.endpoint}prev?adjusted=true&apiKey=${priceApi.key}`)
        .then((res)=>res.json())
        .then((result)=>{
            // console.log(result);
            setPrice(result.results[0].c);
            // console.log(price);
        })

        fetch(`https://api.quotable.io/random`)
        .then((res)=>res.json())
        .then((result)=>{
            // console.log(result.content);
            setQuote(result.content);
        })


    },[])

    const HandleClick = () =>{
        fetch(`https://api.quotable.io/random`)
        .then((res)=>res.json())
        .then((result)=>{
            // console.log(result.content);
            setQuote(result.content);
        })
    }

    

  return (
    <div className='showcase'>
        <div className='heading'>
            <span className='title'>Api</span>
            <span className='subtitle'>Fetching fun!</span>
        </div>


      {/* weather */}
      <div className="elements">

        <div className="element bitcoin">

            <div className="top">
                <span className='element-title'>BTC Close Price</span>
            </div>

            <div className="bottom">
                <span className='price'>${price}</span>
            </div>
            
        </div>

        <div className="element inspiration">

            <div className="top">
                <span className='element-title'>Inspiration!</span>
            </div>

            <div className="bottom">
                <div className='quote-text'>
                    <span className='quote'>{quote}</span>
                </div>

                <div className='quote-button'>
                    <button className='new-button' onClick={HandleClick}>New</button>
                </div>
            </div>
        </div>

        <div className='element weather'>

            <div className="top">
                <span className='element-title'>Weather in Rogers</span>
            </div>

            <div className="bottom">
                <span className='temp'>{temp}°F</span>
                <span className='condition'>{condition}</span>
            </div>
        </div>

      </div>

    </div>
  )
}

export default ApiShowcase
