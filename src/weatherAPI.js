const apiKey = "#";
const baseUrl = "https://api.weatherapi.com/v1/current.json";

// Function to fetch weather data
export async function fetchWeather(city) {
  const url = `${baseUrl}?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
}

// Function to display weather data


