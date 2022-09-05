import React, { useEffect, useState } from "react";
import './Weather.css';

function Weather() {
    const [name,setName]=useState('indore')
    const [city,setCity]=useState(null)
    
    
    
    
    useEffect(()=>{
        const fetching= async()=>{
            const reponce=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=e112feeeddcf6e34d1562aa33720d2cb`);
            const json= await reponce.json();
            // console.log(json);
            setCity(json)
        }

        fetching();
    },[name])
    console.log(city);


    return(
        <>
            <div className="containor">
                <div className="entry">
                   <input className="input" onChange={(e)=> setName(e.target.value)}/>
                </div>
                
                {!city  || city.hasOwnProperty('message')  ? (
                    <div>
                        <p>data not found</p>
                        {/* <h1>{city.cod}</h1> */}
                        {/* <p>{city.message}</p> */}
                    </div>
                ) : (
                <div className="details">
                    <h2>{`${city.name}, ${city.sys.country}.`}</h2>
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/1779/1779807.png"/> */}
                    {city.weather[0].main === 'Haze' && <img src="https://cdn-icons-png.flaticon.com/512/1779/1779807.png"/>}
                    {city.weather[0].main === 'Clouds' && <img src="https://freepngclipart.com/download/weather/12283-cloudy-weather-images-png-image.jpg"/>}
                    {city.weather[0].main === 'Rain' && <img src="https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-icon-2.png"/>}
                    {city.weather[0].main === 'Clear' && <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clear-icon.png"/>}
                    
                    <h1>{city.main.temp}°C</h1>
                    <h3>{city.weather[0].main}</h3>
                    <h4>{`min ${city.main.temp_min}°C | max ${city.main.temp_max}`}°C</h4>
                </div>
                )}
            </div>
        </>
    )
}
export default Weather;