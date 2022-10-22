import { useState } from "react";
import style from "./form.module.css";

export default function WeatherForm({onChangeCity}){

    const [city,setCity] = useState("");
   

    function handleChange(e){

        const value = e.target.value;

        if(value !== ""){

            setCity(value);
        }


    }

    

    function handleSubmit(e){

        e.preventDefault();

        onChangeCity(city);
    }

    return(

        <form className={style.container} onSubmit={handleSubmit}>
            <input className={style.input} type="text" onChange={handleChange} />
        </form>

    )

}