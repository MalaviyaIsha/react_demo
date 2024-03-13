import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
export const GetData = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
   getUsers()
  }, []);

  const getUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((result) => result.json())
      .then((response) => {
        setData(response);
      });
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((response) => {
        console.log("Delete response:", response);
      });
  };

  const selectUser = (id) => {
    setTitle(data[id - 1].title)
    setBody(data[id - 1].body)
    setUserId(data[id - 1].id)
  };

  const updateUser = () => {
    console.log({title,body,userId})
    let data = { title, body, userId };
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) =>
        result.json()
      )
      .then((response) => {
        console.log("response:", response)
      })
  };

  return (
    <React.Fragment>
      <Container>
        <div>GetData</div>
        <Row className="mt-3">
          {data.map((item, i) => (
            <Col>
            <Card key={i} className="mb-4 bg-black text-white">
              <Card.Body>
                <h1 style={{ color: "yellow" }}>{item.id}</h1>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
              </Card.Body>
              <div className="d-flex justify-content-center m-4">
                <button onClick={() => deleteUser(item.id)}>Delete</button>
                  <button onClick={() => selectUser(item.id)}>Edit</button>
              </div>
            </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <br />
        <button onClick={updateUser}>Submit</button>
      </div>
     

    </React.Fragment>
  );
};
