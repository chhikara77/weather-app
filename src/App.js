import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city,setCity] = useState(null);

  useEffect(() => {
    
  }, []);

  const getData = () =>{
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3ba690e3234fdbdba1669f481c481e6c`); 
        const result = await response.json();
        console.log(result)
        //setData(result);
      } catch (error) {
        //setError(error);
        console.log('erroe',error)
      } finally {
       // setLoading(false);
       console.log('erroe1')
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
    </div>
  );
}

export default App;
