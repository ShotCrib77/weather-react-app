export default function NextDaysWeather() {
  return (
    <section className="weather-date-overiview-section">
      <div className="weather-date">
        <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png"/>
        <span>Today <br/> 26/08</span>
      </div>
      <hr className="vertical-line"/>
      <div className="date-weather-info center">
        <span> 20*C <br/> 20*C</span>
        <span>15%</span>
        <span>4 m/s</span>
        <span>05:31 <br/> 20:05</span> 
        <span>83%</span>
      </div>
    </section>
  )
}