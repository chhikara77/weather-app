import React from 'react'

const WeatherInfo = ({list}) => {
  return (

    <div className='container'>
        {list.length>0 && list.map(({ date, min_temp, max_temp, humidity, pressure }) => (
                <div className='table-box'>
                    <div className='row date'>{date}</div>
        <div className='row gray-row'><p>Temperature</p></div>
        <div className='row gray-row'>
            <div className='column'><p>Min</p></div>
            <div className='column'><p>Max</p></div>
        </div>
        <div className='row gray-row'>
            <div className='column'>{min_temp}</div>
            <div className='column'>{max_temp}</div>
        </div>
        <div className='row'>
            <div className='column'><p>Pressure</p></div>
            <div className='column'>{pressure}</div>
        </div>
        <div className='row'>
            <div className='column'><p>Humidity</p></div>
            <div className='column'>{humidity}</div>
        </div>
                </div>
              ))}
        
    </div>
  )
}

export default WeatherInfo