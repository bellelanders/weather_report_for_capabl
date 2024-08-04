// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');

//   const fetchWeather = async () => {
//     const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
//     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//     try {
//       const response = await axios.get(URL);
//       setWeather(response.data);
//       setError('');
//     } catch (err) {
//       setError('City not found');
//     }
//   };

//   return (
//     <div className="App">
//       <header className="header">
//         <h1>Weather App</h1>
//         <div>
//           <input
//             id="input"
//             type="text"
//             placeholder="Enter city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button id="search" onClick={fetchWeather}>
//             Search
//           </button>
//         </div>
//       </header>
//       {error && <p className="error">{error}</p>}
//       {weather && (
//         <div className="weather">
//           <h2 id="city">{weather.name}, {weather.sys.country}</h2>
//           <div className="temp-box">
//             <img
//               src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//               alt={weather.weather[0].description}
//             />
//             <h3 id="temperature">{Math.round(weather.main.temp)}°C</h3>
//           </div>
//           <p id="clouds">{weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;












import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/weather', {
        city,
      });
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Weather Forecast</h1>
        <div>
          <input
            id="input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
          <button id="search" onClick={getWeather}>
            Search
          </button>
        </div>
      </header>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather">
          <h2 id="city">
            {weather.city}, {weather.country}
          </h2>
          <div className="temp-box">
            <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="weather icon" />
            <h3 id="temperature">{weather.temperature}°C</h3>
          </div>
          <p id="clouds">{weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;