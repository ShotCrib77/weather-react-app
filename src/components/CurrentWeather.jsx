import sunny from "../images/sunny.png";
import { fetchWeather, getIconByCode } from "../weatherAPI.js"
import { useState, useEffect } from 'react';


function CurrentWeather() { // Replace second span in tempature with a button component for changing degrees
  const [temperature, setTemperature] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null)
  useEffect(() => {
    async function getWeather() {
      console.log("Weather is being fetched");
      const data = await fetchWeather("London");
      const roundedTemp = Math.round(data.current.temp_c);
      const icon = getIconByCode(data.current.condition.code);
      console.log(`Current weather in ${data.location.name}: ${data.current.condition.text}`);
      console.log(`Temperature: ${roundedTemp} °C`);
      console.log(`The icon for code 1000 is: ${icon}`);
      console.log(`Code: ${data.current.condition.code} `)
      setWeatherIcon(`${icon}`)
      setTemperature(`${roundedTemp}°`);
      setWeatherDescription(data.current.condition.text);
    }
    getWeather();
  }, []);
  
  return(
    <section className="current-weather-section">
      <h2>Current weather</h2>

      <div className="current-weather-container">
        <img src={weatherIcon} alt={weatherDescription}/>
        <div className="tempature">
          <span className="temp" id="temp">{temperature}</span>
          <span className="tempature-scale">C|F</span>
        </div>
        <hr className="vertical-line"/>
        <span className="weather-text-description">{weatherDescription}</span>
      </div>

    </section>
    
  );
};

export default CurrentWeather;