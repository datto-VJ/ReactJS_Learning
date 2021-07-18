import React, {Component} from 'react'
import MyForm from './MyForm';
import TodoList from './TodoList';

class TodoScreen extends Component {
  constructor(props){
    super(props)
    this.updateTask = this.updateTask.bind(this)
  }
  state={
    updateTask:[]
  }
  updateTask(task){
    this.state.updateTask.push(task)
  }
  render() {
    return (
      <div  className="mt-2">
        <div className="row">
          <div className="col-4">
            <MyForm onSubmit={this.props.onSubmit} updateTask={this.state.updateTask}/>
          </div>
          <div className="col-8">
            <TodoList updateTask={this.updateTask}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoScreen;