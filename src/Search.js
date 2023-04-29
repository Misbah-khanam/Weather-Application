import React from 'react'
import api from './api/axiosConfig.js'
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Search.css';

const Search = () => {
const [weather, setWeather] = useState("--");
  const [temperature, setTemperature] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [windSpeed, setWindSpeed] = useState("--");
  const [pressure, setPressure] = useState("--");
  const [location, setLocation] = useState(" ");

  const getData = async() => {
    try {
      const response = await api.get(`/api/v1/weather?city=${location}`);
      console.log(response.data.weather[0].description);
      setWeather(response.data.weather[0].description);
      setTemperature(response.data.main.temp);
      setHumidity(response.data.main.humidity);
      setWindSpeed(response.data.wind.speed);
      setPressure(response.data.main.pressure);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
        <div className='heading-container'>
            <h1 className='heading'>Current Weather Details</h1>
        </div>
        <div>
            <input placeholder='location' onChange={(e) => {setLocation(e.target.value)}} className='search-bar'/>
            <button type='submit' onClick={getData} className='search-btn'>Search</button>
        </div>
        <div className='weather-div'>
            <h2>Weather Details</h2>
            <table className='weather-table'>
                <tbody>
                <tr className='weather-row'>
                    <td className='weather-data1'>weather</td>
                    <td className='weather-data'>{weather}</td>
                </tr>
                <tr className='weather-row'>
                    <td className='weather-data1'>temperature</td>
                    <td className='weather-data'>{temperature}</td>
                </tr>
                <tr className='weather-row'>
                    <td className='weather-data1'>humidity</td>
                    <td className='weather-data'>{humidity}</td>
                </tr>
                <tr className='weather-row'>
                    <td className='weather-data1'>windSpeed</td>
                    <td className='weather-data'>{windSpeed}</td>
                </tr>
                <tr className='weather-row'>
                    <td className='weather-data1'>pressure</td>
                    <td className='weather-data'>{pressure}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Search