import React from "react";
import { Button, Form } from "react-bootstrap";

export const Login = () => {

  const handleLogin = e => {
    e.preventDefault()
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log(password,email)
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
