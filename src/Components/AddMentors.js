import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddMentors = () => {
  const [name, setName] = useState("");

  const addMentor = async (e) => {
    e.preventDefault();
    setName("");
    if (!name) {
      toast.warn("Fill the Name", {
        position: "top-right",
      });
    } else {
      const res = await fetch(
        "https://mentor-and-student-server.herokuapp.com/mentor",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        }
      );

      if (res.status === 500) {
        toast.error("Server Error", {
          position: "top-right",
        });
      } else if (res.status === 200) {
        toast.success("Mentor Added", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div>
      <Container>
        <h3>Add Mentor</h3>
        <Form>
          <Form.Group>
            <Form.Label>Mentor Name</Form.Label>
            <Form.Control
              id="textMentor"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button type="submit" onClick={addMentor}>
            Add Mentor
          </Button>
        </Form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AddMentors;
