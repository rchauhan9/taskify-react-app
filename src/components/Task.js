import React from 'react';
import { connect } from 'react-redux';

import CenteredModal from './CenteredModal';
import ConfirmModal from './ConfirmModal';
import TaskForm from './TaskForm';
import IosCreateOutline from 'react-ionicons/lib/IosCreateOutline';
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline';
import IosCheckmarkCircle from 'react-ionicons/lib/IosCheckmarkCircle';
import { deleteTask, editTask } from '../actions';

class Task extends React.Component {

  state = {
    showingFormModal: false,
    showingConfirmModal: false
  }

  showFormModal = () => {
    this.setState({showingFormModal: true})
  }

  onHideForm = () => {
    this.setState({showingFormModal: false})
  }

  showConfirmModal = () => {
    this.setState({showingConfirmModal: true})
  }

  onHideConfirm = () => {
    this.setState({showingConfirmModal: false})
  }

  onSubmit = (formValues) => {
    this.props.editTask({
      ...formValues,
      'id': this.props.task.id,
      'username': this.props.task.username,
      'completed': this.props.task.completed
    });
    this.onHideForm()
  }

  onCloseButtonClick = () => {
    this.showConfirmModal()
  }

  onConfirmDelete = () => {
    this.props.deleteTask(this.props.task.id, this.props.task.username)
  }

  onEditButtonClick = () => {
    this.showFormModal()
  }

  onCheckmarkButtonClick = () => {
    this.props.editTask({ ...this.props.task,
      completed: !this.props.task.completed
    })
  }

  renderCheckMark() {
    if (!this.props.task.completed) {
      return <IosCheckmarkCircleOutline color="green" fontSize="32px"/>
    } else {
      return <IosCheckmarkCircle color="green" fontSize="32px"/>
    }
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem"}}>
        <div className="card-body">
          <button type="button" className="close" aria-label="Close" onClick={this.onCloseButtonClick}>
            <span aria-hidden="true">&times;</span>
          </button>

          <h5 className="card-title">{this.props.task.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Deadline: {this.props.task.deadline}</h6>
          <hr />
          <p className="card-text"><strong>Note: </strong><br/>{this.props.task.notes}</p>
          <button className="btn float-left" onClick={this.onEditButtonClick}>
              <IosCreateOutline fontSize="32px" />
          </button>
          <button className="btn float-right" onClick={this.onCheckmarkButtonClick}>
              {this.renderCheckMark()}
          </button>
        </div>
        <CenteredModal show={this.state.showingFormModal} onHide={this.onHideForm}
            title="Edit your task"
            body={<TaskForm onSubmit={this.onSubmit} title={this.props.task.title}
            notes={this.props.task.notes} deadline={this.props.task.deadline}/>} />

        <ConfirmModal show={this.state.showingConfirmModal} onHide={this.onHideConfirm}
          body={<p>Are you sure you want to delete this task?</p>} onConfirm={this.onConfirmDelete} />
      </div>
    )
  }
}

export default connect(null, {deleteTask, editTask})(Task);
