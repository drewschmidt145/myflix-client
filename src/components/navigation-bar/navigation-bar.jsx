import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainView } from "../main-view/main-view";

export const NavigationBar = ({ user, onLoggedOut, triggerGetAllMovies, triggerGetActionMovies, triggerGetAdventureMovies, triggerGetTrillerMovies, triggerGetCrimeMovies }) => {

  return (
    <Navbar bg="danger" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand 
          as={Link} to="/"
          onClick={triggerGetAllMovies}
        >
          MyFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">

            <Nav className="me-auto" >
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
                      onClick={triggerGetCrimeMovies}
                    >
                      Crime
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={triggerGetActionMovies}
                    >
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={triggerGetAdventureMovies}
                    >
                      Adventure
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={triggerGetTrillerMovies}
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