import React from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import { User } from './User';

export const UserListRouting = () => {
  const users = [
    { id: 1, name: "Max", email: "Max@test.com", city: "Surat" },
    { id: 2, name: "Sam", email: "Sam@test.com", city: "Ahemdabad" },
    { id: 3, name: "Peter", email: "Peter@test.com", city: "Surat" }
  ];
  return (
    <React.Fragment>
      <h1>UserListRouting</h1>
      {
        users.map((item) =>
          <div>
            <Link to={"/user/" + item.id + "/" + item.name}><h3>{item.name}</h3></Link>
          </div>
        )
      }
      <Routes>
        <Route path='/user/:id/:name' element={<User />} />
      </Routes>
     
    </React.Fragment>

  )
}
