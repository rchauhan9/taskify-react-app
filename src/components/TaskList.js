import React from 'react';
import { connect } from 'react-redux';

import Task from './Task';
import { getTasks } from '../actions';

class TaskList extends React.Component {
  componentDidMount() {
    this.props.getTasks()
  }

  renderTasks() {
    return this.props.tasks.map(task => {
      return (
        <div key={task.id}>
          <Task task={task} />
          <br />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>All Tasks</h2>
        <hr />
        <div>{this.renderTasks()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {tasks: Object.values(state.tasks)}
}

export default connect(mapStateToProps, { getTasks: getTasks })(TaskList);
