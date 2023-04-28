import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./components/dropdown/dropdown";
import { useEffect, useState } from "react";

function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState({});
  const [AllCities, setAllCities] = useState([]);

  const apiKey = "beff9d11e46927e69f514cc3edeeb0e3";

  const handleChangeCountry = (evnt) => {
    setCountry(evnt.target.value);
  };

  const handleChangeCity = (evnt) => {
    if (evnt.target.value != "Select City") {
      setCity(evnt.target.value);
    } else {
      setCity("");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (city) => {
    if (city != "") {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((response) => setTemperature(response))
        .catch((err) => console.error("Error: " + err));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="title">
          <h2>Get Cities Temperature</h2>
        </div>
      </header>
      <Dropdown
        defaultCountry={"Select Country"}
        defaultCity={"Select City"}
        onChangeCountry={handleChangeCountry}
        onChangeCity={handleChangeCity}
        selectedCountry={country}
        cityTemperature={temperature}
      />
    </div>
  );
}

export default App;
