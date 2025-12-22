import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateWeather }) {
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "cc572be3407b9e8c0495dd95ca2b06e9";

  let getWeather = async (city) => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let data = await response.json();

      let result = {
        city: city,
        temperature: data.main.temp.toString(),
        temp_min: data.main.temp_min.toString(),
        temp_max: data.main.temp_max.toString(),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        feelslike: data.main.feels_like.toString(),
        windSpeed: (data.wind.speed * 3.6).toString()
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let [city, setCity] = useState('');
  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async(event) => {
    try {
      event.preventDefault();
      let newInfo = await getWeather(city);
      updateWeather(newInfo);
      setCity('');
      setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className='searchbox'>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br /><br />
        <Button variant="contained" type='submit'>
          Search
        </Button>
        {error && <p style={{color:'red'}}>Could not fetch the weather. Please try again.</p>}
      </form>
    </div>
  );
}