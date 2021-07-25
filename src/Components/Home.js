import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://thumbs.dreamstime.com/b/tution-sign-wooden-board-tution-sign-wooden-board-white-isolated-background-167887390.jpg"
          }
          className="App-logo"
          alt="logo"
        />
        <h1 className="App-title">Welcome to Bhide Tutions</h1>
      </header>
      <p className="App-sub">Here You Can Assign Student To Any Mentor</p>
    </div>
  );
};

export default Home;
