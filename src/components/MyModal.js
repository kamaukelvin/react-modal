import React from "react";
import { Modal, Button } from "react-bootstrap";


const MyModal = (props)=> {

    return (
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Enter any title of the modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Image should be here</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={props.onHide}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default MyModal