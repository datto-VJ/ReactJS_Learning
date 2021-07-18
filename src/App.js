import React, {Component} from 'react'
import Navbar from './components/Navbar';
import TodoScreen from './components/TodoScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(task){
    let {tasks}= this.state
    tasks.push(task)
    this.setState({tasks})
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }
  render() {
    return (
      <div className="container">
        <Navbar/>
        <TodoScreen onSubmit={this.onSubmit} updateTask={this.updateTask}/>
      </div>
    )
  }
}

export default App;