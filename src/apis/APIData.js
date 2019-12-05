 const apikey="r67hJ4XFUS4zuBIvGnErmsAOcfF8NEMR";


export const GetAutoCompleteSearchText=(text)=>{
  return "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+apikey+"&q="+text
}

export const GetCurrentWeather=(locationKey)=>{
  return "http://dataservice.accuweather.com/currentconditions/v1/"+locationKey+"?apikey="+apikey
}
export const GetDailyForecastlocationKey=(locationKey)=>{
  return "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+locationKey+"?apikey="+apikey
}

export const GetGeoLocation=(lat,long)=>{
   
    return "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey="+apikey+"&q="+lat+"%2C"+long
}

export const GetDefaultLocation=()=>{
   return {
        "Key":"215793",
        "LocalizedName":"Tel-aviv",
        "Country":{
            "LocalizedName":"Israel",
        }
      }
    }