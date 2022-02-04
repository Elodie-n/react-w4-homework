import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <h1>Weather App</h1>
          <Weather />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
