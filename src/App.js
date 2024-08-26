import logoImage from "./images/logo.png";
import Navbar from "./components/Navbar"
import CurrentWeather from "./components/CurrentWeather"
import CurrentTime from "./components/CurrentTime";
import NextDaysWeather from "./components/NextDaysWeather"
import './App.css';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <main>
          <h1>London</h1>
          <section className="current-weather-time">
            <CurrentTime/>
            <CurrentWeather/>
          </section>
          <hr/>
          <section className="weather-forecast-section">
            <div className="date-weather-info weather-info-types">
              <span>max temp <br/> min temp</span>
              <span>Percipation</span>
              <span>Wind</span>
              <span>Sunrise <br/> Sunset</span>
              <span>Forecast certainty</span>
            </div>
            <NextDaysWeather/>
          </section>
          
        </main>
      </div>
      
  );
}

export default App;