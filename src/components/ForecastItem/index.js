import React from 'react';
import WeatherData from '../WeatherLocation/WeatherData';
import PropTypes from 'prop-types'


const ForecastItem = ({weekDay, hour, data})=>{
    return (
        <div>
            <h2>
                {weekDay} Hora: {hour} pm
            </h2>
            <WeatherData data={data}/>
        </div>
    );
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
    
}
export default ForecastItem;