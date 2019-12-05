
const INITIAL_STATE={
    key:'',
    cityName:' ',
    contryName:'',
    Latitude:null,
    Longitude:null,
    isFavorite:null,
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        
        case 'GET_GEO_LOCATION':
            return action.payload;
        case 'ADD_TO_FAVORITES': 
             Object.assign(state,  {
            isFavorite: true
        });
        return state;
        case 'REMOVE_FROM_FAVORITES':
            if (state.Key === action.payload) {
                 Object.assign(state, {
                    isFavorite: false
                });
                return state;
            } else {
                return state;
            }

        default:
            return state;
    };

};