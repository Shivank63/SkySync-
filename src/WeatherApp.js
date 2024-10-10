import Header from './Header';
import SearchBar from './SearchBar';
import Infobox from './InfoBox';
import { useState } from 'react';
import './App.css'

export default function WeatherApp(){
 const [weatherInfo,setWeatherInfo]= useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
     
    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); // This will now include the updated city name
    };

    return (
        <div className="bg"style={{textAlign:'center'}}>
            <Header/>
            <h1> Weather App </h1>
            <SearchBar updateInfo={updateInfo}/>
            <Infobox info={weatherInfo} />
        </div>
    );
        }
        