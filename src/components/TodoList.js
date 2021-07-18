import React, {Component} from 'react'
import Task from './Task';
import {connect} from 'react-redux'

class TodoList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let elements = this.props.tasks.map((task,index)=>{
      return <Task task={task} key={index} updateTask={this.props.updateTask}/>
    })
    return (
      <div>
       <h3>To do list :</h3>
       <ul className="list-group">
            {elements}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks : state.tasks
  }
}

export default connect(mapStateToProps,null)(TodoList);