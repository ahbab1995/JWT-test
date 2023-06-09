import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const handleLogin = e => {
  
    e.preventDefault()
    const password = e.target.password.value;
    const email = e.target.email.value;
    fetch("http://localhost:5000/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email,password})
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.success) {
        localStorage.setItem('accessToken',data.accessToken)
        navigate('/orderlist')
      }
      console.log(data)
    })
  }
  return (
    <div className="container  ">
      <h2>Login</h2>
      <div className="w-25 mx-auto">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
