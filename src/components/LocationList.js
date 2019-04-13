import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = (props)=>{    
    let cities = props.cities;
    let onSelectLocation = props.onSelectLocation;

    const generateWeatherData = (cities)=>{
        let weatherLocations = cities.map((city,i)=>{
            return <WeatherLocation city={city}
                                    key={i}
                                    onWeatherLocationClick = {()=>{
                                        console.log("Me hicieron click");
                                        onSelectLocation(city);
                                        
                                    }}/>
        });
        return weatherLocations;
    }

    return (<div>
        {generateWeatherData(cities)}
    </div>);
};
LocationList.propTypes  = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;