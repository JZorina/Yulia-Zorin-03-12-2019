const INITIAL_STATE={
    Headline:{},
    DailyForecasts:[]
 }
 
 export default (state=INITIAL_STATE,action)=>{
     switch(action.type){
        
        case 'GET_FIVE_DAY_FORECAST': 
            return action.payload;   
 
         default:
             return state;
     };
 
 };