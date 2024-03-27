import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";





function MyVerticallyCenteredModal(props) { 
   
  return (
    <Modal 
      show={props.show}
      onHide={props.onHide}

      data-card-id={props.datacardid}
      data-card-name={props.doctordata}
      id="modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className=" text-danger"  >
          Appointment for <span>{props.doctordata}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.onsbmt}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-semibold">Patinent Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" onChange={props.onchg}  value={props.inputValue}/> 
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-semibold">Day&Time</Form.Label>
            <Form.Control type="datetime-local"  onChange={props.onchg}  value={props.dateValue}/>
          </Form.Group>
           
          <Modal.Footer className="d-flex align-items-center justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
