
const INITIAL_STATE={
    WeatherText:'',
    WeatherIcon:null,
    Temperature:{
        Metric:{
            Value:null,
            Unit:"C",
            UnitType:null
        },
        Imperial:{
            Value:null,
            Unit:"F",
            UnitType:null
        }
    },
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'GET_CURRENT_WEATHER':
            return action.payload;
        default:
            return state;
    }

}