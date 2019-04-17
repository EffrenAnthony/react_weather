import React, {Component} from 'react';
import ForecastItem from './ForecastItem';
import { transformForcastData } from '../services/transformForecastData';
import { CircularProgress } from '@material-ui/core';



const dataEjemplo = {
    temperature:10,
    humidity:11,
    weatherState:'thunderstorm',
    wind:12
}

class ForecastExtended extends Component{
    constructor(props){
        super(props);
        this.state = {
            forecastData: null
        }
    }

    getUrlWeatherForecastByCity = (city) => {
        let apiKey = "01973c4a304e4f87af6fd8e97033eede";
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        return url;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({
                forecastData:null
            })
            this.updateCity(nextProps.city)
        }
        
    }

    updateCity = (city)=> {
        // let {city} = this.props;
        let url = this.getUrlWeatherForecastByCity(city);
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            let forecastData = transformForcastData(data);    
            this.setState({
                forecastData: forecastData
            })      
        });
    }
    componentDidMount(){
        this.updateCity(this.props.city)
    }

    renderForecastItemDays(forecastData){
        let ForecastItems = forecastData.map((forecastItem,i)=>{
            return <ForecastItem weekDay={forecastItem.weekDay}
                                 data={forecastItem.data}
                                 hour={forecastItem.hour}
                                 key={i}/>
        });
        return ForecastItems;
    }

    render(){
        let {forecastData} = this.state;
        return (<div>
            <h2>Pronostico extendido de {this.props.city}</h2>
            {forecastData ? this.renderForecastItemDays(forecastData):<CircularProgress></CircularProgress>}
        </div>)
    }
}

export default ForecastExtended;