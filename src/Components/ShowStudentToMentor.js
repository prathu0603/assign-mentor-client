import React, { useState, useEffect } from "react";
import "../App.css";

const ShowStudentToMentor = () => {
  const [filterStudent, setFilterStudent] = useState([]);
  let mentor = "";
  const [displayStudent, setDisplayStudent] = useState([]);
  const [displayMentor, setDisplayMentor] = useState([]);
  const loadData = async () => {
    try {
      const studentResponse = await fetch(
        "https://mentor-and-student-server.herokuapp.com/student"
      );
      const studentData = await studentResponse.json();

      const mentorResponse = await fetch(
        "https://mentor-and-student-server.herokuapp.com/mentor"
      );
      const mentorData = await mentorResponse.json();

      setDisplayStudent(studentData);
      setDisplayMentor(mentorData);
    } catch (error) {
      console.log("error server");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleMentorChange = (event) => {
    const target = event.target;
    var value = target.value;

    if (target.checked) {
      mentor = value;
    }
  };

  const showStudent = async () => {
    if (mentor === "") {
      window.alert("Select Mentor");
    } else {
      setFilterStudent(displayStudent.filter((x) => x.mentorId === mentor));
      console.log(filterStudent);
    }
  };

  return (
    <div className="mentor-students">
      <div>
        <h3>Select Students</h3>
        {filterStudent.length === 0 ? (
          <p>No Students For Selected Mentors</p>
        ) : (
          <>
            <div className="list">
              <ul>
                {filterStudent.map(({ name, _id }) => (
                  <li key={_id}>
                    {/* <input type="text" id={_id} name={name} value={_id} /> */}
                    <p>{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <div>
        <h3>Select Mentors</h3>
        {displayMentor.length === 0 ? (
          <img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!bw700" />
        ) : (
          <>
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
          </>
        )}
      </div>
      <div>
        <button onClick={showStudent} className="button">
          Show Students
        </button>
      </div>
    </div>
  );
};

export default ShowStudentToMentor;
