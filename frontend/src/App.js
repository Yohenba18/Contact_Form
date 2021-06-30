import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(state.name);
  };

  const stateChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div className="app">
      <div className="contactMe">
        <form>
          <h1>Let's connect</h1>
          <input
            type="text"
            placeholder="Full Name"
            value={state.name}
            onChange={stateChange}
          />
          <input
            type="text"
            value={state.email}
            onChange={stateChange}
            placeholder="Email ID"
          />
          <input
            type="text"
            value={state.subject}
            onChange={stateChange}
            placeholder="Subject"
          />
          <textarea
            type="text"
            value={state.message}
            onChange={stateChange}
            placeholder="Type your message here..."
          />
          <button onClick={sendEmail} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
