import logoImage from "./images/logo.png";
import Navbar from "./components/Navbar"
import CurrentWeather from "./components/CurrentWeather"
import CurrentTime from "./components/CurrentTime";
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

        </main>
      </div>
      
  );
}

export default App;