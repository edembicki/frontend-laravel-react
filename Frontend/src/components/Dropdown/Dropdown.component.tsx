import React from 'react'
import './Dropdown.scss'
import { Delete, Dots, Edit } from '../icons'
import Dropdown from 'react-bootstrap/Dropdown'

interface Props {
  onEditClick: () => void
  onDeleteClick: () => void
}

const DropDownComponent: React.FC<Props> = ({onEditClick, onDeleteClick}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <Dots />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onEditClick()}><Edit />Editar</Dropdown.Item>
        <Dropdown.Item onClick={() => onDeleteClick()}><Delete /> Excluir</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownComponent
