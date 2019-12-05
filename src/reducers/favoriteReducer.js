const INITIAL_STATE=[];

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'ADD_TO_FAVORITES': 
            return state.concat(action.payload);
        case 'REMOVE_FROM_FAVORITES':
            return state.filter(x=>action.payload!==x.key);    
        default:
            return state;
    };
};