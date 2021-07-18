import * as types from '../constants/actionType'

export const addTask = (task)=>{
    return {
        type : types.ADD_TASK,
        task
    }
}

export const editTask = (task)=>{
    return {
        type: types.EDIT_TASK,
        task
    }
}

export const removeTask = (task)=> {
    return {
        type:types.REMOVE_TASK,
        task
    }
}