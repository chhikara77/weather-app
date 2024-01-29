import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city,setCity] = useState(null);

  useEffect(() => {
    
  }, []);

  const getData = () =>{
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3ba690e3234fdbdba1669f481c481e6c`); 
        const data = await response.json();
        console.log(response)
        if (response.status === 200) {
         

          // Extract daily weather information
          const dailyWeatherData = {};

          data.list.forEach(entry => {
            const date = entry.dt_txt.split(' ')[0];

            if (!dailyWeatherData[date]) {
              dailyWeatherData[date] = {
                min_temp: entry.main.temp,
                max_temp: entry.main.temp,
                humidity: entry.main.humidity,
                pressure: entry.main.pressure
              };
            } else {
              dailyWeatherData[date].min_temp = Math.min(dailyWeatherData[date].min_temp, entry.main.temp);
              dailyWeatherData[date].max_temp = Math.max(dailyWeatherData[date].max_temp, entry.main.temp);
              dailyWeatherData[date].humidity = Math.max(dailyWeatherData[date].humidity, entry.main.humidity);
              dailyWeatherData[date].pressure = Math.max(dailyWeatherData[date].pressure, entry.main.pressure);
            }
          });

          // Convert the aggregated data to an array for rendering
          const dailyWeatherArray = Object.keys(dailyWeatherData).map(date => ({
            date,
            min_temp: dailyWeatherData[date].min_temp,
            max_temp: dailyWeatherData[date].max_temp,
            humidity: dailyWeatherData[date].humidity,
            pressure: dailyWeatherData[date].pressure
          }));
         console.log(dailyWeatherArray)
          setData(dailyWeatherArray);
        }
        //setData(result);
      } catch (error) {
        //setError(error);
        console.log('erroe',error)
      } 
    };

    fetchData();
  }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Weather in your city</h1>
       <input onChange={(e)=>setCity(e.target.value)} type="text" />
       <button onClick={getData}><span className='question-icon'>?</span>Search</button>
      </header>
      <WeatherInfo list={data}/>
    </div>
  );
}

export default App;
