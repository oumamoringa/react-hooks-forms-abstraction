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
