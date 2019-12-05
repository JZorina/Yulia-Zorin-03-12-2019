
export const GetCurrentWeatherAction=(WeatherObject)=>{
    return{
        type:'GET_CURRENT_WEATHER',
        payload:WeatherObject
    };
};
