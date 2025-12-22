import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
import './Weather.css';

export default function WeatherApp() {
    const [WeatherData, setWeatherData] = useState({
        city: "Mumbai",
        description: "smoky",
        feelslike: "32.26",
        temperature: "31.99",
        humidity: 40,
        windSpeed: "147.12",
        temp_min: "29.94",
        temp_max: "31.99"
    });

    let updateWeather = (newInfo) => {
        setWeatherData(newInfo);
    };

  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App Component</h2>
        <SearchBox updateWeather={updateWeather} />
        <InfoBox info={WeatherData} />
    </div>
  );
}