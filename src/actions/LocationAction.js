
export const GetGeoLocationAction=(LocationObject)=>{
    return{
        type:'GET_GEO_LOCATION',
        payload:LocationObject
    };
};