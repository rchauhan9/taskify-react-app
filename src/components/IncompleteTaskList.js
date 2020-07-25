import React from 'react';
import { connect } from 'react-redux';

import Task from './Task';
import { getTasks } from '../actions';

class IncompleteTaskList extends React.Component {
  componentDidMount() {
    this.props.getTasks(this.props.userId)
  }

  renderTasks() {
    return this.props.tasks.map(task => {
      if (!task.completed) {
        return (
          <div className=".col-4 mr-auto" key={task.id}>
            <Task task={task} />
            <br />
          </div>
        )
      } else {
        return null
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Incomplete Tasks</h2>
        <hr />
        <div className="container">
          <div className="row">
            {this.renderTasks()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: Object.values(state.tasks),
    userId: state.authReducer.userId
  }
}

export default connect(mapStateToProps, { getTasks: getTasks })(IncompleteTaskList);
