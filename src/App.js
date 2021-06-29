import React, { useState } from 'react';
import "./App.css";

function App() {

  const [state,setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  

  return (
    <div className="app">
      <div className="contactMe">
        <form>
          <h1>CONTACT ME</h1>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email ID" />
          <input type="text" placeholder="Subject" />
          <textarea type="text" placeholder="Type your message here..." />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
