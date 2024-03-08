import React from "react";
import { Table } from 'react-bootstrap';
const Map = () => {
  //const students = ['Max' , 'Sofy' , 'Sam' , "Peter"];
  const students = [
    { name: "Max", email: "Max@test.com", city: "Surat" },
    { name: "Sam", email: "Sam@test.com", city: "Ahemdabad" },
    { name: "Peter", email: "Peter@test.com", city: "Surat" }
  ];
  return (
    <React.Fragment>
      <h1>Handle Array </h1>
      <Table striped bordered variant="dark">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>City</td>
          </tr>
          {
            students.map((data, index) =>
              data.city === 'Surat' ?
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.city}</td>
                </tr> : null
            )
          }
        </tbody>

      </Table>
    </React.Fragment>
  )
}
export default Map; 