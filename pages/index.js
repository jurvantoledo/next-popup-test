import { Modal, Button, Form, } from 'react-bootstrap'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import InterviewModal from '../components/InterviewModal'
import {InlineWidget} from 'react-calendly'

export default function Home() {
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [gegevens, setGegevens] = useState('')
  const [maxValue, setMaxValue] = useState(98)

  useEffect(() => {
    if(toggle3){
      setToggle2(false)
    }

  },[])

  if(maxValue >= 100) {
    return null
  }

  const handleOpen = () => {
    setToggle1(true)
    setMaxValue(maxValue + 1)

  }


  function closeModal1() {
    const random_boolean = Math.random() < 0.4
    setToggle1(false)
    setToggle2(random_boolean)

    if(!toggle2) {
      return  <InterviewModal 
      show={toggle1}
      onHide={e => closeModal1()}
      title="Modal header for first popup"
      formTitle="first popup"
      placeholder="first popup"
    />
    }

  }

  console.log(maxValue)


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button onClick={handleOpen}>
        Click me
      </Button>
      <>
      <Modal show={toggle1} onHide={e => closeModal1()}>
        <Modal.Header closeButton>Title 1</Modal.Header>
      </Modal>

      <Modal show={toggle2} onHide={e => setToggle2(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal header for 2de popup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Control
                  value={gegevens}
                  onChange={event => setGegevens(event.target.value)}
                  placeholder="placeholder"
                />
                <Button onClick={e => setToggle3(true)}>
                  Plan uw afspraak
                </Button>
              </Form>
          </Modal.Body>
          </Modal>

          <Modal show={toggle3} onHide={e => setToggle3(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Plan afspraak</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InlineWidget url="https://calendly.com/username/15min" />
          </Modal.Body>
          </Modal>
          </>
          
    </div>
  )
}