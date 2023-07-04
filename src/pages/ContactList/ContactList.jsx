import React from 'react'
import ContactItem from '../ContactItem/ContactItem'

export default function ContactList({ handleDelete, handleEdit, tableData }) {
  return (
    tableData.length ? <div className='d-flex justify-content-center mt-5'>
    <table className="w-full">
      <thead>
        <tr>
          <th style={{color:'green'}}>Name</th>
          <th style={{color:'#123973'}}>surname</th>
          <th style={{color:'red'}}>number</th>
          <th style={{color:'blue'}}>Actions</th>
        </tr>
      </thead>
      <tbody className="text-dark">
        {tableData.map((item, i) => (
         <ContactItem contactItem={item} itemIdx={i} handleEdit={handleEdit} handleDelete={handleDelete}/>
        ))}
      </tbody>
    </table>
  </div> : <div style={{color:'red',marginTop:'20px',fontSize:'20px'}}>Пусто</div>
  )
}
