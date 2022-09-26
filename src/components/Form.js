import React, { useState } from "react";

function Form() {
  let [formData, setFormData]=useState(
    {
      firstName: "John",
      lastName: "Henry",
    }
  );


  function handleFirstNameChange(event) {

    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "chackbox") {
      value = event.target.checked;
    }
    console.log(handleChange())


  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={formData.firstName} />
      <input type="text" onChange={handleLastNameChange} value={formData.lastName} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
