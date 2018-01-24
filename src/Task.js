import React, { Component } from 'react';
import './Task.css';

export class TaskHead extends Component {

  constructor(props){
    super(props);
    this.state ={
      edit: false,
      delete: false,
      value: this.props.children
    }
  }
  edit = () => {
    this.setState({edit: true});
  }
  save = () => {
    this.state.value = this.refs.newHead.value;
    this.setState({edit: false});
  }
  delete = () =>{
    this.setState({delete: true});
  }
  normalHead = () =>{
    return (
      <div className="task__head">
        <h4 onDoubleClick={this.edit} className="task__title">{this.state.value}</h4>
        <button onClick={this.edit} className="task__button task__button--edit"> edit </button>
      </div>
    );
  }
  editHead = () =>{
    return (
      <div className="task__head">
       <input ref="newHead" className="task__inputhead" type="text" defaultValue={this.props.children} />
       <button onClick={this.save} className="task__button task__button--save"> save </button>
      </div>
    );
  }
  render() {
    if (this.state.edit){
      return this.editHead ();
    } else {
      return this.normalHead ();
    }
  }
}

export class TaskBody extends Component {
  constructor(props){
    super(props);
    this.state ={
      edit: false,
      delete: false,
      value: this.props.children
    }
  }
  edit = () => {
    this.setState({edit: true});
  }
  save = () => {
    this.state.value = this.refs.newBody.value;
    this.setState({edit: false});
  }


  normalBody= () =>{
    return (
      <div className="task__body">
        <p onDoubleClick={this.edit} className="task__text">{this.state.value}</p>
        <div className="task__footer">
          <button onClick={this.edit} className="task__button task__button--edit">edit</button>
          <button onClick={this.props.delete.bind(this,this.props.taskindex)} className="task__button task__button--delete">delete</button>
        </div>
      </div>
    );
  }
  editBody = () =>{
    return (
    <div>
      <div className="task__body">
        <textarea ref="newBody" className="task__textarea" defaultValue={this.props.children} />
        <div className="task__footer">
          <button onClick={this.save} className="task__button task__button--edit">save</button>
          <button onClick={this.props.delete} className="task__button task__button--delete">delete</button>
        </div>
      </div>
    </div>
    );
  }
  render() {
    if (this.state.edit){
      return this.editBody ();
    } else {
      return this.normalBody ();
    }
  }
}
