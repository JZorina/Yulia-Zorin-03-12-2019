import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Popup from 'react-popup';

import {GetGeoLocationAction}from "../actions/LocationAction";
import {GetCurrentWeatherAction,}from "../actions/WeatherActions";
import {GetFiveDayForeCastAction} from '../actions/GetDailyForecasrt';
import {GetAPISuccess} from "../actions/APISuccess";
import {GetAPIFailure} from "../actions/APIFailed";
import {GetGeoLocation,
    GetCurrentWeather,
    GetDailyForecastlocationKey,
    GetDefaultLocation
} from '../apis/APIData';
import {SetLocaionObject,
    SetWeatherObject,
    SetForecastObject
} from '../Additionals/Objects';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import Header from './Layout/Header';
import '../styles/App.css';

class App extends React.Component{
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.GetUserLocation(position.coords.latitude,position.coords.longitude)
                return
            },
            ()=>{
                var UserLocation=GetDefaultLocation();
                this.CreateLocationObject(UserLocation);
            }  
        )
    };

    handleWithAPIError=(error)=>{
        this.props.GetAPIFailure();
        Popup.alert('Sorry, but the API request reached the 50 per day limit :(');
        }

    GetUserLocation=async(lat,long)=>{
       var UserLocationObject=await fetch(GetGeoLocation(lat,long))
       .then(response=>response.json())
       .catch(error=>this.handleWithAPIError(error))
       if (UserLocationObject === undefined) return
        this.CreateLocationObject(UserLocationObject);
    }

    CreateLocationObject=(UserLocationObject)=>{
        if(UserLocationObject)
        {
            var key=UserLocationObject.Key;
            var name=UserLocationObject.LocalizedName;
            var contryName=UserLocationObject.Country.LocalizedName;
            var isFavorite=UserLocationObject.isFavorite;
            var LocationObject= SetLocaionObject(key,name,contryName,isFavorite);
        }
        this.props.GetGeoLocationAction(LocationObject);
        this.GetCurrentWeatherByLocation(UserLocationObject.Key);

    };

    GetCurrentWeatherByLocation=async(locationKey)=>{
        var CurrentWeatherObject=await fetch(GetCurrentWeather(locationKey))
        .then(response=>response.json())
        .catch(error=>this.handleWithAPIError(error))
        if (CurrentWeatherObject === undefined) return
       this.CreateWeatherObject(CurrentWeatherObject,locationKey);

    };

    CreateWeatherObject=(CurrentWeatherObject=null,locationKey)=>{
        if(CurrentWeatherObject)
        {
            var WeatherText=CurrentWeatherObject[0].WeatherText;
            var WeatherIcon=CurrentWeatherObject[0].WeatherIcon;
            var MetricVal=CurrentWeatherObject[0].Temperature.Metric.Value;
            var ImperialVal=CurrentWeatherObject[0].Temperature.Imperial.Value;
            var WeatherObject= SetWeatherObject(WeatherText,WeatherIcon,MetricVal,ImperialVal);
        }
        this.props.GetCurrentWeatherAction(WeatherObject);
        this.GetCurrentWeatherForecast(locationKey)
    };


    GetCurrentWeatherForecast=async(locationKey)=>{
        var ForecastObject=await fetch(GetDailyForecastlocationKey(locationKey))
        .then(response=>response.json())
        .catch(error=>this.handleWithAPIError(error))
        if (ForecastObject === undefined) return
       this.CreateForecastObject(ForecastObject);
    };

    CreateForecastObject=(Forecast)=>{
        if(Forecast)
        {
            var Headline=Forecast.Headline;
            var DailyForecasts=Forecast.DailyForecasts;
            var ForecastObject= SetForecastObject(Headline,DailyForecasts);
        }
        else{
            ForecastObject= SetForecastObject();
        }
        this.props.GetAPISuccess();
        this.props.GetFiveDayForeCastAction(ForecastObject);
        this.renderContent();
    }

    renderContent=()=>{
        return(
            <Router>
                <div className={"frontPage_" + (this.props.Theme?'dark':'light')}>
                    <Header />
                    <Switch>
                        <Route exact path ="/" render={(props) => <Home {...props} 
                        CreateLocationObject={this.CreateLocationObject}
                        GetAPIFailure={this.props.GetAPIFailure} />}/>
                        <Route exact path ="/Favorites" render={(props) => <Favorites {...props} CreateLocationObject={this.CreateLocationObject} />}/>
                    </Switch>
                </div>
            </Router>
        );  
    }
    render()
    {
        return(
            <div>
                {this.renderContent()}      
            </div>
        )
    }
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        GetGeoLocationAction:GetGeoLocationAction,
        GetCurrentWeatherAction:GetCurrentWeatherAction,
        GetFiveDayForeCastAction:GetFiveDayForeCastAction,
        GetAPISuccess:GetAPISuccess,
        GetAPIFailure:GetAPIFailure

    },dispatch);
}

function mapsStateToProps(state){
        return{
            Theme:state.Theme
        }
     }
    

export default connect(mapsStateToProps,matchDispatchToProps)(App);