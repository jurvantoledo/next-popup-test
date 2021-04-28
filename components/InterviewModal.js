import Head from 'next/head'
import { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import FormModal from './FormModal'

export default function InterviewModal(props) {
  const [toggle3, setToggle3] = useState(false)

  console.log(toggle3)
    return (
        <>
          <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormModal
                formTitle="title"
                placeholder="placehodler"
                click={e => setToggle3(true)}
              />
          </Modal.Body>
          </Modal>
        </>
    )
}