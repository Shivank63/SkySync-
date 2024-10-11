 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
import { useState } from 'react';
 export default function SearchBar({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="6f35c54afe90bc4eee697d4e22c2ef7e";


    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=6f35c54afe90bc4eee697d4e22c2ef7e

    let getWeatherInfo= async(city)=>{

        try{
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
                      );
                
                      let jsonResponse=await response.json();
                
                        let result={
                            city: jsonResponse.name, 
                            temp: jsonResponse.main.temp,
                            tempMin: jsonResponse.main.temp_min,
                            tempMax: jsonResponse.main.temp_max,
                            humidity: jsonResponse.main.humidity,
                            feelsLike:jsonResponse.main.feels_like,
                            weather: jsonResponse.weather[0].description,
                
                
                        };
                        console.log(result);
                        return result;
        }
        catch(err){
            throw err;
        }
  };

   
    let handleChange=(ev)=>{
        setCity(ev.target.value);
};
     let handleSubmit= async (ev)=>{
        try {
            ev.preventDefault();
     console.log(city);
      setCity("");
       let newInfo=await getWeatherInfo(city);
       updateInfo(newInfo);
        }catch(err) {
         setError(true);
        }
    };
   return(
        <div>
             
             <form onSubmit={handleSubmit}>
             <TextField id="city" 
             label="City Name"
             variant="outlined"
             required value={city} 
             onChange={handleChange}
             />
            <br></br> <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
};

