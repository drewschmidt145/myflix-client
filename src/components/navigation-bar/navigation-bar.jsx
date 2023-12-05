import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/profile">
                  Account
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>
                  Logout
                </Nav.Link>
                
                <NavDropdown
                  title="Genres"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    to={`movies/Genres/Crime`}
                  >
                    Crime
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={`movies/Genres/Action`}
                  >
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={`movies/Genres/Adventure`}
                  >
                    Adventure
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={`movies/Genres/Thriller`}
                  >
                    Thriller
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};