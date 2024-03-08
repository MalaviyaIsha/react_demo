import React from "react";
import { Table } from "react-bootstrap";
const NestedList = () => {
  //const students = ['Max' , 'Sofy' , 'Sam' , "Peter"];
  const students = [
    {
      name: "Max",
      email: "Max@test.com",
      address: [
        { Socity: "ABC", city: "Surat", country: "India" },
        { Socity: "ABC", city: "Ahemdabad", country: "India" },
      ],
    },
    {
      name: "Sam",
      email: "Sam@test.com",
      address: [
        { Socity: "XYZ", city: "Surat", country: "India" },
        { Socity: "XYZ", city: "Ahemdabad", country: "India" },
      ],
    },
    {
      name: "Peter",
      email: "Peter@test.com",
      address: [
        { Socity: "PQR", city: "Surat", country: "India" },
        { Socity: "PQR", city: "Ahemdabad", country: "India" },
      ],
    },
  ];
  return (
    <React.Fragment>
      <h1>List With Nested Array   </h1>
      <Table striped bordered variant="dark">
        <tbody>
          <tr>
            <td>S.N.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {students.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Table striped bordered variant="dark">
                  <tbody>
                    {data.address.map((item) => (
                      <tr>
                        <td>{item.Socity}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};
export default NestedList;
