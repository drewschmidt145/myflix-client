import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Button, Form, Alert, Container, Col } from "react-bootstrap";


export const SignupView = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://myflix-movieapplication-16850a5656e8.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        // alert("Signup successful");
        <div class="alert alert-primary" role="alert">
          Signup Successful!
        </div>
        navigate("/login")
      } else {
        alert("Signup failed");
      }
    });
  };

  return (

    <Container className="mt-5 ms-5 pl-3">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="mr-30">
          <h2 color="d" className="text-center mb-4">Signup</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" >
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength={3}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" >
            <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" >
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBirthday" >
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

  );
};