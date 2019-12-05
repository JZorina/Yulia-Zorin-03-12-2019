export const AddToFavorites=(weatherObj)=>{
    return{
        type:'ADD_TO_FAVORITES',
        payload:weatherObj
    };
};