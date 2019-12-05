export const removeFromFavorites=(key)=>{
    return{
        type:'REMOVE_FROM_FAVORITES',
        payload:key
    };
};