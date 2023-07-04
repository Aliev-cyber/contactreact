import React, { useState } from "react";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    number:"",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    const { name, surname, number } = inputs
    e.preventDefault();

    if(!name || !surname || !number) {
      return
    }

    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        surname: "",
        number:"",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        surname: "",
        number:"",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, surname: tempData.surname,number: tempData.number });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div  className="min-h-screen bg-[#004b43]">
      <h1 className="text-center text-primary">Contact Book</h1>
      <ContactForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} editClick={editClick} />
      <ContactList handleDelete={handleDelete} handleEdit={handleEdit} tableData={tableData} />
    </div>
  );
};

export default Home;