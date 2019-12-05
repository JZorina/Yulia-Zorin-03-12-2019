import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container ,Grid} from 'semantic-ui-react';
import WeatherMetaData from './WeatherMetaData';
import ForeCastContainer from '../Forecast/ForeCastContainer';
import Spinner from '../Layout/Spinner';
import {AddToFavorites} from '../../actions/AddToFavorites';
import {removeFromFavorites} from '../../actions/removeFromFavorites';
 class WeatherContainer extends React.Component{


    renderErrorMsg=()=>{
        return(
            <div>
                Failed getting data 
            </div>
        );
    }

    SetIfFavorite(){
        if(!this.props.isFavorite){
            this.props.AddToFavorites({
                key:this.props.cityKey,
                cityName:this.props.cityName,
                WeatherIcon:this.props.WeatherIcon,
                WeatherText:this.props.WeatherText,
                Tempature:this.props.Tempature,
                Date:this.props.Date,
                contryName:this.props.contryName
            })
        }
        else{
            this.props.removeFromFavorites(this.props.cityKey);
        }
    }
    renderWeatherDetails=()=>{
       return(
            <Container style={ContainerStyle}> 
                <WeatherMetaData 
                WeatherIcon={this.props.WeatherIcon}
                cityName={this.props.cityName}
                contryName={this.props.contryName}
                TempatureUnit={this.props.TempatureUnit}
                Tempature={this.props.Tempature}
                WeatherText={this.props.WeatherText}
                isFavorite={this.props.isFavorite} 
                SetIfFavorite={()=>this.SetIfFavorite()}
                />
                <Grid centered style={{paddingTop:"25px"}}>
                    <Grid.Row>
                        <ForeCastContainer 
                        dailyForecast={this.props.dailyForecast} 
                        TempatureUnit={this.props.TempatureUnit}
                      />  
                    </Grid.Row>
                </Grid>
            </Container>
       )
    }

    render(){
        return(
            <div className="ui row">
                <div className="ui column">
                    { this.props.APIstate==='Loading'? <Spinner msg="waiting.."/>
                    :
                    this.props.APIstate==='SUCCESS'?this.renderWeatherDetails():this.renderErrorMsg()}
                </div>
            </div>
        );
    }
 }

const ContainerStyle={
    paddingTop:'40px'
} 


function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            AddToFavorites:AddToFavorites,
            removeFromFavorites:removeFromFavorites
        },dispatch)
    }

function mapsStateToProps(state){
    return{
        cityName:state.Location.cityName,
        contryName:state.Location.contryName,
        cityKey:state.Location.Key,
        WeatherIcon:state.Weather.WeatherIcon,
        WeatherText:state.Weather.WeatherText,
        Tempature:state.Weather.Temperature,
        APIstate:state.APIstate,
        dailyForecast:state.Forecast.DailyForecasts,
        isFavorite:state.Location.isFavorite,
        Date:state.Forecast.Headline.EffectiveEpochDate,
        TempatureUnit:state.TempatureUnit,
    }

 }

 export default connect(mapsStateToProps,matchDispatchToProps)(WeatherContainer);