import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const state = { name, email, subject, message };

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...state })
      .then((response) => setResult(response.data))
      .catch(() => {
        setResult({ success: false, message: 'Something went wrong. Try again later'});
      });
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="app">
      <div className="contactMe">
        <form>
          <h1>Let's connect</h1>
          <input
            type="text"
            value={name}
            placeholder="Full name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button onClick={sendEmail} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
