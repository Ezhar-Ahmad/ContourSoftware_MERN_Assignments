import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./components/dropdown/dropdown";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

async function fetchWeather(city, apiKey) {
  if (city != "") {
    //const res =
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((res) => console.log(res));
    //return res.json();
  }
}

function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState({});
  const [apiStatus, setApiStatus] = useState("");

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

  // function GetTheTemp() {
  //   const { data, status } = useQuery(
  //     "temperature",
  //     fetchWeather(city, apiKey)
  //   );
  //   console.log("data: " + data + " Status: " + status);
  // }
  //useEffect(() => {}, [city]);

  const { data, status } = useQuery("temperature", fetchWeather(city, apiKey));
  console.log("data: " + data + " Status: " + status);
  // if (error) return `An error has occurred: ${error.message}`;

  // if (data) setTemperature(data);
  //if (status) setApiStatus(status);

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
        apiStatus={apiStatus}
        cityTemperature={temperature}
      />
    </div>
  );
}

export default App;
