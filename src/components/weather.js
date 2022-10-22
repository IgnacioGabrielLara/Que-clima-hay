import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfo from "./weatherInfo";
import style from "./weather.module.css";
import Loader from "./loader";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [resp,setResp] = useState(undefined);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Clima | ${weather?.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "Buenos aires") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=88b4df8962b53c9c315e2265e041fb90&lang=es`;

    try {
      const request = await fetch(url);

      
      if(request.status === 200){
        const obj = await request.json();
        setResp(true);
      setTimeout(() => {
        setWeather(obj);
      }, 500);

      console.log(obj);
      }
      else{
        setTimeout(() => {
            setResp(false);
          }, 500);
        
      }

    
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);

    loadInfo(city);
  }

  return (
    <div className={style.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherInfo weather={weather} /> : <Loader request={resp}/>}
    </div>
  );
}
