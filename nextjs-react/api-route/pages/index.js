import { useRef, useState } from 'react';

const HomePage = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const loadFeedbackHandler = () => {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>feedback</label>
          <textarea type='feedback' row='5' ref={feedbackInputRef} />
        </div>
        <button type='submit'>send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
