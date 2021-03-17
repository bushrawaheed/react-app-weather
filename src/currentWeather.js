import React from "react";
import axios from 'axios';
export default function currentWeather(){
    function handleResponse(response){
        alert(`The weather in London is ${response.data.main.temp}`);
    }
    let apiKey="2129fd04df3dd86efb944950e327f7a5";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then (handleResponse);
    return(
        <h1>hello</h1>
    );
}