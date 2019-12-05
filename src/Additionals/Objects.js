export const SetLocaionObject=(Key='',Name='',contryName='',isFavorite=false)=>{
    return{
        Key:Key,
        cityName:Name,
        contryName:contryName,
        isFavorite:isFavorite,
        
    }
}

export const SetWeatherObject=(WeatherText='',WeatherIcon='',MetricVal='',ImperialVal='')=>{
    return{
        WeatherText:WeatherText,
        WeatherIcon:WeatherIcon,
        Temperature:{
            Metric:{
                Value:MetricVal,
                Unit:"C",
            },
            Imperial:{
                Value:ImperialVal,
                Unit:"F",
            }
        },
    }
}

export const SetForecastObject=(Headline=null,DailyForecasts=null)=>{
    return{
        Headline:Headline,
        DailyForecasts:DailyForecasts
    }
}
