import React from "react";
import Profile from "./Profile/ProfileComponent";
import avatar from "./Profile/avatar.png";

function App() {
  const firstName = "Daniel";
  const lastName = "Ndubuisi";
  const bioMessage = "I am a musician and a MERN stack developer in training!";
  const job = "Full stack developer";
  const handleName = () =>
    alert(
      `Hi, my name is ${
        lastName + " " + firstName
      } and i love to build websites!`
    );

  return (
    <div className="App">
      <Profile
        fullname={lastName + " " + firstName}
        bio={bioMessage}
        profession={job}
        handleName={handleName}
      >
        <img src={avatar} alt="user" onClick={handleName} />
      </Profile>
    </div>
  );
}

export default App;
