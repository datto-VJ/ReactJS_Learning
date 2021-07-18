import * as types from '../constants/actionType'
let initialState = {}
let myReducer = (state = initialState,action)=>{
    switch(action.type){
        case types.EDIT_TASK:
            state = action.task
            return state;
        default: return state;
    }
}
export default myReducer