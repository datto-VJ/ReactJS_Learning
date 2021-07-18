import { combineReducers } from "redux";
import tasks from './tasks'
import editingTask from './editingTask'
// Reducers tương tự như mutation vủa vuejs
// Mutations are easier to work with then Reducers
// => nhìn chung nhiệm vụ là để set lại state trong store.
// nhận vào 2 đối số là actions và state
const myReducer = combineReducers({
    tasks,
    editingTask
});

export default myReducer