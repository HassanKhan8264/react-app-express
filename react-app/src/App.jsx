// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import moment from "moment";
let baseUrl = ""
if(window.location.href.split(':')[0] === "http"){
   baseUrl = "http://localhost:5002"
}



function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('')
  // const [query, setQuery] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
const submitHandler = (e) =>{
  e.preventDefault();
  console.log('value', cityName);
  // eslint-disable-next-line no-undef
  axios.get(`${baseUrl}/weather/${cityName}`)
  .then(res =>{
    console.log('res', res);
    setWeatherData(res.data)
  })
  .catch((err)=>{

    console.log('err',err);
  })
  


}


  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="">get weatherData</label>
        <input type='text' placeholder="enter city" onChange={(e) => setCityName(e.target.value)} />
        <button type='submit'>get weatherData</button>
      </form>
      {
        (weatherData === null) ? null : 
        <div>
          City {weatherData?.city} <br/>
          Temperature {weatherData?.temp} <br/>
          Time {weatherData?.serverTime}  <br/>
          Humidity {weatherData?.humidity}  <br/>
          Min {weatherData?.min}  <br/>
           Max {weatherData?.max}  <br/>

        </div> 
      }




    </div>
  );
}

export default App;
