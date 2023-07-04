import React from 'react'

const ContactItem = ({ contactItem, itemIdx, handleEdit, handleDelete }) => {
  return (
    <tr className='text-light' key={itemIdx}>
    <td>{contactItem.name}</td>
    <td>{contactItem.surname}</td>
    <td>{contactItem.number}</td>
    <td>
      <button
        onClick={() => handleEdit(itemIdx)}
        className="mr-3 text-yellow-300 btn btn-primary"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(itemIdx)}
        className="text-red-500 btn btn-danger "
      >
        Delete
      </button>
    </td>
  </tr>
  )
}

export default ContactItem