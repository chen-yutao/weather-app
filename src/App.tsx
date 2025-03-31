import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_KEY = "3622cf5064404e14be963e993d2c254b";
const GEO_API = "https://geoapi.qweather.com/v2/city/lookup";
const WEATHER_API = "https://devapi.qweather.com/v7/weather/7d";

const App: React.FC = () => {
  const [city, setCity] = useState("上海");
  const [locationId, setLocationId] = useState("101020100");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchWeather(locationId);
  }, [locationId]);

  const fetchLocationId = async (cityName: string) => {
    try {
      const response = await axios.get(`${GEO_API}?location=${cityName}&key=${API_KEY}`);
      if (response.data.location && response.data.location.length > 0) {
        setLocationId(response.data.location[0].id);
      } else {
        alert("未找到该城市，请输入正确的城市名称。");
      }
    } catch (error) {
      console.error("获取城市ID失败", error);
    }
  };

  const fetchWeather = async (locationId: string) => {
    try {
      const response = await axios.get(`${WEATHER_API}?location=${locationId}&key=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("获取天气数据失败", error);
    }
  };

  const handleSearch = () => {
    fetchLocationId(inputValue);
    setCity(inputValue)

  };

  return (
      <div className="container">
        <h1>7天天气预报</h1>
        <div className="search-bar">
          <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="输入城市名称"
          />
          <button onClick={handleSearch}>搜索</button>
        </div>
        {weatherData && (
            <div className="weather-info">
              <h2>{city} 未来7天天气</h2>
              <ul>
                {weatherData.daily.map((day: any, index: number) => (
                    <li key={index}>
                      <strong>{day.fxDate}</strong> - {day.textDay}, {day.tempMin}°C ~ {day.tempMax}°C
                    </li>
                ))}
              </ul>
            </div>
        )}
      </div>
  );
};

export default App;
