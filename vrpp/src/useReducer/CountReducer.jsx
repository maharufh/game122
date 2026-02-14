 function countReducer(state,action){
    switch(action.type){
        case 'INC':
            return{count:state.count+1}
        case 'DEC':
            return{count:state.count-1}
        case 'INCBY':
            return{count:state.count+action.payload}
        case 'RESET':
            return{count:0}
            default:
                return state
    }
 }
export default countReducer