import { useEffect, useState } from "react";
import style from "./weatherInfo.module.css";

export default function WeatherInfo({ weather }) {
  const [tempe, setTempe] = useState(0);

  const [map, setMap] = useState(null);

  useEffect(() => {
    const kelvin = weather?.main.temp;

    const celcius = kelvin - 273.15;

    setMap(
      <iframe
        title="map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26249.537832620677!2d${weather?.coord.lon}9!3d${weather?.coord.lat}4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1664572296499!5m2!1ses-419!2sar`}
        defaultZoo
        width="250"
        height="250"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    );

    setTempe(celcius.toFixed(1));
  }, [weather]);

  return<div>
      {weather === "No" ? (
        <div>No exites</div>
      ) : (
        <div className={style.container}>
          <div className={style.name}>{weather?.name}</div>
          <div className={style.description}>
            {" "}
            {(weather?.weather[0].description).toUpperCase()}{" "}
          </div>
          <img
            className={style.imagen}
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
            alt={weather?.weather[0].icon}
          />
          <div className={style.temp}>Temperatura actual : {tempe}°</div>
          
          <div className={style.maps}>{map}</div>
        </div>
      )}
    </div>
  
}
