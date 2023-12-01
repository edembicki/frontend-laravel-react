import React from 'react'
import Modal from 'react-bootstrap/esm/Modal'
import Button from 'react-bootstrap/esm/Button'
import { modal } from './Modal.constants'
import Form from 'react-bootstrap/esm/Form'
import { Props } from './Modal.types'
import './Modal.scss'
import RichText from '../RichText/RichText.component'

const ModalComponent: React.FC<Props> = ({currentFeedData, onHide, onSuccess, reducer}) => {
  const {
    feedFormText,
    setFeedFormAuthor,
    setFeedFormType,
    setFeedFormText,
    dispatch
  } = reducer
  return (
    <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {modal.title}
          <Button className='Modal__CloseButton' onClick={() => onHide()}>X</Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control 
              required
              defaultValue={currentFeedData?.author || ''}
              type="text" 
              placeholder={modal.input_author_placeholder} 
              onBlur={e => dispatch(setFeedFormAuthor(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select defaultValue={currentFeedData?.type || ''} onChange={e => dispatch(setFeedFormType(e.target.value))}>
              <option>{modal.input_type_placeholder}</option>
              {modal.input_type_options.map((option, idx) => <option key={idx} value={option}>{option}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <RichText 
              defaultValue={currentFeedData?.text || ''}
              reducer={
              {
                feedFormText,
                setFeedFormText,
                dispatch
              }
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onSuccess()}>Publicar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent
