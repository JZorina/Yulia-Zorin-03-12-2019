const INITIAL_STATE=false;

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_THEME': 
            return !state;   
        default:
            return state;
    };
};