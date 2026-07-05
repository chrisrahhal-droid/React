import './App.css';
import { useState } from 'react';
import axios from 'axios';
const API_KEY = "c5f9219f2e50e8ef3eaa58e76281cce3";
function App() {
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState([]);
  
 const getWeather = async () => {
  if (!city) return;

  const cities = city.split(",").map(c => c.trim()).filter(Boolean);

  try {
    const requests = cities.map(cityName =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      )
    );

    const responses = await Promise.all(requests);

    setWeather(responses.map(res => res.data));
  } catch (err) {
    alert("One or more cities were not found");
  }
};


  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      getWeather();
    }
  }

  return (
  <div className="weather-card">
  <input
    type='text'
    placeholder='Enter City Name..'
    value={city}
    onChange={(e) => setCity(e.target.value)}
    onKeyDown={handleKeyPress}
  />

 {weather.map((w, index) => (
  <div key={index} className="weather-card">
    <h2>{w.name}, {w.sys.country}</h2>
    <div className="date">
      {new Date(w.dt * 1000).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long"
      })}
    </div>
    <div className="temp">{Math.round(w.main.temp)}°C</div>
    <div className="description">{w.weather[0].description}</div>
    <div className="wind">Wind Speed: {w.wind.speed} m/s</div>
  </div>
))}

</div>

  );
}

export default App;
