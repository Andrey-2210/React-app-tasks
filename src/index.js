import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import {TaskHead,TaskBody} from './Task';
import AddTask from './AddTask';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('app');

class TaskManager extends Component{
  constructor(props){
      super (props);
      this.state = {
        tasks :[
          {title: 'Task 1', content: 'Hello learn ReactJs'},
          {title: 'Task 2', content: 'Need write app'},
          {title: 'Task 3', content: 'Need write app'},
          {title: 'Task 4', content: 'Need write app'}
        ]
      }
  }
  delete = (i) => {
      var ar = this.state.tasks;
      ar.splice(i, 1);
      this.setState({tasks: ar});
  }
  render() {
    return(
      <div className="workspace">
        {this.state.tasks.map((task,i) =>
          <div key={i} index={i} className="field">
            <div className="task">
              <div>
                <TaskHead>{task.title}</TaskHead>
                <TaskBody delete={this.delete} taskindex={i}>{task.content}</TaskBody>
              </div>
            </div>
          </div>
        )}
        <AddTask />
      </div>
    )

  }

}

ReactDOM.render(
    <TaskManager />
, app);
registerServiceWorker();
