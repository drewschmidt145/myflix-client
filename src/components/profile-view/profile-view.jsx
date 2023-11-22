import React, {useState}  from "react";
import { MovieCard } from "../movie-card/movie-card"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


export const ProfileView = ({ user, token, movies, setUser }) => {

  const [Username, setName] = useState(user.Username)
  const [password, setPassword] = useState(null)
  const [Email, setEmail] = useState(user.Email)
  const [birthday, setBirthday] = useState(user.Birthday)


  const userfavoriteMovies = user.FavoriteMovies ? movies.filter((movie) => user.FavoriteMovies.includes(movie.id)) : [];

  console.log("favorites", user.FavoriteMovies);

  const handleUpdate = (event) => {
    event.preventDefault();
    
    const data = {
          Username: Username,
          Password: password,
          Email: Email,
          Birthday: birthday,
    }
    

    fetch(`https://myflix-movieapplication-16850a5656e8.herokuapp.com/users/${user.Username}` , {   
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			}
		}).then(async (response) => {
      console.log(response)
			if (response.ok) {
        response.json();
        alert('updated!')
			} else {
        const e = await response.text()
        console.log(e)
				alert("Update failed.")
			}
		}).then((updatedUser) => {
      if(updatedUser) {
        localStorage.setItem('user', JSON.stringify(updatedUser))
        setUser(updatedUser)
      }  
    })
  } 

  const handleDelete = () => {
		fetch(`https://myflix-movieapplication-16850a5656e8.herokuapp.com/users/${user.Username}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((response) => {
			if (response.ok) {
				setUser(null);
				alert("Your account has been deleted");
			} else {
				alert("something went wrong.")
			}
		})
	}

  return (


    <Container>
      <Row className="justify-content-center">
        
          <Col md={6} >
          <h2 className="profile-title">User info</h2>
          <Form className="my-profile" onSubmit={handleUpdate}>
          <Form.Group className="mb-2" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={Username}
            onChange={(e) => setName(e.target.value)}
            required
          />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </Form.Group>
          <Form.Group controlId="formBirthday">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required/>
          </Form.Group>
        
          <Button className="update" type="submit" onClick={handleUpdate}>Update</Button>
          <Button className="delete" onClick={handleDelete}>Delete Account</Button>

          </Form>
    
          </Col>

      </Row>
      <Row className="justify-content-md-center mx-3 my-4">
        <h2 className="profile-title">Favorite movies</h2>
        {userfavoriteMovies.map((movie) => {
          return (
            
            <Col
              key={movie.id}
            className="m-3"
            >
              <MovieCard
                movie={movie}
                token={token}
                setUser={setUser}
                user={user}
              />
            </Col>
          );
        })}
      </Row>



    </Container>

  )
}