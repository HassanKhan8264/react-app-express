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
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("")
  // const [query, setQuery] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
const submitHandler = (e) =>{
  e.preventDefault();
  console.log('value', cityName);
  // eslint-disable-next-line no-undef
  axios.get(`${baseUrl}/weather${cityName}`)
  .then(res =>{
    console.log('res', res);
    setWeather(res.data)
  })
  .catch((err)=>{

    console.log('err',err);
  })
  


}


  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="">get Weather</label>
        <input type='text' placeholder="enter city" onChange={(e) => setCityName(e.target.value)} />
        <button type='submit'>get Weather</button>
      </form>
      {
        (weather === null) ? null : 
        <div>
          Temperature {weather?.temp} <br/>
          Time {weather?.serverTime}  <br/>
          Humidity {weather?.humidity}  <br/>
          Min {weather?.min}  <br/>
           Max {weather?.max}  <br/>

        </div> 
      }




    </div>
  );
}

export default App;
