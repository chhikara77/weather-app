import React from 'react'

const WeatherInfo = ({list}) => {
  return (

    <div className='container'>
        {list.length>0 && list.map(({ date, min_temp, max_temp, humidity, pressure }) => (
                <div className='table-box'>
                    <div className='row'>{date}</div>
        <div className='row'>Temperature</div>
        <div className='row'>
            <div>Min</div>
            <div>Max</div>
        </div>
        <div className='row'>
            <div>{min_temp}</div>
            <div>{max_temp}</div>
        </div>
        <div className='row'>
            <div>Pressure</div>
            <div>{pressure}</div>
        </div>
        <div className='row'>
            <div>Humidity</div>
            <div>{humidity}</div>
        </div>
                </div>
              ))}
        
    </div>
  )
}

export default WeatherInfo