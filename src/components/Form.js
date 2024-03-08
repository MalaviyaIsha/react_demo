import React, { useState } from "react"
const Form = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [check, setCheck] = useState(false);
  const getFormData = (e) => {
    console.log(name, department, check)
    e.preventDefault();
  }
  return (
    <div>
      <h1>Handle Form</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} /><br />
        <select onChange={(e) => setDepartment(e.target.value)}>
          <option>Select Department</option>
          <option>Computer</option>
          <option>EC</option>
        </select> <br />
        <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} /><span>Accept Terms and conditions</span><br />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
export default Form;