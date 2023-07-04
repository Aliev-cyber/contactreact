import React from 'react'
import { Button, FormControl } from 'react-bootstrap'


const ContactForm = ({handleSubmit,handleChange,inputs,editClick}) => {
  return (
    <div className="bg-[#e5e4e4] max-w-fit m-auto p-10">
        <form onSubmit={handleSubmit} style={{display:'flex',alignItems:'center',flexDirection:'column'}} >
          <div className="form-group w-50 p-3 bg-danger">
            <label>Name</label>
            <FormControl placeholder="name" name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div className="form-group w-50 p-3 bg-primary">
            <label>surname</label>
            <FormControl placeholder="surname" name="surname" value={inputs.surname} onChange={handleChange} />
          </div>
          <div className="form-group w-50 p-3 bg-success">
            <label>number</label>
            <FormControl placeholder="number" name="number" value={inputs.number} onChange={handleChange} />
          </div>
          <Button type="submit" className="btn btn-danger w-full mt-3">
            {editClick ? "update" : "Add"}
          </Button>
        </form>
      </div>
  )
}

export default ContactForm