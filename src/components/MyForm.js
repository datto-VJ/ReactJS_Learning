import React, {Component, createRef} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClear = this.onClear.bind(this)
  }
  state = {
    id:null,
    name:'',
    priority: '',
    status:null
  }
  onChange(e){
    e.preventDefault();
    let target = e.target
    let name = target.name
    let value = target.value
    this.setState( {
        [name]:value 
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTasks(this.state)
    this.setState({
      id:null,
      name:'',
      priority:'',
      status:null
    })
  }
  onClear(e){
    e.preventDefault();
    alert("Do you want to clear?")
    this.setState({
      id:0,
      name:'',
      priority:'',
      status:true
    })
  }
  componentWillReceiveProps(nextProps){
    if (nextProps && nextProps.editTask) {
      this.setState({
        id:nextProps.editTask.id,
        name:nextProps.editTask.name,
        priority:nextProps.editTask.priority,
        status:nextProps.editTask.status
      })
    }else{
      this.setState({
        id:null,
        name:'',
        priority:'',
        status:null
      })
    }
  }
  render() {
    return (
      <div>
      <h3>What are you going to ?</h3>
        <form>
        <div className="form-group">
          <h5>Task name: </h5>
          <input type="text" 
                 className="form-control" 
                 placeholder="Task name"
                 name="name"
                 value={this.state.name  || ''}
                 onChange={this.onChange}
                 />
        </div>
        <div className="form-group">
          <h5>Priority</h5>
          <select id="inputState" 
                  className="form-control"
                  name="priority"
                  value={this.state.priority  || ''}
                  onChange={this.onChange}>
            <option defaultValue>Choose...</option>
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>
        </div>
        <button className="btn btn-primary mr-2" onClick={this.handleSubmit}>OK</button>
        <button className="btn btn-primary" onClick={this.onClear}>Clear</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    editTask: state.editingTask
  }
}

const mapDispatchToProps = (dispatch,props)=>{
  return {
    onAddTasks : (task)=>{
      dispatch(actions.addTask(task))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyForm);