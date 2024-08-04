//server/index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const axios = require('axios');

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const axios = require('axios');

// //mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // app.use(cors());
// // app.use(express.json());

// // Your existing code for routes and models



// const app = express();
// const PORT = process.env.PORT || 5000;

// // Replace 'YOUR_MONGODB_URI' with your actual MongoDB connection URI
//const MONGODB_URI = 'mongodb+srv://bellelanders17:<If8v4TChGH3wS4eH>@weather.oa4bstw.mongodb.net/?retryWrites=true&w=majority&appName=weather';
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(cors());
// app.use(express.json());

// // Create a Mongoose model for weather data
// const WeatherData = mongoose.model('WeatherData', {
//   city: String,
//   country: String,
//   temperature: Number,
//   description: String,
//   icon: String,
// });

// // Route to handle storing weather data
// app.post('/api/weather', async (req, res) => {
//   try {
//     // Extract weather data from request body
//     const { city, country, temperature, description, icon } = req.body;

//     // Create a new document using the WeatherData model
//     const weatherData = new WeatherData({
//       city,
//       country,
//       temperature,
//       description,
//       icon,
//     });

//     // Save the weather data to the database
//     await weatherData.save();

//     // Respond with success message
//     res.json({ message: 'Weather data saved successfully' });
//   } catch (error) {
//     console.error('Error saving weather data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(Server is running on port ${PORT});
// });



//trial-2

// Load environment variables from .env file
// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB using the URI from environment variables
// MONGODB_URI = 'mongodb+srv://bellelanders17:<If8v4TChGH3wS4eH>@weather.oa4bstw.mongodb.net/?retryWrites=true&w=majority&appName=weather';
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(cors());
// app.use(express.json());

// // Create a Mongoose model for weather data
// const WeatherData = mongoose.model('WeatherData', {
//   city: String,
//   country: String,
//   temperature: Number,
//   description: String,
//   icon: String,
// });

// // Route to fetch weather data from OpenWeatherMap API and save to the database
// app.get('/api/weather', async (req, res) => {
//   try {
//     const { city } = req.query;
//     const apiKey = process.env.OPENWEATHERMAP_API_KEY;
//     const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    
//     const { name, sys, main, weather } = response.data;
//     const weatherData = new WeatherData({
//       city: name,
//       country: sys.country,
//       temperature: main.temp,
//       description: weather[0].description,
//       icon: weather[0].icon,
//     });

//     await weatherData.save();
//     res.json(weatherData);
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to handle storing weather data manually
// app.post('/api/weather', async (req, res) => {
//   try {
//     const { city, country, temperature, description, icon } = req.body;
//     const weatherData = new WeatherData({
//       city,
//       country,
//       temperature,
//       description,
//       icon,
//     });

//     await weatherData.save();
//     res.json({ message: 'Weather data saved successfully' });
//   } catch (error) {
//     console.error('Error saving weather data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
















// Load environment variables from .env file
// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 5000;

// console.log('MongoDB URI:', process.env.MONGODB_URI); // Debugging line

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// app.use(cors());
// app.use(express.json());

// // Create a Mongoose model for weather data
// const WeatherData = mongoose.model('WeatherData', {
//   city: String,
//   country: String,
//   temperature: Number,
//   description: String,
//   icon: String,
// });

// // Route to fetch weather data from OpenWeatherMap API and save to the database
// app.get('/api/weather', async (req, res) => {
//   try {
//     const { city } = req.query;
//     const apiKey = process.env.OPENWEATHERMAP_API_KEY;
//     const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    
//     const { name, sys, main, weather } = response.data;
//     const weatherData = new WeatherData({
//       city: name,
//       country: sys.country,
//       temperature: main.temp,
//       description: weather[0].description,
//       icon: weather[0].icon,
//     });

//     await weatherData.save();
//     res.json(weatherData);
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Route to handle storing weather data manually
// app.post('/api/weather', async (req, res) => {
//   try {
//     const { city, country, temperature, description, icon } = req.body;
//     const weatherData = new WeatherData({
//       city,
//       country,
//       temperature,
//       description,
//       icon,
//     });

//     await weatherData.save();
//     res.json({ message: 'Weather data saved successfully' });
//   } catch (error) {
//     console.error('Error saving weather data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });















import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './server';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);