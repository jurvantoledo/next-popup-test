import { Modal } from "react-bootstrap";

export default function PlanAfspraak(props) {
    return (
        <>
          <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              plan afspraak in
          </Modal.Body>
          </Modal>
        </>
    )
}