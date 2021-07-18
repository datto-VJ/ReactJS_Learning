import * as types from '../constants/actionType'
let data = JSON.parse(localStorage.getItem('tasks'))
let initialState = data? data: [];

let myReducer = (state=initialState,action)=>{
    switch(action.type){
        case types.ADD_TASK :
            let newTask = {
                id:null,name:'',priority:'',status:null
            }
            if(action.task.id===null){
                newTask = {
                    id:Math.random(),
                    name: action.task.name,
                    priority : action.task.priority,
                    status: true
                }
                state.push(newTask)
            }else{
                let index = state.findIndex(task=>task.id === action.task.id)
                newTask = {
                    id: action.task.id,
                    name: action.task.name,
                    priority: action.task.priority,
                    status: action.task.status
                }
                state[index] = newTask
            }
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state]
        case types.REMOVE_TASK:
            let index = state.findIndex(task=>task.id === action.task.id)
            state.splice(index,1)
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state]
        default: return [...state];
    }
}

export default myReducer;