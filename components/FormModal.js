import { Button, Form } from "react-bootstrap";

export default function FormModal(props) {
    return (
        <>
            <Form>
                <Form.Label>{props.formTitle}</Form.Label>
                <Form.Control
                  placeholder={props.placeholder}
                />
            </Form>
        </>
    )
}