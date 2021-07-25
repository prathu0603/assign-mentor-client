import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentMentor = () => {
  const student = [];
  let mentor = "";
  const [displayStudent, setDisplayStudent] = useState([]);
  const [displayMentor, setDisplayMentor] = useState([]);
  const loadData = async () => {
    try {
      const studentResponse = await fetch(
        "https://mentor-and-student-server.herokuapp.com/student"
      );
      const studentData = await studentResponse.json();
      console.log(studentData);
      let a = studentData.filter((data) => !data.mentorId);
      console.log(a);

      const mentorResponse = await fetch(
        "https://mentor-and-student-server.herokuapp.com/mentor"
      );
      const mentorData = await mentorResponse.json();

      setDisplayStudent(a);
      setDisplayMentor(mentorData);
    } catch (error) {
      console.log("error server");
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleStudentChange = (event) => {
    const target = event.target;
    var value = target.value;

    if (target.checked) {
      student.push(value);
    } else {
      student.splice(value, 1);
    }
  };
  const handleMentorChange = (event) => {
    const target = event.target;
    var value = target.value;

    if (target.checked) {
      mentor = value;
    }
  };

  const showStudent = async () => {
    if (student.length === 0) {
      window.alert("Select Atleast On student");
    } else if (mentor === "") {
      window.alert("Select Mentor");
    } else {
      const request = await fetch(
        "https://mentor-and-student-server.herokuapp.com/student/add-mentor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: student,
            mentorId: mentor,
          }),
        }
      );
      if (!(request.status === 200)) {
        window.alert("failed");
      } else {
        window.alert("Student Allocated To selected Mentor");
      }
    }
  };

  return (
    <div className="mentor-students">
      <div>
        <h3>Select Students</h3>
        {displayStudent.length === 0 ? (
          <p>
            <img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!bw700" />
          </p>
        ) : (
          <ul className="person-list">
            {displayStudent.map(({ name, _id, mentorId }) => (
              <div className="list">
                <li key={_id}>
                  <div className="person-list">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={_id}
                        name={name}
                        value={_id}
                        onChange={handleStudentChange}
                      />
                      <label htmlFor={_id}>{name}</label>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>Select Mentors</h3>
        <ul className="person-list">
          {displayMentor.map(({ name, _id }) => (
            <div className="list">
              <li key={_id}>
                <div>
                  <div>
                    <input
                      type="radio"
                      id={_id}
                      name={"mentorName"}
                      value={_id}
                      onChange={handleMentorChange}
                    />
                    <label htmlFor={_id}>{name}</label>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <form>
        <button onClick={showStudent} className="button">
          Add Students To Selected Mentor
        </button>
      </form>
    </div>
  );
};

export default StudentMentor;
