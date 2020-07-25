import React from 'react';

import Modal from "react-bootstrap/Modal";

const CenteredModal = (props) => {

  return (
    <div onClick={e => e.stopPropagation()}>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
        centered show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        {props.body ? <Modal.Body>{props.body}</Modal.Body> : null}
        {props.footer ?  <Modal.Footer>{props.footer}</Modal.Footer> : null}
    </Modal>
    </div>
  )
}



export default CenteredModal;
