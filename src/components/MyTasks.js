import React from 'react';
import { connect } from 'react-redux';

import CenteredModal from './CenteredModal';
import IncompleteTaskList from './IncompleteTaskList';
import CompleteTaskList from './CompleteTaskList';
import TaskForm from './TaskForm';
import Spinner from './Spinner';
import {createTask} from '../actions';

class MyTasks extends React.Component {
  state = { showingModal: false }

  onSubmit = (formValues) => {
    this.props.createTask({
      ...formValues,
      'username': this.props.userId,
      'completed': false
    });
    this.onHide()
  }

  showModal = () => {
    this.setState({showingModal: true})
  }

  onHide = () => {
    this.setState({showingModal: false})
  }

  renderSignedIn() {
    return (
      <div className="container">
        <br />
        <button className="btn btn-primary float-right" onClick={this.showModal}>Create Task</button>
        <IncompleteTaskList />
        <br />
        <br />
        <CompleteTaskList />
        <CenteredModal show={this.state.showingModal} onHide={this.onHide}
            title="Create a task"
            body={<TaskForm onSubmit={this.onSubmit} />} />
      </div>
    )
  }

  renderLoading() {
    return (
      <Spinner message="Loading..." />
    )
  }

  renderSignedOut() {
    return (
      <div>You must be signed in to view this page.</div>
    )
  }

	render() {
    if (this.props.isSignedIn) {
      return this.renderSignedIn()
    } else if (!this.props.isSignedIn) {
      return this.renderSignedOut()
    } else {
      return this.renderLoading()
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authReducer.isSignedIn,
    userId: state.authReducer.userId
  }
}

export default connect(mapStateToProps, {createTask: createTask})(MyTasks);
