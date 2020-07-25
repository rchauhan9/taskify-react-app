import React from 'react';

import CenteredModal from './CenteredModal';
import confirmModal from '../css/confirmModal.css';

class ConfirmModal extends React.Component {

  onHide = () => {
    this.props.onHide()
  }

  onConfirm = () => {
    this.props.onConfirm()
  }

  renderFooter() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.onConfirm}>Yes</button>
        <button className="btn btn-danger" onClick={this.onHide}>No</button>
      </div>
    )
  }

  render() {
    return (
      <CenteredModal show={this.props.show} onHide={this.onHide}
        title="Are you sure?"
        body={this.props.body}
        footer={this.renderFooter()} />
    )
  }
}

export default ConfirmModal;
