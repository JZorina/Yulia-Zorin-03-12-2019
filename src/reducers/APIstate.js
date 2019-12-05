export default (state='Loading',action)=>{
    switch(action.type){
        case 'FAILED':
            return 'FAILED';
        case 'SUCCESS':
            return 'SUCCESS';

        default:
            return state;
    }

}