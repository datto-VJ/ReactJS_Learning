import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
class Task extends Component {
  constructor(props){
    super(props)
    this.onEdit = this.onEdit.bind(this)
    this.onfinishTask = this.onfinishTask.bind(this)
  }
  checkPiority(taskPrority){
    switch(taskPrority){
      case 'HIGH':
        return "btn-danger"
      case 'MEDIUM':
        return "btn-warning"
      case 'LOW':
        return "btn-info"
      default: 
        return ""
    }
  }
  isDoneTask(status){
    if(!status){
      return 'line-through'
    }
    return 'none'
  }
  onEdit(){
    this.props.onEditTask(this.props.task)
  }
  onfinishTask(){
    this.props.onRemoveTask(this.props.task)
  }
  render() {
    let {task}= this.props
    return (
    <li className="list-group-item d-flex justify-content-between align-items-center"
        style={{textDecoration: this.isDoneTask(task.status)}}>
        {task.name}
        <div>
            <button type="button" 
                    className={`btn ${this.checkPiority(task.priority)} mr-2`}>{task.priority}</button>
            <button type="button" 
                    className="btn btn-info mr-2"
                    onClick={this.onEdit}>Edit</button>
            <button type="button" 
                    className="btn btn-success"
                    onClick={this.onfinishTask}>Remove</button>
        </div>
    </li>
    )
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return {
    onEditTask : (task)=>{
      dispatch(actions.editTask(task))
    },
    onRemoveTask: (task)=>{
      dispatch(actions.removeTask(task))
    }
  }
}
export default connect(null,mapDispatchToProps)(Task);