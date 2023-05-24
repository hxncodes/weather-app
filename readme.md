# Weather-App

This is a simple weather application built with React and Vite, using Tailwind CSS for styling. It allows users to search for weather information based on a specific location and displays the current weather conditions, including temperature, humidity, wind speed, and weather description.

## Features

- Search for weather information by location
- Search autocomplete with GeoDB Cities API
- Display current weather conditions
- Show temperature in Celsius
- Display additional weather details like humidity, wind speed, and weather description

## Installation

To run the React Weather App locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/hxncodes/weather-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd weather-app
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm run dev
   ```

   This will start the app on `http://localhost:5173/`.

## Configuration

The React Weather App requires an API key from a weather data provider and a GeoDB Cities API key for search autocomplete.

1. Weather API key: Create an account and obtain an API key from a weather data provider such as [OpenWeatherMap](https://openweathermap.org/) or [WeatherAPI](https://www.weatherapi.com/).

   Once you have obtained the weather API key, create a `.env` file in the root directory of the project and add the following line:

   ```plaintext
   WEATHER_API_KEY=your-weather-api-key
   ```

   Replace `your-weather-api-key` with your actual weather API key.

2. GeoDB Cities API key: Obtain an API key from [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities) for search autocomplete functionality.

   Once you have obtained the GeoDB Cities API key, add it to the `.env` file in the root directory of the project:

   ```plaintext
   geoApiOptions={
   method: "GET",
   headers: {
    "X-RapidAPI-Key": "your-geodb-api-key",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
   },
   }
   ```

   Replace `your-geodb-api-key` with your actual GeoDB Cities API key.

## Usage

- Enter a location in the search bar, and the app will provide autocomplete suggestions based on GeoDB Cities API.
- Select a location from the autocomplete suggestions or press Enter to fetch the weather information.
- The weather details for the selected location will be displayed, including the temperature, humidity, wind speed, and weather description.
- Use the temperature toggle button to switch between Celsius and Fahrenheit units.

## Technologies Used

- React: JavaScript library for building user interfaces
- Vite: Build tooling for modern web development
- Tailwind CSS: Utility-first CSS framework for styling

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
