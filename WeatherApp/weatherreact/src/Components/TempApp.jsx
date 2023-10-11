import React, { useEffect, useState } from 'react'
import './Css/Style.css'
const TempApp = () => {
    const [city,setCity]= useState(null);
    const [search,setSearch]= useState("Mumbai");

    useEffect(()=>{
        const  fetchApi =async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=633aa642413293e0141308ece978977a`
            const response = await fetch(url)

            const reJson =await response.json();

            // console.log(reJson)
            setCity(reJson.main);
        }
        fetchApi();
    },[search])
  return (
    <>
    <div className="box">
        <div className="inputData">
            <input type="search" className="inputField" value={search} onChange={(event)=>{
                setSearch(event.target.value)
            }} />
        </div>
        {!city ? (
            <p>No data found</p>
        ):(

            <div className="info">
            <h1 className="location">
            {search}
            </h1>
            

            <h1 className="temp">
                {city.temp}°Celcius
            </h1>


            <h3 className='tempmin-max'>
            Min : {city.temp_min} °Celcius | Max : {city.temp_max} °Celcius
            </h3>
        </div>
        )}

      
    </div>

    </>
  )
}

export default TempApp