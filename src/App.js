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

  const sendEmail = event => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data);
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log('error', error);
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
  };

  return (
    <div className="app">
      <div className="contactMe">
        <form>
          <h1>Let's connect</h1>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Full name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID"
            required
          />
          <input
            type="text"
            value={subject}
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
          />
          <textarea
            type="text"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            required
          />
          <button onClick={sendEmail} type="submit">
            Submit
          </button>
          {result && (
            <p className={`${result.sucess ? "success" : "error"}`}>
              {result.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
