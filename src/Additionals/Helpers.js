export const GetIconPath=(WeatherIcon)=>{
    return WeatherIcon<10 ?'./icons/0'+WeatherIcon+"-s.png":'./icons/'+WeatherIcon+"-s.png";

}
export const ConvertEchoTimeToDay=(echoTime)=>{
    return (new Date(echoTime * 1000)).toLocaleDateString('en-us', { weekday: 'long' });
}

export const ConvertEchoDateToTimeAndDay=(echoTime)=>{
    const options = {
        weekday: "long",
        year: "numeric",
        month:"long",
        day:"numeric"
    }
    return (new Date(echoTime * 1000)).toLocaleDateString('en-us',options);
}