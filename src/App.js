import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AddMentors from "./Components/AddMentors";
import AddStudents from "./Components/AddStudents";
import MentorChange from "./Components/MentorChange";
import ShowStudentToMentor from "./Components/ShowStudentToMentor";
import StudentMentor from "./Components/StudentMentor";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav.Link as={NavLink} to="/">
              <Navbar.Brand>Bhide Tution</Navbar.Brand>
            </Nav.Link>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/addmentor">
                Add Mentors
              </Nav.Link>
              <Nav.Link as={NavLink} to="/addstudent">
                Add Students
              </Nav.Link>
              <Nav.Link as={NavLink} to="/StudentMentor">
                Add Student For Mentor
              </Nav.Link>
              <Nav.Link as={NavLink} to="/mentorchange">
                Change Mentor
              </Nav.Link>
              <Nav.Link as={NavLink} to="/ShowStudentToMentor">
                Show Student for Mentor
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addmentor" component={AddMentors} />
          <Route exact path="/addstudent" component={AddStudents} />
          <Route exact path="/mentorchange" component={MentorChange} />
          <Route
            exact
            path="/ShowStudentToMentor"
            component={ShowStudentToMentor}
          />
          <Route exact path="/StudentMentor" component={StudentMentor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
